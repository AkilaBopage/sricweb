import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SriLankaProjects from "./pages/SriLankaProjects";
import GlobalProjects from "./pages/GlobalProjects";

export default function App() {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sri-lanka-projects" element={<SriLankaProjects />} />
          <Route path="/global-projects" element={<GlobalProjects />} />
        </Routes>
      </div>
    </>
  );
}