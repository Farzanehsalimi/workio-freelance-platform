import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function StatsSection() {
  const smStyle =
    "border sm:border-none border-primary-400 border-b-4 rounded-2xl py-1.5 sm:py-0 px-1 sm:px-0";

  return (
    <div className="flex sm:flex-row gap-1 justify-around mt-14 sm:mt-24 md:mt-32 px-4 max-w-xs sm:max-w-none mx-auto">
      <div className={`flex flex-col items-center ${smStyle}`}>
        <span className="text-xl sm:text-7xl md:text-8xl font-bold text-green-600">
          {toPersianNumbersWithComma(95)}
          <span className="sm:text-4xl md:text-5xl lg:text-7xl align-super">
            %
          </span>
        </span>
        <span className="text-xs sm:text-xl md:text-2xl text-secondary-800 font-bold">
          رضایت کاربران
        </span>
      </div>
      <div className={`flex flex-col items-center ${smStyle}`}>
        <span className="text-xl sm:text-7xl md:text-8xl font-bold text-green-600">
          <span className="sm:text-4xl md:text-5xl lg:text-7xl align-super">
            +
          </span>
          {toPersianNumbersWithComma(4)}
          <span className="text-sm sm:text-2xl lg:text-4xl">میلیون</span>
        </span>
        <span className="text-xs sm:text-xl md:text-2xl text-secondary-800 font-bold">
          کاربر فعال
        </span>
      </div>
      <div className={`flex flex-col items-center ${smStyle}`}>
        <span className="text-xl sm:text-7xl md:text-8xl font-bold text-green-600">
          <span className="sm:text-4xl md:text-5xl lg:text-7xl align-super">
            +
          </span>
          {toPersianNumbersWithComma(30)}
          <span className="text-sm sm:text-2xl lg:text-4xl">هزار</span>
        </span>
        <span className="text-xs sm:text-xl md:text-2xl text-secondary-800 font-bold">
          شرکت تایید شده
        </span>
      </div>
    </div>
  );
}

export default StatsSection;
