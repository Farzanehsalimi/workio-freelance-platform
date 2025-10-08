import { Link } from "react-router-dom";
import AboutUsGirl from "../../assets/images/AboutUsGirl.webp";
import { TiTick } from "react-icons/ti";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

function AboutUs() {
  return (
    <div className="flex flex-col justify-center mx-auto sm:flex-row mt-16 sm:mt-20 md:mt-28 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-full px-4 flex-1">
      <div className="flex flex-col justify-between bg-secondary-900 pt-6 sm:pt-8 lg:pt-12 pb-6 lg:pb-8 px-4 sm:pr-8 md:px-10 lg:px-12 rounded-t-3xl sm:rounded-e-none sm:rounded-r-3xl">
        <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-2">
          <span className="text-primary-900 bg-primary-400 text-xs lg:text-sm lg:mb-5 mb-2 text-center rounded-2xl px-2 py-0.5">
            درباره ی ما
          </span>
          <h2 className="text-secondary-0 text-xl md:text-2xl lg:text-4xl font-bold">
            کار رویایی‌ات را پیدا کن!
          </h2>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-2 mb-4 sm:mb-0 lg:mb-4">
            <TiTick className="w-4 h-4 lg:w-8 lg:h-8 text-secondary-800 bg-secondary-0 rounded-full" />
            <p className="text-secondary-0 text-sm md:text-lg xl:text-2xl">
              مسیرت رو با فرصت‌های واقعی بساز!
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TiTick className="w-4 h-4 lg:w-8 lg:h-8 text-secondary-800 bg-secondary-0 rounded-full" />
            <p className="text-secondary-0 text-sm md:text-lg xl:text-2xl">
              بر اساس سبک زندگی خودت کار کن!
            </p>
          </div>
          <Link
            to="/"
            className="flex justify-center items-center self-end gap-1 md:gap-2 self-start text-sm md:text-base lg:text-2xl font-bold bg-orange hover:bg-orange/90 hover:scale-105 duration-500 rounded-full py-1 md:py-1.5 lg:py-2 px-2 md:px-3 lg:px-4 text-secondary-0 mt-6"
          >
            <span>اطلاعات بیشتر</span>
            <span>
              <ArrowLongLeftIcon className="w-6 h-6 text-secondary-0" />
            </span>
          </Link>
        </div>
      </div>
      <img
        className="max-h-64 md:max-h-80 lg:max-h-[420px] lg:max-w-[460px] rounded-b-3xl sm:rounded-s-none sm:rounded-l-3xl object-fill flex-1"
        src={AboutUsGirl}
        alt="AboutUsGirl"
      />
    </div>
  );
}

export default AboutUs;
