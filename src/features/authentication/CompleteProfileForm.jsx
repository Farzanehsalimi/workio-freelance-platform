import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { completeProfile } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";
import WORKIO from "@/components/icons/Workio.jsx";

function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.role === "OWNER") {
        navigate("/owner");
      }
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full sm:max-w-sm sm:border py-8 md:py-10 sm:px-6 rounded-xl flex flex-col justify-center sm:flex-col max-w-xs">
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
        <form className="space-y-8 mt-6" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label={"نام و نام خانوادگی"}
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />
          <TextField
            label={"ایمیل"}
            name={"email"}
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />

          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                {
                  value: "FREELANCER",
                  label: "فریلنسر",
                },
              ],
            }}
          />

          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full" type="submit">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
