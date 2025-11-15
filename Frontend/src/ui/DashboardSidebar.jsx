import UserAvatar from "../features/authentication/UserAvatar";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import Map from "../assets/images/map.png";
import { CustomNavLink } from "./CustomNavLink";

function DashboardSidebar({ items, onClose }) {
  return (
    <div className="h-screen shadow-sm shadow-primary-500 bg-bgDashboardSidebar row-start-1 row-span-2 flex flex-col overflow-y-auto">
      <div className="bg-primary-600 pt-6 pb-4 mb-4">
        <UserAvatar />
      </div>
      <ul className="flex flex-col gap-y-2 mb-10 lg:mt-2">
        {items.map((item) => (
          <CustomNavLink key={item.id} to={item.to} onClick={onClose}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </CustomNavLink>
        ))}
      </ul>

      <div className="flex flex-col items-center mt-auto mb-4">
        <p className="text-primary-800 text-xs lg:text-sm self-start mr-6 mb-1">
          کاربران فعال
        </p>
        <div className="flex justify-start mt-2 gap-1.5">
          <div className="avatar avatar-dashboard">
            <img src="/src/assets/images/avatar-4.jpg" alt="avatar-1" />
          </div>
          <div className="avatar avatar-dashboard">
            <img src="/src/assets/images/avatar-5.jpg" alt="avatar-5" />
          </div>
          <div className="avatar avatar-dashboard">
            <img src="/src/assets/images/avatar-3.jpg" alt="avatar-3" />
          </div>
          <div className="avatar avatar-dashboard">
            <img src="/src/assets/images/avatar-2.jpeg" alt="avatar-2" />
          </div>
          <div className="avatar avatar-dashboard">
            <img src="/src/assets/images/avatar-1.jpg" alt="avatar-1" />
          </div>

          <div className="hidden-avatars hidden-avatars-dashboard bg-orange text-secondary-900">
            {toPersianNumbers(70)}+
          </div>
        </div>

        <img src={Map} className="w-48 h-20 mt-4" alt="" />
      </div>
    </div>
  );
}

export default DashboardSidebar;
