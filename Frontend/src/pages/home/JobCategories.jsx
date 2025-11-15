import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import BlackBg from "@/components/icons/BlackBg";

function JobCategories() {
  const categories = [
    { title: "مارکتینگ", active: true },
    { title: "ادمین و منابع انسانی" },
    { title: "عملیات و پشتیبانی" },
    { title: "تدارکات و لجستیک" },
    { title: "مالی و حسابداری" },
    { title: "طراحی و خلاقیت" },
    { title: "توسعه و فناوری اطلاعات" },
    { title: "ترجمه و محتوا" },
  ];

  return (
    <section className="flex flex-col items-center pt-20 md:pt-28 md:pb-20">
      <span className="bg-primary-900 text-primary-400 text-xs lg:text-sm rounded-2xl lg:mb-4 mb-2 px-2 py-0.5">
        دسته بندی ها
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-14 text-secondary-900">
        محبوب‌ترین مشاغل فریلنسری
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`relative rounded-2xl text-center w-32 h-16 sm:w-40 sm:h-20 lg:w-56 lg:h-28 flex justify-center bg-secondary-50 
  transition-transform duration-300 hover:-translate-y-2 
  cursor-pointer will-change-transform ${cat.active ? "bg-transparent" : ""}`}
          >
            <BlackBg
              className={`w-32 h-16 sm:w-40 sm:h-20 lg:w-56 lg:h-28 ${
                cat.active ? "text-secondary-900" : "hidden"
              }`}
            />
            <h3
              className={`text-sm font-semibold md:text-base xl:text-lg md:mb-4 absolute top-0 my-4 sm:my-6 lg:my-8 ${
                cat.active
                  ? "text-secondary-0 font-black"
                  : "text-secondary-900 "
              }`}
            >
              {cat.title}
            </h3>
            <div
              className={`absolute bottom-2 left-2 lg:bottom-4 lg:left-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 p-0.5 sm:p-1 lg:p-2 ${
                cat.active
                  ? "text-primary-500 rounded-full bg-secondary-0"
                  : "text-secondary-900"
              }`}
            >
              <ArrowUpRightIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobCategories;
