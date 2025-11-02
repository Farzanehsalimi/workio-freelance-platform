import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useMoveBack from "../../hooks/useMoveBack";
import { HiArrowRight } from "react-icons/hi";
import WORKIO from "@/components/icons/Workio.jsx";
import { Link } from "react-router-dom";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  const moveBack = useMoveBack();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-6 sm:border py-8 md:py-10 sm:px-7 rounded-xl w-72 sm:w-96">
        <div className="flex justify-center items-center relative">
          <button
            onClick={moveBack}
            className="absolute right-0 -top-8 sm:top-0"
          >
            <HiArrowRight className="w-6 h-6 text-secondary-600" />
          </button>
          <Link
            to="/"
            className="flex items-center gap-x-4 justify-center text-secondary-700 pb-2"
          >
            <div className="flex flex-col items-center leading-5">
              <WORKIO className="w-32 md:w-40" />
              <span className="text-sm text-primary-500 font-bold">
                اپلیکیشن فریلنســــری
              </span>
            </div>
          </Link>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl mt-8 text-secondary-900">
            ورود | ثبت نام
          </h1>
          <p className="mt-6 text-sm text-secondary-700">سلام!</p>

          <form className="space-y-6" onSubmit={onSubmit}>
            <TextField
              label="لطفا شماره موبایل خود را وارد کنید"
              name="phoneNumber"
              register={register}
            />
            {isSendingOtp ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full" type="submit">
                ارسال کد تایید
              </button>
            )}
          </form>

          <p className="text-[10px] sm:text-xs mt-6 text-secondary-500">
            ورود شما به معنای پذیرش{" "}
            <span className="text-primary-500 cursor-pointer">شرایط ورکیو</span>{" "}
            و
            <span className="text-primary-500 cursor-pointer">
              {" "}
              قوانین حریم‌خصوصی{" "}
            </span>{" "}
            است
          </p>
        </div>
      </div>
    </div>
  );
}

export default SendOTPForm;
