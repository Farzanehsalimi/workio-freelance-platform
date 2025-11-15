import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

const sortOptions = [
  { label: "جدید ترین", value: "latest" },
  { label: "قدیمی ترین", value: "earliest" },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectHeader() {
  const { transfomedCategories } = useCategories();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-12">
      <h1 className="text-lg sm:text-xl font-black">لیست پروژه‌ها</h1>
      <div className="lg:hidden">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`فیلتر پروژه ها`}
          className={`bottom-0`}
        >
          <div className="flex flex-col gap-y-6 items-center">
            <FilterDropDown
              filterField="category"
              options={[
                { value: "ALL", label: "همه" },
                ...transfomedCategories,
              ]}
              placeholder="دسته بندی پروژه‌ها"
            />

            <FilterDropDown
              filterField="sort"
              options={sortOptions}
              placeholder="دسته بندی ددلاین‌ها‌"
            />

            <Filter filterField="status" options={statusOptions} />
            <button
              className="btn btn--primary w-64 sm:w-96 py-2"
              onClick={() => setOpen(false)}
            >
              اعمال فیلتر ها
            </button>
          </div>
        </Modal>
        <button
          className="btn bg-primary-600 text-secondary-800 shadow-sm shadow-primary-400 flex items-center gap-x-2 px-3 sm:px-5 py-2 text-lg rounded-2xl"
          onClick={() => setOpen(true)}
        >
          <AdjustmentsVerticalIcon className="w-5 sm:w-7 h-5 sm:h-7 text-secondary50" />
          <span className="text-base sm:text-xl text-secondary50">
            فیلتر پروژه ها
          </span>
        </button>
      </div>
      <div className="hidden lg:flex gap-x-4 xl:gap-x-8 items-center ml-2">
        <Filter filterField="status" options={statusOptions} />

        <FilterDropDown
          filterField="sort"
          options={sortOptions}
          placeholder="دسته بندی ددلاین‌ها‌"
        />
        <FilterDropDown
          filterField="category"
          options={[{ value: "ALL", label: "همه" }, ...transfomedCategories]}
          placeholder="دسته بندی پروژه‌ها"
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
