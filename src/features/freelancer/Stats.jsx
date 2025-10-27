import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { HiOutlineCheckCircle, HiOutlineCreditCard } from "react-icons/hi";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;

  const acceptedProposals = proposals.filter((p) => p.status === 2);

  // دستمزد هر فریلنسر:
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 lg:gap-x-8">
      <Stat
        color="blue"
        title="پروپوزال‌ها"
        value={numOfProposals}
        icon={<HiOutlineInboxArrowDown className="w-20 h-20" />}
      />

      <Stat
        color="yellow"
        title="پروپوزال های"
        value={acceptedProposals.length}
        icon={<HiOutlineCheckCircle className="w-20 h-20" />}
      />

      <Stat
        color="primary"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiOutlineCreditCard className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
