import Effects from "./components/Effects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Academy from "./components/Academy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Effects />
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Academy />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
