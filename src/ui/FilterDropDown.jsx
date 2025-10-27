import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useSearchParams } from "react-router-dom";

function FilterDropDown({ options, filterField, placeholder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  function handleChange(newValue) {
    searchParams.set(filterField, newValue);
    setSearchParams(searchParams);
  }

  return (
    <div className="w-64 sm:w-96 lg:w-40 xl:w-56 bg-secondary-0 border border-primary-600 shadow-sm shadow-primary-800 rounded-xl text-base">
      <Listbox value={value} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="w-full h-full text-secondary-900 font-bold rounded-xl pr-2 xl:pr-4 py-2 text-right focus:outline-none focus:ring-1 focus:ring-primary-600 focus:border-primary-600">
            <ChevronDownIcon
              className="w-5 absolute inset-y-0 left-0 ml-2 my-auto pointer-events-none"
              aria-hidden="true"
            />
            {options.some((option) => option.value === value) ? (
              <span>
                {options.find((option) => option.value === value)?.label}
              </span>
            ) : (
              <span className="text-sm xl:text-base">{placeholder}</span>
            )}
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-1 w-full bg-secondary-0 border border-primary-900 shadow-lg rounded-lg py-1 text-base overflow-auto focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `cursor-pointer px-4 py-2 text-xs xl:text-base font-black text-secondary-900 bg-secondary-0 hover:text-primary-400 hover:bg-primary-900 ${
                    active ? "bg-primary-100 text-primary-700" : ""
                  }`
                }
              >
                {({ selected }) => (
                  <span
                    className={
                      selected ? "font-bold text-primary" : "font-normal"
                    }
                  >
                    {option.label}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default FilterDropDown;
