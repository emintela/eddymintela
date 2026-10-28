import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToSection from "./components/ScrollToSection";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle />
        <Navbar />
        <ScrollToSection load={load} />
        <Routes>
          {/* Every section lives on one scrolling page; these paths just jump to them */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/resume" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
