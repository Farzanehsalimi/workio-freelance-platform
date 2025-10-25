import { useDarkMode } from "../context/DarkModeContext";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

function DarkModeToggle({ darkModeContainerClassName }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <div className={darkModeContainerClassName}>
          <SunIcon className="size-8 lg:size-9 text-yellow-400 p-0.5" />
          <MoonIcon className="size-8 lg:size-9 bg-primary-600 rounded-3xl duration-500 p-0.5" />
        </div>
      ) : (
        <div className={darkModeContainerClassName}>
          <SunIcon className="size-8 lg:size-9 text-yellow-400 p-0.5 bg-secondary-0 rounded-3xl duration-500" />
          <MoonIcon className="size-8 lg:size-9 p-0.5" />
        </div>
      )}
    </button>
  );
}

export default DarkModeToggle;
