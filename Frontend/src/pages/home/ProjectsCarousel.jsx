import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import LogoDesign from "../../assets/images/logo-design.webp";
import WebDesign from "../../assets/images/web-design.jpg";
import Books from "../../assets/images/books.jpg";
import AdminPanel from "../../assets/images/admin-panel.png";
import Video from "../../assets/images/video.webp";
import UIUX from "../../assets/images/uiux.png";

const projects = [
  {
    id: 1,
    title: "پروژه طراحی سایت",
    image: WebDesign,
    tags: ["MUI", "Next", "React"],
    budget: 300000000,
    deadline: 15,
  },
  {
    id: 2,
    title: "طراحی لوگو",
    image: LogoDesign,
    tags: ["AI", "GPT-5"],
    budget: 15000000,
    deadline: 2,
  },
  {
    id: 3,
    title: "پنل ادمین",
    image: AdminPanel,
    tags: ["C#", "Net.", "Node"],
    budget: 14400000,
    deadline: 30,
  },
  {
    id: 4,
    title: "تیزر تبلیغاتی",
    image: Video,
    tags: ["Edit", "Premiere"],
    budget: 17000000,
    deadline: 12,
  },
  {
    id: 5,
    title: "طراحی اپلیکیشن کتابخوانی ",
    description: "React + Tailwind",
    image: Books,
    tags: ["Vite", "Nuxt", "Vue"],
    budget: 35500000,
    deadline: 45,
  },
  {
    id: 6,
    title: "طراحی UI/UX",
    image: UIUX,
    tags: ["Figma", "HTML"],
    budget: 77700000,
    deadline: 5,
  },
];

function ProjectsCarousel() {
  return (
    <div
      id="projects"
      className="pt-20 sm:pt-16 sm:pb-12 px-8 lg:px-14 xl:px-44"
    >
      <div className="flex flex-col justify-center items-center">
        <span className="bg-primary-900 text-primary-400 text-xs lg:text-sm rounded-2xl lg:mb-4 mb-1.5 px-2 py-0.5">
          پروژه ها
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-12 text-secondary-900">
          جدیدترین پروژه ها
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        lazy={true}
        effect="coverflow"
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsCarousel;
