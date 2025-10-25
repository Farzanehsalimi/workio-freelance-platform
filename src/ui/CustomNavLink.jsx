import { NavLink } from "react-router-dom";
import classNames from "classnames";
import Line from "@/components/icons/Line";

export function CustomNavLink({ children, to, onClick }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          classNames(
            "flex items-center gap-x-2 lg:text-lg rounded-r-3xl hover:text-primary-600 transition-all duration-200 text-primary-900 pr-3 py-2 relative",
            {
              "!font-bold !text-orange": isActive,
            }
          )
        }
        onClick={onClick}
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <Line className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-9" />
            )}
            {children}
          </>
        )}
      </NavLink>
    </li>
  );
}
