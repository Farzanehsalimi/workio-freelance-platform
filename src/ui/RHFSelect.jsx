import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Fragment, useEffect, useState } from "react";

function RHFSelect({ label, name, setValue, options, required, placeholder }) {
  const [selected, setSelected] = useState(options[0] || null);

  useEffect(() => {
    if (selected) setValue(name, selected.value);
  }, [selected, name, setValue]);

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block font-bold mb-2 text-secondary-900 text-base"
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}

      <div className="bg-secondary-0 border border-primary-500 rounded-xl text-base">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="w-full text-secondary-900 rounded-xl pr-4 py-3 text-right focus:outline-none focus:ring-1 focus:ring-primary-600 focus:border-primary-600">
              <ChevronDownIcon
                className="w-5 absolute inset-y-0 left-0 ml-2 my-auto pointer-events-none"
                aria-hidden="true"
              />
              {selected ? (
                <span>{selected.label}</span>
              ) : (
                <span className="text-secondary-500">
                  {placeholder || "Select"}
                </span>
              )}
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-secondary-0 border border-primary-900 shadow-lg rounded-lg py-1 text-base overflow-auto focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option}
                    className={({ active }) =>
                      `cursor-pointer px-4 py-2 text-sm text-secondary-900 bg-secondary-0 hover:text-primary-400 hover:bg-primary-900 ${
                        active ? "bg-primary-100 text-primary-700" : ""
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span className={`${selected ? "text-primary" : ""}`}>
                        {option.label}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}

export default RHFSelect;
