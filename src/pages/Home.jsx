import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TrainingPreview from "../components/home/TrainingPreview";
import ContactCTA from "../components/home/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyChooseUs />
      <TrainingPreview />
      <ContactCTA />
    </>
  );
}

export default Home;