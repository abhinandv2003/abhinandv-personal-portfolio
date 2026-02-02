import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import SecretMenu from './components/SecretMenu';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <Helmet>
          <title>Abhinand V | Software Engineer & Web Developer</title>
          <meta name="description" content="Portfolio of Abhinand V, an aspiring Software Engineer and Web Developer passionate about creating innovative solutions." />
          <meta name="keywords" content="Abhinand V, Software Engineer, Web Developer, Portfolio, React, Full Stack" />
          <meta property="og:title" content="Abhinand V | Software Engineer & Web Developer" />
          <meta property="og:description" content="Portfolio of Abhinand V, an aspiring Software Engineer and Web Developer passionate about creating innovative solutions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abhinandv.online/" />
          <link rel="canonical" href="https://abhinandv.online/" />
        </Helmet>
        <SecretMenu />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/5 relative z-10">
          <div className="container mx-auto px-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Abhinand V</span>. All rights reserved.
            </p>
            <p className="mt-2 text-gray-600 text-xs">
              Built with <span className="text-cyan-500">React</span> & <span className="text-blue-500">Tailwind CSS</span>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
