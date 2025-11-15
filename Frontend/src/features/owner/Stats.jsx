import { MdAssignmentInd } from "react-icons/md";
import { HiOutlineInboxArrowDown, HiOutlineFolderOpen } from "react-icons/hi2";

import Stat from "../../ui/Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 lg:gap-x-8">
      <Stat
        color="blue"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineFolderOpen className="w-20 h-20" />}
      />

      <Stat
        color="yellow"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<MdAssignmentInd className="w-20 h-20" />}
      />

      <Stat
        color="primary"
        title="پروپوزال‌ها"
        value={numOfProposals}
        icon={<HiOutlineInboxArrowDown className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
