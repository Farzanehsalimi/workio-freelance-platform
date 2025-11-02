import { Link } from "react-router-dom";
import WORKIO from "@/components/icons/WORKIO";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";
import SidebarDrawerNavs from "./SidebarDrawerNavs";

function SidebarDrawer({ onClose }) {
  return (
    <div className="overflow-y-auto flex flex-col h-screen pt-8">
      {/* Drawer header */}
      <div className="flex border-b border-b-secondary-300 justify-between px-6 pb-2">
        <Link
          href="/"
          className="flex items-center gap-x-4 justify-center text-secondary-700  
        pb-2"
        >
          <div className="flex flex-col items-center leading-5">
            <WORKIO className="w-28" />
            <span className="text-xs text-primary-500 font-bold">
              اپلیکیشن فریلنســــری
            </span>
          </div>
        </Link>
        <div onClick={onClose}>
          <XMarkIcon className="w-7 pt-1 text-secondary-900" />
        </div>
      </div>

      <div className="overflow-y-auto flex-auto pt-10">
        <SidebarDrawerNavs onClickLink={onClose} />
        <div className="flex justify-between px-5 pt-16">
          <DarkModeToggle darkModeContainerClassName="flex bg-secondary-400 rounded-3xl overflow-hidden p-0.5 lg:p-1 gap-1.5 lg:gap-2" />
          <button className="flex items-center gap-2 font-bold px-2 py-0.5 bg-secondary-900 text-secondary-50 rounded-3xl">
            <Link to="/auth" className="text-sm">
              ورود / ثبت‌نام
            </Link>
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarDrawer;
