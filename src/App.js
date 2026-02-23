import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <CV />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
