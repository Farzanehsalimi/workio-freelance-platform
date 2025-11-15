import useUser from "../features/authentication/useUser";
import toLocalDateShort from "../utils/toLocalDateShort";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import { CiCalendarDate } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";

function Profile() {
  const { user } = useUser();
  return (
    <div className="p-4 sm:p-6 space-y-10 shadow-sm shadow-primary-700 rounded-3xl">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-2 sm:gap-4">
          <span className="cursor-pointer rounded-full bg-secondary-200 text-secondary-600 border-2 border-secondary-100 px-5 py-3 sm:py-3 sm:px-5 font-bold">
            {user?.name?.[0].toUpperCase() || "؟"}
          </span>
          <div className="flex flex-col">
            <span className="text-secondary-800 text-base sm:text-lg font-bold">
              {user?.name}
            </span>
            <span className="text-sm sm:text-base text-secondary-400">
              {user?.email}
            </span>
          </div>
        </div>
        <button className="hidden sm:block btn btn--primary py-2 px-6">
          ویرایش
        </button>
        <TbEdit className="sm:hidden w-7 h-7 text-primary-500" />
      </div>
      <div className="grid sm:grid-cols-2 gap-x-14 gap-y-8">
        <div className="space-y-4">
          <p className="text-secondary-700">نام و نام خانوادگی</p>
          <p className="bg-secondary-50/70 py-2 px-3 text-secondary-500 w-full rounded-xl">
            {user?.name}
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-secondary-700">ایمیل</p>
          <p className="bg-secondary-50/70 py-2 px-3 text-secondary-500 w-full rounded-xl">
            {user?.email}
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-secondary-700">شماره موبایل</p>
          <p className="bg-secondary-50/70 py-2 px-3 text-secondary-500 w-full rounded-xl">
            {toPersianNumbers(user?.phoneNumber)}
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-primary-500">تاریخ پیوستن:</p>
          <p className="flex items-center gap-2 py-2 px-3 bg-primary-900 rounded-xl">
            <span>
              <CiCalendarDate className="w-6 h-6 text-primary-500" />
            </span>
            <span>{toLocalDateShort(user?.createdAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
