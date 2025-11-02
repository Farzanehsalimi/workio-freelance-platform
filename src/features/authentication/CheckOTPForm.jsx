import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";
import WORKIO from "@/components/icons/WORKIO";
import { formatTime } from "../../utils/formatTime";

const RESEND_TIME = 130;

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (time <= 0) return;
    const intervalId = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="sm:border py-8 md:py-10 sm:px-6 rounded-xl flex flex-col justify-center sm:flex-col max-w-xs sm:max-w-sm">
        <div className="flex justify-center items-center relative">
          <button onClick={onBack} className="absolute right-0 -top-8 sm:top-0">
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

        <form onSubmit={checkOtpHandler}>
          <p className="text-xl sm:text-2xl mt-10 text-secondary-900">
            کد تایید را وارد کنید
          </p>

          {otpResponse && (
            <p className="flex items-center gap-x-2 my-6">
              <span className="text-secondary-600">{otpResponse?.message}</span>
              <button type="button" onClick={onBack}>
                <CiEdit className="w-6 h-6 text-primary-500" />
              </button>
            </p>
          )}

          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="text-secondary-300">-</span>}
            renderInput={(props) => (
              <input
                type="number"
                {...props}
                className="otp-input"
                placeholder=" "
              />
            )}
            containerStyle="flex flex-row-reverse gap-x-0.5 sm:gap-x-1 md:gap-x-2 justify-center"
            inputStyle={{
              width: "2.4rem",
              padding: "0.4rem 0.2rem",
              border: "1px solid rgb(var(--color-primary-400))",
              borderRadius: "0.5rem",
            }}
          />

          <div className="flex flex-col justify-center items-center">
            <div className="text-sm my-8 sm:my-7 text-secondary-600">
              {time > 0 ? (
                <p> {formatTime(time)} مانده تا دریافت مجدد کد</p>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    onReSendOtp({ phoneNumber });
                    setTime(RESEND_TIME);
                  }}
                  className="text-primary-500 disabled:opacity-20"
                >
                  ارسال مجدد کد تایید
                </button>
              )}
            </div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default CheckOTPForm;
