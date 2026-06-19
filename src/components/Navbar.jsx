import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-[#0a0f0d] py-4'
          : isScrolled 
            ? 'bg-[#0a0f0d]/90 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-emerald-900/20' 
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Hemanth<span className="text-emerald-400">.</span>
          </a>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-white/60 hover:text-white font-medium relative group transition-colors duration-300 text-sm"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://drive.google.com/file/d/1DGZTtSzKI-3hX99T9--hiXEOW6IKEXUX/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            📄 Resume
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-emerald-500 text-black hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] py-4 opacity-100 bg-[#0a0f0d] shadow-2xl border-b border-emerald-900/20' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-emerald-400 font-bold text-lg border-b border-white/5 pb-3 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2 pb-2 flex flex-col gap-3">
            <a 
              href="https://drive.google.com/file/d/1DGZTtSzKI-3hX99T9--hiXEOW6IKEXUX/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)} 
              className="inline-block px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-center"
            >
              📄 Download Resume
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="inline-block px-6 py-3 rounded-full bg-emerald-500 text-black font-black text-center"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
