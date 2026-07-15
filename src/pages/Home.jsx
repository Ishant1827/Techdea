import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import TrainingPreview from "../components/home/TrainingPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ContactCTA from "../components/home/ContactCTA";


function Home() {
  return (
    <main className="overflow-x-hidden bg-white">

      <Hero />

      <Stats />

      <AboutPreview />

      <ServicesPreview />

      <ProjectsPreview />

      <TrainingPreview />

      <WhyChooseUs />

      <ContactCTA />

    </main>
  );
}

export default Home;