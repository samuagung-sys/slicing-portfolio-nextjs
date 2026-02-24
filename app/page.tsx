import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Career from "@/components/career/Career";
import Skills from "@/components/skills/Skills"
import Projects from "@/components/projects/Projects"
import Testimonials from "@/components/testimonials/Testimonials"
import FAQ from "@/components/faq/FAQ"
import Contact from "@/components/contact/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Career />
        <Skills />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
