import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Workshops from "./components/Workshop.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";

const App = () => (
  <div className="page">
    <Navbar />
    <main className="content">
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Education />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Workshops />
      <div className="section-divider"></div>
      <Achievements />
      <div className="section-divider"></div>
      <Contact />
    </main>
  </div>
);

export default App;
