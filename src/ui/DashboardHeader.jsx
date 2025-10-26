function DashboardHeader() {
  return (
    <div className="">
      <p className="text-error text-xs sm:text-sm sm:w-3/5">
        <span className="font-black text-sm sm:text-base block mb-2">
          🚧 توجه: نسخه‌ی تستی (Demo Environment)
        </span>
        با سلام؛ در این نسخه برای تسهیل تست، تمام کاربران جدید به‌صورت پیش‌فرض
        دارای وضعیت تأییدشده (status=2) هستند. که در نسخه‌ی Production، این
        تنظیمات به حالت امن بازمی‌گردد.
      </p>
      <h1 className="font-black text-2xl text-secondary-700 mb-2 mt-12">
        آمار کلی
      </h1>
      <p className="text-secondary-600">
        در یک نما خلاصه ای از آمار فعالیت خود را ببینید
      </p>
    </div>
  );
}

export default DashboardHeader;
