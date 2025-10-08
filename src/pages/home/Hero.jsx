import { Link } from "react-router-dom";
import HeroGirl from "../../assets/images/HeroGirl.png";
import GreenBg from "@/components/icons/GreenBg";
import BlackBg from "@/components/icons/BlackBg";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import GoldBadge from "../../assets/images/Gold-Ribbon-Badge.png";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-around lg:mt-14">
      <div className="flex flex-col mt-10 gap-16 lg:mt-12">
        <div className="flex items-center lg:items-start flex-col mb-8 sm:mb-12 lg:mb-0">
          <span className="bg-primary-900 text-primary-400 text-xs lg:text-sm lg:mb-3 mb-1.5 text-center rounded-2xl px-1 py-0.5">
            جست‌وجو میان {toPersianNumbersWithComma(10000)} فرصت فریلنسری
          </span>
          <p className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center lg:text-right text-secondary-900">
            <div className="lg:hidden">
              شروع مسیر موفقیت <br />
              <span className="text-primary-400 font-black">فریلنسری </span> تو
              از اینجاست!
            </div>
            <div className="hidden lg:block">
              شروع مسیر موفقیت
              <br />
              <span className="text-primary-400 font-black">فریلنسری </span> تو
              از اینجاست!
            </div>
          </p>
          <Link
            to="/auth"
            className="text-2xl font-bold bg-orange hover:bg-orange/90 hover:scale-105 duration-500 rounded-full py-2 px-6 text-secondary-0 mt-6 self-end hidden lg:block"
          >
            شروع کن!
          </Link>
        </div>
        <div className="hidden lg:flex relative self-end">
          <BlackBg className="w-[412px] h-[212px] text-secondary-900" />
          <div class="flex items-center absolute top-8 left-10">
            <span className="text-secondary-300 ml-9 text-sm">
              رتبه بندی ها
            </span>
            <div class="avatar">
              <img src="/src/assets/images/avatar-3.jpg" alt="avatar-3" />
            </div>
            <div class="avatar">
              <img src="/src/assets/images/avatar-2.jpeg" alt="avatar-2" />
            </div>
            <div class="avatar">
              <img src="/src/assets/images/avatar-1.jpg" alt="avatar-1" />
            </div>
            <div class="hidden-avatars bg-orange text-secondary-900">
              {toPersianNumbers(4.8)}
            </div>
          </div>
          <span className="absolute text-secondary-200 bottom-10 left-4 text-2xl text-center w-2/3">
            {/* <span className="absolute text-secondary-200 bottom-10 left-4 text-2xl w-2/3 text-center"> */}
            جایی که استعدادها به فرصت تبدیــــل می‌شن!
            {/* محبوب ترین پلتفــرم فریلنســری */}
          </span>
          <img
            src={GoldBadge}
            className="absolute bottom-6 right-8 w-24 h-24"
            alt=""
          />
        </div>
      </div>
      <div className="relative mt-2 lg:mt-6 mx-auto lg:mx-0">
        <button className="absolute right-5 top-2.5 bg-secondary-900 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 sm:top-4 sm:right-7 rounded-2xl sm:rounded-3xl flex justify-center items-center">
          <ArrowUpRightIcon className="text-secondary-50 w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <GreenBg className="w-72 h-64 sm:w-[420px] sm:h-96 lg:w-[480px] lg:h-[440px]" />
        <div className="mx-auto">
          <img
            src={HeroGirl}
            alt="Person"
            className="absolute -top-8 md:-top-10 right-0 sm:right-6 z-10 object-cover w-[400px] h-[325px] sm:w-[450px] sm:h-[470px] md:h-[480px] lg:w-[500px] lg:h-[545px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
