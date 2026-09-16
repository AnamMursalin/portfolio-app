import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Volunteering from "@/components/Volunteering";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Supervisor from "@/components/Supervisor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Volunteering />
        <Languages />
        <Supervisor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
