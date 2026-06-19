import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'Financial Modelling', icon: '📊' },
  { name: 'DCF Valuation', icon: '💰' },
  { name: 'Investment Analysis', icon: '📈' },
  { name: 'SIP Planning', icon: '🔄' },
  { name: 'Risk Profiling', icon: '⚡' },
  { name: 'Asset Allocation', icon: '🎯' },
  { name: 'Market Research', icon: '🔍' },
  { name: 'Technical Analysis', icon: '📉' },
  { name: 'Excel & Pivot Tables', icon: '📋' },
  { name: 'Python', icon: '🐍' },
  { name: 'Financial Projections', icon: '🧮' },
  { name: 'GeM Tendering', icon: '🏛️' },
];

const achievements = [
  {
    icon: '🏆',
    title: 'NISM Series V-A Certified',
    desc: 'Foundational knowledge in mutual funds, investment products and financial planning'
  },
  {
    icon: '💼',
    title: 'Finance Secretary',
    desc: 'Department of Computer Science & Engineering — managed budgets and financial documentation'
  },
  {
    icon: '📊',
    title: '₹4.6 Lakhs Budget Managed',
    desc: 'Independently managed department farewell event budget with full transparency'
  },
];

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section id="about" className="relative pt-24 pb-32 px-6 md:px-12 w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f0d 0%, #0d1117 50%, #0a0f0d 100%)' }}>
      
      {/* Section divider top */}
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 mb-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Passionate about <span className="gradient-text">Markets</span> &<br />
            <span className="gradient-text-gold">Building Wealth</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Bio + Achievements */}
          <div className="flex-1" data-aos="fade-right" data-aos-delay="100">
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-8">
              I'm <span className="text-white font-bold">Peddaboyena Venkata Hemanth</span>, a finance-focused BTech undergraduate 
              from <span className="text-emerald-400/80">IIIT RGUKT RK Valley</span>, Kadapa, Andhra Pradesh. With a 
              <span className="text-amber-400/80"> NISM V-A certification</span> and growing expertise in financial modelling 
              and investment analysis, I'm passionate about understanding markets and applying analytical skills 
              to support informed investment decisions. I also work as a 
              <span className="text-emerald-400/80">GeM Tender Consultant</span>, handling government 
              e-marketplace tendering operations.
            </p>
            <p className="text-base md:text-lg text-white/35 leading-relaxed mb-12">
              Currently pursuing my B.Tech in Computer Science & Engineering while actively building my career in 
              finance through hands-on projects, internships, and certifications. I believe in combining 
              technology with finance to create data-driven investment strategies.
            </p>

            {/* Achievement Cards */}
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <div 
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={200 + (i * 100)}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500 group"
                >
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-lg font-bold text-white/70 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <div 
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={100 + (i * 50)}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300 group cursor-default"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <span className="text-white/60 text-sm font-medium group-hover:text-white/80 transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div data-aos="fade-up" data-aos-delay="400" className="mt-8 p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.03]">
              <h4 className="text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Education</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-white font-bold text-base">B.Tech in Computer Science & Engineering</h5>
                  <p className="text-white/40 text-sm mt-1">IIIT, RGUKT RK Valley, AP, India</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-emerald-400/60 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>2023 – Present</span>
                    <span className="text-amber-400 text-xs font-bold">CGPA: 8.5/10</span>
                  </div>
                </div>
                <div className="h-px bg-white/5"></div>
                <div>
                  <h5 className="text-white font-bold text-base">Pre-University Course</h5>
                  <p className="text-white/40 text-sm mt-1">RGUKT RK Valley</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-emerald-400/60 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>2021 – 2023</span>
                    <span className="text-amber-400 text-xs font-bold">CGPA: 9.8/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider w-full absolute bottom-0 left-0" />
    </section>
  );
};

export default About;
