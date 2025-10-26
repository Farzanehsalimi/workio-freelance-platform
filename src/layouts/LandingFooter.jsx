import WORKIO from "@/components/icons/WORKIO";
import TopFooterBg from "@/components/icons/TopFooterBg";
import ManFooter from "../assets/images/man-footer.png";
import zarinpal from "../assets/images/zarinpal.svg";
import eNemad from "../assets/images/enemad.webp";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTelegramFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { MdCopyright } from "react-icons/md";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const footerLinks = [
  { title: "درباره ما", path: "/" },
  { title: "سوالات متداول", path: "/" },
  { title: "قوانین و مقررات", path: "/" },
  { title: "سیاست‌نامه", path: "/" },
];
const footerLinksContacts = [
  { title: "ایمیل پشتیبانی", path: "/" },
  { title: "شماره تماس", path: "/" },
  { title: "لوکیشن ما", path: "/" },
  { title: "اینستاگرام ما", path: "/" },
];

function LandingFooter() {
  return (
    <div className="bg-secondary-900 mt-24 sm:mt-80 lg:mt-96 pt-10 relative lg:h-auto px-4 sm:px-6">
      <div className="relative container">
        <TopFooterBg className="hidden sm:block sm:w-[600px] sm:h-[370px] md:w-[700px] md:h-[390px] lg:w-[990px] lg:h-[337px] absolute left-1/2 -translate-x-1/2 -translate-y-2/3" />
        <img
          src={ManFooter}
          className="hidden sm:block sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] absolute -bottom-12 md:-bottom-16 lg:-bottom-28 lg:right-8 xl:right-36 2xl:right-72"
          alt=""
          // right-4 -top-16 lg:-bottom-6 lg:right-72 -translate-y-1/2
        />
        <p className="hidden sm:block absolute bottom-10 left-12 md:left-16 lg:left-32 lg:-top-36 xl:left-64 2xl:left-1/4 text-secondary-0 text-3xl md:text-5xl lg:text-6xl font-bold">
          از همین امروز <br /> با ما شروع کن!
        </p>
        <Link
          to="/auth"
          className="btn--orange hidden sm:block absolute left-8 -bottom-4 md:-bottom-6 md:left-12 lg:left-24 lg:-bottom-14 xl:left-56 2xl:left-80 text-lg lg:text-2xl py-1 md:py-2 px-4 md:px-6 mt-6 self-end lg:block"
        >
          بزن بریم!
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 md:container xl:max-w-screen-xl sm:pt-32 lg:pt-40">
        <div className="flex flex-col gap-4 w-72 sm:w-96">
          <Link to="/">
            <div className="leading-5">
              <WORKIO className="w-36 lg:w-44" />
              <span className="text-base lg:text-xl text-primary-500 font-bold">
                اپلیکیشن فریلنســــری
              </span>
            </div>
          </Link>
          <p className="text-secondary-100 text-lg lg:text-xl">
            ورکیو جاییه برای رشد، یادگیری و موفقیت فریلنسرها. اینجا می‌تونی
            پروژه‌های واقعی پیدا کنی، تجربه کسب کنی و از مسیر کارت لذت ببری. با
            ورکیو هر قدمت، یه گام به دنیای استقلال و پیشرفت نزدیک‌تره 🌟
          </p>
          <div className="flex justify-between pt-4 sm:pl-8">
            <a
              href="https://farzanehsalimi.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeAltIcon className="w-10 h-10 text-secondary-100 hover:text-primary-600 cursor-pointer transition-all" />
            </a>
            <a
              href="https://linkedin.com/in/farzanehsalimi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="w-10 h-10 text-secondary-100 hover:text-primary-600 cursor-pointer transition-all" />
            </a>
            <a
              href="https://linkedin.com/in/farzanehsalimi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTelegramFill className="w-10 h-10 text-secondary-100 hover:text-primary-600 cursor-pointer transition-all" />
            </a>
            <a
              href="https://linkedin.com/in/farzanehsalimi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="w-10 h-10 text-secondary-100 hover:text-primary-600 cursor-pointer transition-all" />
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="mb-4 text-xl xl:text-2xl font-bold text-secondary-0">
            درباره ورکیـــو
          </h3>
          <ul className="space-y-4">
            {footerLinks.map((link) => (
              <li
                key={link.path}
                className="text-secondary-300 text-lg xl:text-xl hover:text-primary-500 duration-300"
              >
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="mb-4 text-xl xl:text-2xl font-bold text-secondary-0">
            اطلاعات تماس
          </h3>
          <ul className="space-y-4">
            {footerLinksContacts.map((link) => (
              <li
                key={link.path}
                className="text-secondary-300 text-lg xl:text-xl hover:text-primary-500 duration-300"
              >
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <img src={zarinpal} className="w-[75px] h-24" alt="" />
          <img src={eNemad} className="w-[75px] h-24" alt="" />
        </div>
      </div>
      <p className="text-secondary-300 text-center text-base md:text-xl pt-16 pb-6 flex justify-center items-center gap-1 md:gap-2">
        <MdCopyright /> طراحی و توسعه توسط
        <a
          href="https://farzanehsalimi.ir"
          className="text-orange/80 font-bold"
        >
          فرزانه سلیمی
        </a>
      </p>
    </div>
  );
}

export default LandingFooter;
