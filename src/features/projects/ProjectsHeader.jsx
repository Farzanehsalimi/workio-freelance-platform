import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { FaPlus } from "react-icons/fa";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-lg sm:text-2xl">
        پروژه های شما
      </h1>
      <Modal
        title="اضافه کردن پروژه ی جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary bg-orange hover:bg-orange/90 flex items-center gap-x-2 rounded-3xl"
      >
        <FaPlus className="w-3 h-3" />
        <span className="text-sm sm:text-lg">اضافه کردن پروژه</span>
      </button>
    </div>
  );
}

export default ProjectsHeader;
