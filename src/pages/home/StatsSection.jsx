import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function StatsSection() {
  return (
    <div className="hidden sm:flex sm:flex-row justify-around mt-14 sm:mt-24 md:mt-32">
      <div className="flex flex-col items-center">
        <span className="sm:text-7xl md:text-8xl lg:text-9xl font-bold text-green-600">
          {toPersianNumbersWithComma(95)}
          <span className="sm:text-4xl md:text-5xl lg:text-7xl align-super">
            %
          </span>
        </span>
        <span className="sm:text-xl md:text-2xl lg:text-3xl text-secondary-800 font-bold">
          رضایت کاربران
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="sm:text-7xl md:text-8xl lg:text-9xl font-bold text-green-600">
          <span className="sm:text-4xl md:text-5xl lg:text-7xl align-super">
            +
          </span>
          {toPersianNumbersWithComma(4)}
          <span className="sm:text-2xl md: lg:text-6xl">میلیون</span>
        </span>
        <span className="sm:text-xl md:text-2xl lg:text-3xl text-secondary-800 font-bold">
          کاربر فعال
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="sm:text-7xl md:text-8xl lg:text-9xl font-bold text-green-600">
          <span className="sm:text-4xl md:text-5xl lg:text-7xl align-super">
            +
          </span>
          {toPersianNumbersWithComma(30)}
          <span className="sm:text-2xl md: lg:text-6xl">هزار</span>
        </span>
        <span className="sm:text-xl md:text-2xl lg:text-3xl text-secondary-800 font-bold">
          شرکت تایید شده
        </span>
      </div>
    </div>
  );
}

export default StatsSection;
