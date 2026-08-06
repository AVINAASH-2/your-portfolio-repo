import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnalyticsProjects from "@/components/AnalyticsProjects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Skills />

      <Experience />

      <AnalyticsProjects />

      <Certifications />

      <Contact />

      <Footer />
    </main>
  );
}