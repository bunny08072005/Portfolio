import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ number, title, subtitle, text, tags, link, linkLabel, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive 
          ? 'bg-emerald-600 border-emerald-400 shadow-[0_20px_50px_rgba(16,185,129,0.3)]' 
          : 'bg-[#111916] border border-emerald-900/20 shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] absolute top-4 border border-gray-700 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-black rounded-full opacity-30"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[260px] transition-colors duration-700 ${
        isActive ? 'bg-emerald-700/50' : 'bg-[#0d1117]'
      }`}>
        <span className={`text-xl font-bold mb-1 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-emerald-200' : 'text-emerald-700/50'
        }`}>{number}</span>
        
        <h3 className={`text-xl font-black mb-1 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-white/90'
        }`} style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>

        <p className={`text-xs font-semibold mb-3 transition-colors duration-700 ${
          isActive ? 'text-emerald-200/70' : 'text-emerald-400/50'
        }`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>{subtitle}</p>
        
        <p className={`text-base leading-relaxed font-medium transition-colors duration-700 mb-4 ${
          isActive ? 'text-emerald-100/80' : 'text-white/30'
        }`}>
          {text}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag, i) => (
            <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors duration-700 ${
              isActive ? 'bg-white/10 text-white/70' : 'bg-white/[0.03] text-white/25 border border-white/[0.05]'
            }`}>{tag}</span>
          ))}
        </div>

        {/* View Project Link */}
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-500 group/link w-fit ${
              isActive 
                ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50'
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            📄 {linkLabel || 'View Project'}
            <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="projects"
      ref={containerRef}
      className="relative pt-24 pb-32 px-6 md:px-12 w-full overflow-hidden grid-bg"
      style={{ background: 'linear-gradient(180deg, #0a0f0d 0%, #0d1117 50%, #0a0f0d 100%)' }}
    >
      <div className="max-w-6xl mx-auto relative md:h-[1550px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 mb-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight relative" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Building with <span className="gradient-text">Data</span> & <span className="gradient-text-gold">Financial</span> Insights
            {/* Arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-emerald-600/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-white/30 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Real-world finance projects combining analytical rigor with practical investment insights.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1550px] pointer-events-none z-0" 
          viewBox="0 0 1000 1550" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1100 350,1200 C 300,1300 500,1400 450,1450" 
            fill="none" 
            stroke="rgba(16,185,129,0.1)" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
          />

          <mask id="path-mask">
            <motion.path 
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1100 350,1200 C 300,1300 500,1400 450,1450" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1100 350,1200 C 300,1300 500,1400 450,1450" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="rgba(16,185,129,0.1)" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Project Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <ProjectCard 
            number="01"
            title="Financial Modelling & Valuation"
            subtitle="Anant Raj Limited"
            text="Built a detailed 3-statement financial model analysing historical performance, profitability, and cash flows. Conducted DCF valuation, WACC calculation, ROIC analysis, and comparable company valuation using industry multiples."
            tags={['Excel', 'DCF Valuation', 'Financial Analysis', 'WACC']}
            link="https://drive.google.com/file/d/1H5TWrqnVGhfgBCvcPrp_EbZMqKEr-G3p/view"
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ProjectCard 
            number="02"
            title="Mutual Fund Analysis"
            subtitle="Motilal Oswal Midcap Fund"
            text="Conducted comparative analysis against benchmark indices and peer funds using CAGR, SIP returns, and risk-adjusted performance metrics. Performed risk analysis using Sharpe Ratio, Beta, Alpha, and Standard Deviation."
            tags={['Portfolio Analysis', 'Investment Research', 'Risk Metrics']}
            link="https://drive.google.com/file/d/1RGnwnNzrkFmK1v3M2CSp4nIos8dukBrm/view"
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ProjectCard 
            number="03"
            title="Wealth Management Solutions"
            subtitle="365 Wealth & Health HUB"
            text="Designed promotional content and awareness campaigns for financial products. Worked on SIP planning, insurance analysis, and investment evaluation for real clients as part of internship deliverables."
            tags={['SIP Planning', 'Insurance', 'Client Management']}
            className="md:absolute md:top-[900px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-2"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <ProjectCard 
            number="04"
            title="Budget & Financial Operations"
            subtitle="Department Finance Secretary"
            text="Independently managed ₹4.6 Lakhs budget for department events. Ensured transparent utilization, prepared financial documentation, and maintained accountability across all departmental activities."
            tags={['Budget Management', 'Financial Reporting', 'Event Finance']}
            className="md:absolute md:top-[1250px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-2"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* End text */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="600"
            className="hidden md:block absolute top-[1480px] left-[60%] font-['Caveat',cursive] text-3xl text-emerald-600/40 rotate-6"
          >
            More coming soon! 📈
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
