import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <ScrollProgress />
      <div className="site-grid" aria-hidden="true"></div>

      <Header />

      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
