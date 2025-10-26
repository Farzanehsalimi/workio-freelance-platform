import AboutUs from "./AboutUs";
import FAQAccordion from "./FAQAccordion";
import Hero from "./Hero";
import JobCategories from "./JobCategories";
import StatsSection from "./StatsSection";

function Home() {
  return (
    <div className="bg-secondary-0 container xl:max-w-screen-xl">
      <Hero />
      <StatsSection />
      <AboutUs />
      <JobCategories />
      <FAQAccordion />
    </div>
  );
}

export default Home;
