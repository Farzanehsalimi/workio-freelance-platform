import { HiOutlineInboxArrowDown, HiOutlineFolderOpen } from "react-icons/hi2";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 lg:gap-x-8">
      <Stat
        color="blue"
        title="کاربران"
        value={users}
        icon={<UserGroupIcon className="w-16 h-16 md:w-20 md:h-20" />}
      />
      <Stat
        color="yellow"
        title="پروپوزال‌ها"
        value={proposals}
        icon={<HiOutlineInboxArrowDown className="w-16 h-16 md:w-20 md:h-20" />}
      />

      <Stat
        color="primary"
        title="پروژه ها"
        value={projects}
        icon={<HiOutlineFolderOpen className="w-16 h-16 md:w-20 md:h-20" />}
      />
    </div>
  );
}

export default Stats;
