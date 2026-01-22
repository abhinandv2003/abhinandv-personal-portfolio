import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-[#0f172a]">
        <p>© {new Date().getFullYear()} Abhinand V. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind aesthetics</p>
      </footer>
    </div>
  );
}

export default App;
