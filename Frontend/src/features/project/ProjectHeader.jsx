import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-10 pt-4">
      <button onClick={moveBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-400" />
      </button>
      <h1 className="font-black text-xl text-secondary-700">
        لیست پروپوزال های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
