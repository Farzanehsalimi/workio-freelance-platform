import { toPersianNumbers } from "../utils/toPersianNumbers";

const colors = {
  blue: "bg-blue-100 text-blue-800",
  yellow: "bg-yellow-100 text-yellow-700",
  primary: "bg-primary-900 text-primary-500",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="max-w-xs col-span-1 grid grid-cols-[6.4rem_1fr] p-4 gap-x-4 shadow-sm shadow-primary-600 rounded-xl mt-8">
      <div
        className={`row-span-2 flex items-center justify-center lg:p-2 aspect-square rounded-full ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-base lg:text-lg self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}

export default Stat;
