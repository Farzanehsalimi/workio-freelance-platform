import { useEffect, useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";
import SendOTPForm from "./SendOTPForm";

function AuthContainer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const { handleSubmit, register, getValues } = useForm();
  const { user } = useUser();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const reSendOtpHandler = async ({ phoneNumber }) => {
    try {
      const res = await mutateAsync({ phoneNumber });
      toast.success(
        "کد تایید مجدد برای شماره " + res.phoneNumber + " ارسال شد"
      );
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const sendOtpHandler = async (formData) => {
    try {
      const res = await mutateAsync(formData);
      setStep(2);
      toast.success(" کد تایید برای شماره " + res.phoneNumber + " ارسال شد ");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onReSendOtp={reSendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()} </div>;
}

export default AuthContainer;
