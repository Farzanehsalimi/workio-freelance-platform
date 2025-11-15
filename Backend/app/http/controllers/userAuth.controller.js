const Controller = require("./controller");
const {
  generateRandomNumber,
  toPersianDigits,
  setAccessToken,
  setRefreshToken,
  verifyRefreshToken,
} = require("../../../utils/functions");
const createError = require("http-errors");
const { UserModel } = require("../../models/user");
const Kavenegar = require("kavenegar");
const CODE_EXPIRES = 90 * 1000; // 90 seconds
const { StatusCodes: HttpStatus } = require("http-status-codes");
const {
  completeProfileSchema,
  updateProfileSchema,
  checkOtpSchema,
} = require("../validators/user.schema");

class userAuthController extends Controller {
  constructor() {
    super();
    this.code = 0;
    this.phoneNumber = null;
  }

  async getOtp(req, res) {
    let { phoneNumber } = req.body;

    if (!phoneNumber)
      throw createError.BadRequest("شماره موبایل معتبر را وارد کنید");

    phoneNumber = phoneNumber.trim();
    this.phoneNumber = phoneNumber;
    this.code = generateRandomNumber(6);

    const result = await this.saveUser(phoneNumber);
    if (!result) throw createError.Unauthorized("ورود شما انجام نشد.");

    if (process.env.IS_TESTING_MODE_OTP) {
      return res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        data: {
          message: `کد تائید برای ورود تستی: ${this.code}`,
          expiresIn: CODE_EXPIRES,
          phoneNumber,
        },
      });
    } else {
      this.sendOTP(phoneNumber, res);
    }
  }

  async checkOtp(req, res) {
    await checkOtpSchema.validateAsync(req.body);
    const { otp: code, phoneNumber } = req.body;

    const user = await UserModel.findOne(
      { phoneNumber },
      { password: 0, refreshToken: 0, accessToken: 0 }
    );

    if (!user) throw createError.NotFound("کاربری با این مشخصات یافت نشد");

    if (user.otp.code != code)
      throw createError.BadRequest("کد ارسال شده صحیح نمیباشد");

    if (new Date(user.otp.expiresIn).getTime() < Date.now())
      throw createError.BadRequest("کد اعتبار سنجی منقضی شده است");

    user.isVerifiedPhoneNumber = true;
    await user.save();

    await setAccessToken(res, user);
    await setRefreshToken(res, user);
    let WELLCOME_MESSAGE = `کد تایید شد، به فریلنستو خوش آمدید`;
    if (!user.isActive)
      WELLCOME_MESSAGE = `کد تایید شد، لطفا اطلاعات خود را تکمیل کنید`;

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: WELLCOME_MESSAGE,
        user,
      },
    });
  }

  async saveUser(phoneNumber) {
    const otp = {
      code: this.code,
      expiresIn: Date.now() + CODE_EXPIRES,
    };

    const user = await this.checkUserExist(phoneNumber);
    if (user) return await this.updateUser(phoneNumber, { otp });

    // ایجاد کاربر جدید با نقش پیش‌فرض USER
    return await UserModel.create({
      phoneNumber,
      otp,
      role: "USER",
    });
  }

  async checkUserExist(phoneNumber) {
    return await UserModel.findOne({ phoneNumber });
  }

  async updateUser(phoneNumber, objectData = {}) {
    Object.keys(objectData).forEach((key) => {
      if (["", " ", 0, null, undefined, "0", NaN].includes(objectData[key]))
        delete objectData[key];
    });
    const updatedResult = await UserModel.updateOne(
      { phoneNumber },
      { $set: objectData }
    );
    return !!updatedResult.modifiedCount;
  }

  sendOTP(phoneNumber, res) {
    const kaveNegarApi = Kavenegar.KavenegarApi({
      apikey: `${process.env.KAVENEGAR_API_KEY}`,
    });
    kaveNegarApi.VerifyLookup(
      {
        receptor: phoneNumber,
        token: this.code,
        template: "registerVerify",
      },
      (response, status) => {
        if (response && status === 200)
          return res.status(HttpStatus.OK).send({
            statusCode: HttpStatus.OK,
            data: {
              message: `کد تائید برای شماره موبایل ${toPersianDigits(
                phoneNumber
              )} ارسال گردید`,
              expiresIn: CODE_EXPIRES,
              phoneNumber,
            },
          });

        return res.status(status).send({
          statusCode: status,
          message: "کد اعتبارسنجی ارسال نشد",
        });
      }
    );
  }

  async completeProfile(req, res) {
    await completeProfileSchema.validateAsync(req.body);
    const { user } = req;
    const { name, email, role } = req.body;

    if (!user.isVerifiedPhoneNumber)
      throw createError.Forbidden("شماره موبایل خود را تایید کنید.");

    const duplicateUser = await UserModel.findOne({ email });
    if (duplicateUser)
      throw createError.BadRequest(
        "کاربری با این ایمیل قبلا ثبت نام کرده است."
      );

    // 🔧 تغییر اصلی: هر دو نقش OWNER و FREELANCER به صورت خودکار status=2 می‌گیرند
    let updateData = { name, email, isActive: true, role };

    if (role && ["OWNER", "FREELANCER"].includes(String(role).toUpperCase())) {
      updateData.status = 2;
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: user._id },
      { $set: updateData },
      { new: true }
    );

    if (!updatedUser)
      throw createError.InternalServerError("به‌روزرسانی کاربر انجام نشد");

    await setAccessToken(res, updatedUser);
    await setRefreshToken(res, updatedUser);

    return res.status(HttpStatus.OK).send({
      statusCode: HttpStatus.OK,
      data: {
        message: "اطلاعات شما با موفقیت تکمیل شد",
        user: updatedUser,
      },
    });
  }

  async updateProfile(req, res) {
    const { _id: userId } = req.user;
    await updateProfileSchema.validateAsync(req.body);
    const { name, email, biography, phoneNumber } = req.body;

    const updateResult = await UserModel.updateOne(
      { _id: userId },
      { $set: { name, email, biography, phoneNumber } }
    );

    if (updateResult.modifiedCount === 0)
      throw createError.BadRequest("اطلاعات ویرایش نشد");

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "اطلاعات با موفقیت آپدیت شد",
      },
    });
  }

  async refreshToken(req, res) {
    const userId = await verifyRefreshToken(req);
    const user = await UserModel.findById(userId);
    if (!user) throw createError.Unauthorized("کاربر یافت نشد");
    await setAccessToken(res, user);
    await setRefreshToken(res, user);
    return res.status(HttpStatus.OK).json({
      StatusCode: HttpStatus.OK,
      data: {
        user,
      },
    });
  }

  async getUserProfile(req, res) {
    const { _id: userId } = req.user;
    const user = await UserModel.findById(userId, { otp: 0 });

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        user,
      },
    });
  }

  logout(req, res) {
    const cookieOptions = {
      maxAge: 1,
      expires: Date.now(),
      httpOnly: true,
      signed: true,
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "development" ? false : true,
      path: "/",
      domain: process.env.DOMAIN,
    };
    res.cookie("accessToken", null, cookieOptions);
    res.cookie("refreshToken", null, cookieOptions);

    return res.status(HttpStatus.OK).json({
      StatusCode: HttpStatus.OK,
      roles: null,
      auth: false,
    });
  }
}

module.exports = {
  UserAuthController: new userAuthController(),
};
