import { NavLink } from "react-router-dom";

const NavItems = [
  {
    id: 1,
    title: "خانه",
    to: "/",
  },

  {
    id: 2,
    title: "پروژه ها",
    to: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    to: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    to: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    to: "/profile/users",
  },
];

const isActiveNavStyle = ({ isActive }) => {
  return isActive ? "text-primary-500 font-bold" : "";
};

function NavLinks({ onClickLink }) {
  return (
    <ul className="gap-4 hidden lg:flex text-secondary-700 text-lg">
      {NavItems.map(({ to, title }) => {
        return (
          <li key={to} className="hover:text-primary-500">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${isActiveNavStyle({ isActive })} p-4 transition-all`
              }
              onClick={onClickLink}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
