import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./components/hero/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Statement from "./components/Statement.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Experience />
        <Education />
        <Stack />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
