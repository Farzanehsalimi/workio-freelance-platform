import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import { WalletIcon } from "@heroicons/react/24/outline";
import { IoMdTime } from "react-icons/io";

function ProjectCard({ project }) {
  return (
    <div className="bg-secondary-50/60 cursor-pointer rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-secondary-800">
          {project.title}
        </h3>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-x-1 text-sm text-secondary-700">
            <span>
              <IoMdTime className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-x-0.5">
              <span>{toPersianNumbers(project.deadline)} </span>
              <span> روز </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-secondary-700">
            <span>
              <WalletIcon className="w-4 h-4" />
            </span>
            <div>
              <span> از </span>
              <span>{toPersianNumbersWithComma(project.budget)}</span>
              <span> تومان </span>
            </div>
          </div>
        </div>
        <p className="mt-4 flex items-center justify-between">
          <span className="text-[10px] sm:text-xs text-secondary-400">
            مهارت های مورد نیاز:
          </span>
          <div>
            {project.tags.map((tag) => (
              <span className="badge badge--primary ml-1 text-xs">{tag}</span>
            ))}
          </div>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
