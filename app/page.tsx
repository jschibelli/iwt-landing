import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedWork from "../components/FeaturedWork";
import Process from "../components/Process";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import SynaplyAI from "../components/SynaplyAI";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedWork />
      <Process />
      <About />
      <Testimonials />
      <SynaplyAI />
      <FAQ />
      {/* Services section will be added here next */}
    </main>
  );
}
