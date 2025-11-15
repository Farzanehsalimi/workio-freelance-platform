import { Tab } from "@headlessui/react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Filter({ filterField, options = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter =
    searchParams.get(filterField) ?? options[0]?.value ?? "";

  const selectedIndex = useMemo(() => {
    const idx = options.findIndex((o) => o.value === currentFilter);
    return idx === -1 ? 0 : idx;
  }, [currentFilter, options]);

  function handleChangeIndex(index) {
    const value = options[index]?.value;
    if (!value) return;
    const newParams = new URLSearchParams(searchParams);
    newParams.set(filterField, value);
    setSearchParams(newParams);
  }

  return (
    <div className="flex items-center gap-x-5 sm:gap-x-7 lg:gap-x-2">
      <span className="whitespace-nowrap font-bold text-sm xl:text-base">
        وضعیت
      </span>

      <div className="flex items-center gap-x-1 border border-primary-600 shadow-sm shadow-primary-800 bg-secondary-0 rounded-xl p-1">
        <Tab.Group selectedIndex={selectedIndex} onChange={handleChangeIndex}>
          <Tab.List className="flex gap-2 justify-end">
            {options.map(({ value, label }) => (
              <Tab
                key={value}
                className={({ selected }) =>
                  classNames(
                    "whitespace-nowrap text-sm xl:text-base rounded-xl px-4 sm:px-9 lg:px-3 xl:px-5 py-1.5 xl:py-1 font-bold transition-all duration-150 focus:outline-none",
                    selected
                      ? "!bg-primary-500 text-white shadow-sm"
                      : "bg-secondary-0 text-secondary-800 hover:text-primary-100 hover:bg-primary-900"
                  )
                }
              >
                {label}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="sr-only">
            {options.map((opt) => (
              <Tab.Panel key={opt.value}></Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Filter;
