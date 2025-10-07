import WORKIO from "@/components/icons/WORKIO";
import DarkModeToggle from "../ui/DarkModeToggle";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import useUsers from "../features/admin/useUsers";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../ui/Drawer";
import { useMobileMenu } from "../hooks/useMobileMenu";
import SidebarDrawer from "../ui/SidebarDrawer";
import NavLinks from "../ui/NavLinks";

function LandingHeader() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { isLoading, users } = useUsers();
  const { isOpen, closeMenu, toggleMenu } = useMobileMenu();

  return (
    <header className="flex justify-between pt-4 items-center container xl:max-w-screen-xl">
      {/* mobile menu */}
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

      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <WORKIO className="w-32 hidden sm:block" />
        </Link>

        <NavLinks />

        <div className="flex gap-4 items-center justify-center">
          <div className="hidden lg:flex">
            <DarkModeToggle />
          </div>
          <button className="flex items-center gap-2 font-bold px-3 lg:px-3 py-1.5 lg:py-2 duration-100 bg-secondary-900 hover:bg-secondary-900/90 text-secondary-50 rounded-3xl">
            <Link to="/auth" className="text-base md:text-xl">
              ورود / ثبت‌نام
            </Link>
            <ArrowLeftIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;

{
  /* <span className="text-sm lg:text-lg font-bold text-secondary-700">
      سلام؛
       {user?.name}
    </span> */
}
