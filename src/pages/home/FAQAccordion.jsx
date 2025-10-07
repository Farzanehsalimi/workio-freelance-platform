import { useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

const faqData = [
  {
    number: "1",
    title: "چطور پروژه ی جدید ثبت کنم؟",
    content:
      "پس از ورود به حساب کاربری، روی دکمه «ثبت پروژه» کلیک کنید و جزئیات پروژه خود را وارد کنید.",
  },
  {
    number: "2",
    title: "چطور پروژه‌ها را جستجو یا فیلتر کنم؟",
    content:
      "در صفحه پروژه‌ها می‌تونید از نوار جستجو و فیلتر دسته‌بندی‌ها برای پیدا کردن پروژه مناسب استفاده کنید.",
  },
  {
    number: "3",
    title: "چطور می‌تونم درآمدم را دریافت کنم؟",
    content:
      "پس از تکمیل پروژه و تایید کارفرما، درآمد شما به حساب بانکی یا کیف پول دیجیتال شما واریز خواهد شد.",
  },
  {
    number: "4",
    title: "چطور می‌توانم با پشتیبانی تماس بگیرم؟",
    content:
      "شما می‌تونید از طریق فرم تماس با ما، ایمیل یا چت آنلاین با تیم پشتیبانی در ارتباط باشید.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="flex flex-col items-center mt-36 md:mx-auto">
      <span className="bg-primary-900 text-primary-400 text-xs lg:text-sm rounded-2xl lg:mb-4 mb-1.5 px-2 py-0.5">
        سوالات متداول
      </span>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-secondary-900">
        هر آنچه باید بدانید
      </h2>

      <div className="divide-y divide-secondary-0">
        {faqData.map((item, index) => (
          <FAQAccordionItem
            key={item.number}
            number={toPersianNumbers(item.number)}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`${
              index % 2 === 0 ? "bg-secondary-50" : "bg-secondary-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
