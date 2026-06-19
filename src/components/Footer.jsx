import React from 'react';

const Footer = () => {
  return (
    <footer className="text-[#d4d4d4] py-16 px-6 md:px-12 w-full text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]" style={{ background: '#0a0a0a', fontFamily: "'JetBrains Mono', monospace" }}>
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Stock Market & Investments</p>
          <p>Financial Modelling & Analysis</p>
          <p>Wealth Management</p>
          <p>GeM Tender Consulting</p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <p>NISM V-A Certified</p>
          <div className="flex gap-4 mt-1">
            <a href="https://www.linkedin.com/in/pvhemanth" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-1">LinkedIn</a>
            <a href="https://www.instagram.com/itsme.hemanthh/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-1">Instagram</a>
            <a href="https://wa.me/919000872375" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-1">WhatsApp</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Kadapa, AP, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-bold tracking-tighter lowercase select-none w-full text-center gradient-text opacity-20" style={{ fontFamily: "'Outfit', sans-serif" }}>
          hemanth
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <a href="#contact" className="underline hover:text-emerald-400 transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/30 text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Venkata Hemanth | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:pvenkatahemanth2005@gmail.com" className="underline hover:text-emerald-400 transition-colors underline-offset-4 decoration-1 lowercase text-white/50">pvenkatahemanth2005@gmail.com</a>
          <a href="tel:+919000872375" className="hover:text-emerald-400 transition-colors text-white/50 mt-1">+91 9000872375</a>
        </div>
        
        <div className="flex flex-col gap-2 md:items-end">
          <a href="https://drive.google.com/file/d/1DGZTtSzKI-3hX99T9--hiXEOW6IKEXUX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-400 transition-colors underline-offset-4 decoration-1">Resume</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
