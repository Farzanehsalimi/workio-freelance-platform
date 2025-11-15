import Logout from "../features/authentication/Logout";
import DarkModeToggle from "../ui/DarkModeToggle";
import { Bars2Icon } from "@heroicons/react/24/outline";
import PersianDate from "../utils/PersianDate";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

// dashboard header
function Header({ onToggleSidebar }) {
  return (
    <div className="mb-12 mt-2 lg:mt-4 px-2 sm:px-3 lg:px-5">
      <div
        className={`lg:container xl:max-w-screen-lg bg-secondary-50/35 shadow-sm shadow-secondary-50 rounded-xl flex items-center justify-between py-2 px-3 mx-2`}
      >
        <div className="flex items-center gap-x-2">
          <button
            onClick={onToggleSidebar}
            className="block lg:hidden text-secondary-900"
          >
            <Bars2Icon className="w-7 h-7" />
          </button>

          <Link to="/">
            <img
              className="w-7 h-7 sm:w-8 sm:h-8"
              src="/favicon.svg"
              alt="MiniLogo"
            />
          </Link>

          <PersianDate />
        </div>
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <DarkModeToggle darkModeContainerClassName="flex overflow-hidden md:gap-x-1 bg-primary-900 rounded-3xl w-full" />
          <div className="lg:hidden w-9 h-9 rounded-full bg-gradient-to-tr from-orange via-secondary50 to-yellow-300 p-[0/5px]">
            <div className="rounded-full p-[2px]">
              <img
                src="/user.jpg"
                alt="user-account"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
          <IoMdNotificationsOutline className="hidden sm:block w-6 h-6 lg:w-8 lg:h-8 text-secondary-700 cursor-pointer hover:text-orange" />
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Header;
