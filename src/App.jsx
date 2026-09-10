import React, { Fragment } from "react";
import GridLine from "./utils/GridLine";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import SocialIcon from "./components/SocialIcon";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const AppContent = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#0d1b2e] text-[#e2eaf4]' : 'bg-[#dbeafe] text-[#1e3a5f]'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-center md:justify-start">
        <Logo />
      </div>
      <ThemeToggle />
      <Navbar />
      <SocialIcon />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Fragment>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
