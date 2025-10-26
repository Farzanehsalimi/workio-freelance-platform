import jalaali from "jalaali-js";

function PersianDate() {
  const today = new Date();
  const { jy, jm, jd } = jalaali.toJalaali(today);

  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const weekdays = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];

  const weekday = weekdays[today.getDay()];

  const persianDate = `${weekday} ${jd} ${persianMonths[jm - 1]} ${jy}`;

  return (
    <span
      className="hidden sm:block text-primary-400 pt-1 px-3 rounded-full text-sm font-bold"
      style={{ direction: "rtl" }}
    >
      {persianDate}
    </span>
  );
}

export default PersianDate;
