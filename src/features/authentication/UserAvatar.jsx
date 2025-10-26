import truncateText from "../../utils/truncateText";
import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center gap-y-2 text-secondary-600">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-orange via-secondary50 to-yellow-300 p-[1px]">
        <div className="rounded-full p-[2px]">
          <img
            src="/user.jpg"
            alt="user-account"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
      <span className="text-secondary50 font-bold text-lg">
        {truncateText(user?.name, 15)}
      </span>
      <span className="text-primary-200 text-xs">{user?.email}</span>
    </div>
  );
}

export default UserAvatar;
