import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TipTrackCaseStudy from "./components/TipTrackCaseStudy";
import EarlyDropCaseStudy from "./components/EarlyDropCaseStudy";
import SwellCaseStudy from "./components/SwellCaseStudy"; // adjust path if needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/tiptrack" element={<TipTrackCaseStudy />} />
      <Route path="/projects/earlydrop" element={<EarlyDropCaseStudy />} />
      <Route path="/projects/swell" element={<SwellCaseStudy />} />
    </Routes>
  );
}

export default App;
