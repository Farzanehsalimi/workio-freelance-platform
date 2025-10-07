import FAQAccordion from "./FAQAccordion";
import Hero from "./Hero";
import StatsSection from "./StatsSection";

function Home() {
  return (
    <div className="bg-secondary-0 container xl:max-w-screen-xl">
      <Hero />
      <StatsSection />
      <FAQAccordion />
    </div>
  );
}

export default Home;
