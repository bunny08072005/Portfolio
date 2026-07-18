import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experienceData = [
  {
    role: 'Equity Research Intern',
    company: 'IBTI Asset Management LLP, Begumpet, Hyderabad',
    duration: 'Jul 2026 – Present',
    type: 'Internship (On-site)',
    tags: ['Equity Research', 'Financial Analysis', 'Valuation', 'Market Research'],
    points: [
      'Conducting in-depth equity research and fundamental analysis of listed companies',
      'Preparing detailed research reports with investment recommendations and valuation models',
      'Analyzing financial statements, industry trends, and macroeconomic factors to support portfolio decisions',
      'Collaborating with the asset management team on portfolio strategy and stock screening',
    ],
  },
  {
    role: 'Finance Intern',
    company: '365 Wealth and Health HUB',
    duration: 'Apr 2026 – Jun 2026',
    type: 'Internship',
    tags: ['Excel', 'Financial Planning', 'Market Research', 'Docx'],
    points: [
      'Assisted in financial planning and wealth management activities including SIP planning and insurance analysis',
      'Worked on investment evaluation and client portfolio analysis using Excel and financial functions',
      'Supported business development and client engagement through presentations, promotional campaigns, and financial awareness sessions',
      'Collaborated with the team in preparing reports, investment proposals, and financial strategy documents',
      'Designed promotional content and awareness campaigns for financial products and services',
    ],
  },
  {
    role: 'Finance Secretary',
    company: 'Dept. of CSE, IIIT RGUKT RK Valley',
    duration: 'Aug 2025 – Aug 2026',
    type: 'Leadership',
    tags: ['Budget Management', 'Financial Documentation', 'Event Management'],
    points: [
      'Served as Finance Secretary for the Department of Computer Science & Engineering',
      'Managed budgeting, fund allocation, and financial documentation for departmental activities and events',
      'Independently managed and monitored a budget of ₹4.6 Lakhs for the department farewell event',
      'Ensured transparent utilization and financial accountability without operational discrepancies',
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section id="experience" className="relative pt-24 pb-32 px-6 md:px-12 w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f0d 0%, #0d1410 50%, #0a0f0d 100%)' }}>
      
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 mb-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-line" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experienceData.map((exp, i) => (
              <div 
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 150}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#0a0f0d] z-10 shadow-[0_0_15px_rgba(16,185,129,0.4)]" />

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-40px)] ml-10 md:ml-0 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/20 transition-all duration-500 group`}>
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>{exp.role}</h3>
                      <p className="text-white/40 text-base mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-emerald-400/70 text-xs font-mono font-semibold">{exp.duration}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/80 font-medium">{exp.type}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Points */}
                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-base text-white/40 leading-relaxed">
                        <span className="text-emerald-500/50 mt-1.5 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider w-full absolute bottom-0 left-0" />
    </section>
  );
};

export default Experience;
