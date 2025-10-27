import {
  FolderOpenIcon,
  DocumentTextIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export const adminSidebarItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: <ChartBarIcon className="w-5 h-5" />,
    to: "dashboard",
  },
  {
    id: 2,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    to: "users",
  },
  {
    id: 3,
    title: "پروژه‌ها",
    icon: <FolderOpenIcon className="w-5 h-5" />,
    to: "projects",
  },
  {
    id: 4,
    title: "پروپوزال‌ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    to: "proposals",
  },
];

export const ownerSidebarItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: <ChartBarIcon className="w-5 h-5" />,
    to: "dashboard",
  },
  {
    id: 2,
    title: "پروژه‌ها",
    icon: <FolderOpenIcon className="w-5 h-5" />,
    to: "projects",
  },
];

export const freelancerSidebarItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: <ChartBarIcon className="w-5 h-5" />,
    to: "dashboard",
  },
  {
    id: 2,
    title: "پروژه‌ها",
    icon: <FolderOpenIcon className="w-5 h-5" />,
    to: "projects",
  },
  {
    id: 3,
    title: "پروپوزال‌ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    to: "proposals",
  },
];
