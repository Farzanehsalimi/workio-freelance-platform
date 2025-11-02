import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiUserHeartLine } from "react-icons/ri";
import { HiChevronDown } from "react-icons/hi";
import {
  HomeIcon,
  BookOpenIcon,
  WalletIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import useUser from "../features/authentication/useUser";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import useLogout from "../features/authentication/useLogout";
import { Link } from "react-router-dom";

function UserMenu() {
  const { user } = useUser();
  const { logout } = useLogout();

  const roleBasePath =
    user?.role === "OWNER"
      ? "/owner"
      : user?.role === "FREELANCER"
      ? "/freelancer"
      : user?.role === "ADMIN"
      ? "/admin"
      : "";

  const menuItems = [
    {
      id: 1,
      icon: <HomeIcon className="w-5 h-5" />,
      name: "پروفایل",
      to: `${roleBasePath}/dashboard`,
    },
    {
      id: 2,
      icon: <BookOpenIcon className="w-5 h-5" />,
      name: "پروژه‌ها",
      to: `${roleBasePath}/projects`,
    },
    {
      id: 3,
      icon: <WalletIcon className="w-5 h-5" />,
      name: "کیف پول",
      to: `${roleBasePath}/dashboard`,
    },
    {
      id: 4,
      icon: <ArrowRightOnRectangleIcon className="w-5 h-5" />,
      name: "خروج",
      action: "logout",
      danger: true,
    },
  ];

  const handleClick = (item) => {
    if (item.action === "logout") logout();
  };
  return (
    <Menu as="div" className="relative inline-block text-left z-20">
      <Menu.Button className="flex items-center gap-1 bg-primary-800 rounded-3xl py-1 px-2 focus:outline-none hover:bg-primary-600 duration-500">
        <RiUserHeartLine className="w-6 h-6 sm:w-7 sm:h-7 text-secondary50" />
        <HiChevronDown className="w-5 h-5 text-secondary50" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-right text-right rounded-2xl bg-secondary-0 shadow-sm shadow-primary-700 ring-1 ring-black/5 focus:outline-none">
          <div className="flex items-start gap-2 px-3 pt-3 sm:pt-4 pb-2 sm:pb-3 border-b border-secondary-50">
            <span className="rounded-full bg-secondary-200 border-2 border-secondary-100 px-3.5 py-2 sm:py-2.5 sm:px-4 text-secondary-0 font-bold">
              {user?.name?.[0].toUpperCase() || "؟"}
            </span>
            <div>
              <p className="font-bold text-secondary-800">{user?.name}</p>
              <p className="text-xs sm:text-sm text-secondary-400">
                {toPersianNumbers(user?.phoneNumber)}
              </p>
            </div>
          </div>

          <div className="flex flex-col py-1">
            {menuItems.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => {
                  const baseClasses = `flex items-center gap-3 w-full text-right px-3 py-2 rounded-lg transition-colors`;
                  const activeClasses = item.danger
                    ? active
                      ? "bg-red-50 text-red-500"
                      : "text-red-500"
                    : active
                    ? "bg-secondary-50 text-primary-500"
                    : "text-secondary-800";

                  if (item.action) {
                    return (
                      <button
                        onClick={() => handleClick(item)}
                        className={`${baseClasses} ${activeClasses}`}
                      >
                        {item.icon}
                        <span className="text-sm sm:text-base">
                          {item.name}
                        </span>
                      </button>
                    );
                  }

                  return (
                    <Link
                      to={item.to}
                      className={`${baseClasses} ${activeClasses}`}
                    >
                      {item.icon}
                      <span className="text-sm sm:text-base">{item.name}</span>
                    </Link>
                  );
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
