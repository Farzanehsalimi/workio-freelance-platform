import WORKIO from "@/components/icons/Workio.jsx";
import DarkModeToggle from "../ui/DarkModeToggle";
import {
  Bars2Icon,
  XMarkIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../ui/Drawer";
import SidebarDrawer from "../ui/SidebarDrawer";
import NavLinks from "../ui/NavLinks";
import useUser from "../features/authentication/useUser";
import UserMenu from "../ui/UserMenu";

function LandingHeader() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-secondary-0/80 backdrop-blur-m py-2 xl:py-0.5">
      <div className="xl:max-w-screen-xl px-4 md:px-8 2xl:px-16 mx-auto flex ">
        {/* Mobile menu */}
        <div className="flex items-center gap-4 lg:hidden">
          <div
            className="cursor-pointer"
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          >
            {isOpenDrawer ? (
              <XMarkIcon className="w-7" />
            ) : (
              <Bars2Icon className="w-7 sm:w-9 text-secondary-900" />
            )}
          </div>
          <Link to="/">
            <img className="w-14 sm:hidden" src="/favicon.svg" alt="MiniLogo" />
          </Link>
        </div>

        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <SidebarDrawer onClose={() => setIsOpenDrawer(false)} />
        </Drawer>

        <div className="flex justify-between items-center w-full ">
          <Link to="/">
            <WORKIO className="w-32 hidden sm:block" />
          </Link>

          <NavLinks />

          <div className="flex gap-4 items-center justify-center">
            <div className="hidden lg:flex">
              <DarkModeToggle darkModeContainerClassName="flex bg-secondary-300 rounded-3xl overflow-hidden gap-1.5 lg:gap-2" />
            </div>
            {!user?.isActive ? (
              <button className="flex items-center gap-2 font-bold px-3 lg:px-3 py-1.5 lg:py-2 duration-100 bg-secondary-900 hover:bg-secondary-900/90 text-secondary-50 rounded-3xl">
                <Link to="/auth" className="text-base md:text-xl">
                  ورود / ثبت‌نام
                </Link>
                <ArrowLeftIcon className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            ) : (
              <UserMenu />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
