import { fadeUp } from "../../animations/fadeUp";
import { MotionSection } from "../../hooks/useScrollAnimation";
import AboutUs from "./AboutUs";
import FAQAccordion from "./FAQAccordion";
import Hero from "./Hero";
import JobCategories from "./JobCategories";
import ProjectsCarousel from "./ProjectsCarousel";
import StatsSection from "./StatsSection";

function Home() {
  return (
    <div className="bg-secondary-0 container xl:max-w-screen-xl">
      <MotionSection id="home" variants={fadeUp} initialVisible={true}>
        <Hero />
      </MotionSection>

      <MotionSection variants={fadeUp}>
        <StatsSection />
      </MotionSection>

      <MotionSection id="about" variants={fadeUp}>
        <AboutUs />
      </MotionSection>

      <MotionSection id="categories" variants={fadeUp}>
        <JobCategories />
      </MotionSection>

      <MotionSection id="projects" variants={fadeUp}>
        <ProjectsCarousel />
      </MotionSection>

      <MotionSection id="faq" variants={fadeUp}>
        <FAQAccordion />
      </MotionSection>
    </div>
  );
}

export default Home;
