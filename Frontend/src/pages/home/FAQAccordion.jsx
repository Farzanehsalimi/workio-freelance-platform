import { useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

const faqData = [
  {
    number: "1",
    title: "مهارت‌هایی که بیشترین پروژه رو دارن؟",
    content:
      "مهارت‌های پرتقاضا معمولاً بسته به بازار و زمان تغییر می‌کنن، اما در حال حاضر دسته‌هایی مثل طراحی UI/UX، برنامه‌نویسی وب (React، Next.js، Laravel)، تولید محتوا، سئو، ترجمه و دیجیتال مارکتینگ از پرکاربردترین‌ها هستن.",
  },
  {
    number: "2",
    title: "آیا می‌تونم با کارفرماها صحبت کنم؟",
    content:
      "خیر، برای حفظ امنیت و نظم سیستم، امکان گفت‌وگو تنها بعد از ارسال پیشنهاد و تأیید همکاری فراهم می‌شه. با این حال، شما می‌تونید توضیحات دقیقی در متن پروژه بنویسید تا فقط فریلنسرهایی که واقعاً مهارت انجام کار رو دارن، پیشنهاد بدن. بعد از تأیید همکاری، بخش چت اختصاصی باز می‌شه تا درباره جزئیات، فایل‌ها یا تغییرات احتمالی صحبت کنید.",
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
    <section className="flex flex-col items-center pt-20 md:pt-16 md:pb-28 md:mx-auto">
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
