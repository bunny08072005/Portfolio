import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';



const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
      
      {/* Background Video */}
      <video
        ref={videoRef}
        playsInline
        onEnded={() => setIsPlaying(false)}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Gradient Overlay — ensures text readability */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(160deg, rgba(10,15,13,0.92) 0%, rgba(13,26,20,0.85) 30%, rgba(10,21,16,0.88) 60%, rgba(10,15,13,0.95) 100%)' }} />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating Candlestick Chart Decoration */}
      <div className="absolute right-[5%] top-[15%] hidden lg:flex items-end gap-[6px] opacity-[0.08] h-[300px] z-[3]">
        {[65, 40, 80, 55, 70, 35, 90, 50, 75, 60, 85, 45, 70, 55, 80, 65, 90, 40, 75, 60].map((h, i) => (
          <div key={i} className="w-[3px] rounded-sm" style={{ 
            height: `${h}%`, 
            background: i % 3 === 0 ? '#ef4444' : '#10b981',
            opacity: 0.6,
            animation: `candlestick ${2 + (i * 0.3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`
          }} />
        ))}
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full animate-glow z-[3]" 
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }} 
      />
      <div className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] rounded-full animate-glow z-[3]"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)', animationDelay: '1.5s' }}
      />

      {/* Main Content */}
      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full pt-32 pb-8 flex flex-col md:flex-row md:justify-between md:items-end">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col max-w-2xl">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[0.95]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="gradient-text">Hemanth</span>
          </h1>

          {/* Subtitle */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-white/50 font-medium mb-4 max-w-xl leading-relaxed"
          >
            Finance Enthusiast & Investor
          </p>

          {/* Description */}
          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-lg text-white/30 font-medium mb-10 max-w-lg leading-relaxed"
          >
            Finance-focused BTech undergraduate with NISM V-A certification. 
            Passionate about financial modelling, investment analysis, and building 
            data-driven strategies for wealth creation.
          </p>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4"
          >
            <a href="#projects" className="px-7 py-3 rounded-full bg-emerald-500 text-black font-bold text-sm hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:scale-105">
              View My Work
            </a>
            <a href="https://drive.google.com/file/d/1DGZTtSzKI-3hX99T9--hiXEOW6IKEXUX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md">
              📄 Download Resume
            </a>
          </div>

          {/* Quick Stats */}
          <div 
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-wrap gap-8 md:gap-12 mt-16"
          >
            {[
              { value: 'NISM V-A', label: 'Certified' },
              { value: '8.5', label: 'CGPA' },
              { value: '₹4.6L+', label: 'Budget Managed' },
              { value: '2+', label: 'Projects' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{stat.value}</span>
                <span className="text-xs text-white/30 font-medium mt-1 tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-10 md:mt-0 flex flex-row md:flex-col items-center gap-3 cursor-pointer group mb-16 md:mb-24"
          onClick={toggleVideo}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-emerald-400/30 bg-emerald-500/10 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-500 shadow-[0_0_30px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
            {!isPlaying ? (
              /* Play Icon */
              <svg className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 group-hover:text-black ml-0.5 md:ml-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              /* Pause Icon */
              <svg className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-emerald-400/60 text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:text-emerald-400 transition-opacity"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {!isPlaying ? "Play Reel" : "Pause"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="700"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
