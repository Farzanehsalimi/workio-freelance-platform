import { useDarkMode } from "../context/DarkModeContext";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <div className="flex bg-secondary-400 rounded-3xl overflow-hidden p-0.5 lg:p-1 gap-1.5 lg:gap-2">
          <SunIcon className="size-8 lg:size-9 text-yellow-400 p-0.5" />
          <MoonIcon className="size-8 lg:size-9 bg-primary-300 rounded-3xl duration-500 p-0.5" />
        </div>
      ) : (
        <div className="flex bg-secondary-400 rounded-3xl overflow-hidden p-0.5 lg:p-1 gap-1.5 lg:gap-2">
          <SunIcon className="size-8 lg:size-9 text-yellow-400 p-0.5 bg-secondary-0 rounded-3xl duration-500" />
          <MoonIcon className="size-8 lg:size-9 p-0.5" />
        </div>
      )}
    </button>
  );
}

export default DarkModeToggle;
