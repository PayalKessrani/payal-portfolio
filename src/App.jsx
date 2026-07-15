
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Stats />
      <Services />
      <Contact />
      <Footer />
      </>
  );
}

export default App;