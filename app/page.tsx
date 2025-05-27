import Hero from "../components/Hero";
import Services from "../components/Services";
import { StatsSection } from "../components/StatsSection";
import Process from "../components/Process";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import SynaplyAI from "../components/SynaplyAI";
import FAQ from "../components/FAQ";
import projectsData from "@/data/projects.json";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="stats">
        <StatsSection />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <SynaplyAI />
      <section id="faq">
        <FAQ />
      </section>
      {/* Services section will be added here next */}
    </main>
  );
}
