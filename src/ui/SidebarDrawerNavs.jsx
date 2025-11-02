import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Indicator from "@/components/icons/Indicator";
import classNames from "classnames";
import { useState, useEffect } from "react";

export default function SidebarDrawerNavs({ onClickLink }) {
  const [activeSection, setActiveSection] = useState("home");

  const sidebarNavs = [
    {
      id: 1,
      title: "خانه",
      to: "home",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "پروژه ها",
      to: "projects",
      icon: <DocumentTextIcon className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "دسته بندی ها",
      to: "categories",
      icon: <Squares2X2Icon className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "سوالات متداول",
      to: "faq",
      icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "درباره ما",
      to: "about",
      icon: <UsersIcon className="w-5 h-5" />,
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setActiveSection(id);
    if (onClickLink) onClickLink();
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const nav of sidebarNavs) {
        const section = document.getElementById(nav.to);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(nav.to);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {sidebarNavs.map((nav) => {
        const isActive = activeSection === nav.to;

        return (
          <li
            key={nav.id}
            onClick={() => scrollToSection(nav.to)}
            className={classNames(
              "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-400 transition-all duration-200 text-secondary-700 py-0.5 pr-6 relative cursor-pointer",
              {
                "!font-bold !text-primary-500": isActive,
              }
            )}
          >
            {isActive && (
              <Indicator className="absolute right-0 top-1/2 -translate-y-1/2 w-[16px] h-[80px] text-primary-500" />
            )}
            {nav.icon}
            {nav.title}
          </li>
        );
      })}
    </ul>
  );
}
