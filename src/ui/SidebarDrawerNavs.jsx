import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { NavLink, useLocation } from "react-router-dom";
import Indicator from "@/components/icons/Indicator";
import classNames from "classnames";

const sidebarNavs = [
  {
    id: 1,
    title: "خانه",
    icon: <HomeIcon className="w-5 h-5" />,
    to: "/",
  },
  {
    id: 2,
    title: "پروژه ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    to: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    to: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <Squares2X2Icon className="w-5 h-5" />,
    to: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    to: "/profile/users",
  },
];

export default function SidebarDrawerNavs() {
  const location = useLocation();

  return (
    <ul className="flex flex-col gap-4">
      {sidebarNavs.map((nav) => {
        const isActive = location.pathname === nav.to;

        return (
          <NavLink
            to={nav.to}
            className={({ isActive }) =>
              classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-400 transition-all duration-200 text-secondary-700 py-0.5 pr-6 relative",
                {
                  "!font-bold !text-primary-500": isActive,
                }
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <Indicator className="absolute right-0 top-1/2 -translate-y-1/2 w-[16px] h-[80px] text-primary-500" />
                )}
                {nav.icon}
                {nav.title}
              </>
            )}
          </NavLink>
        );
      })}
    </ul>
  );
}
