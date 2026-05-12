import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects, { ProjectPage } from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;