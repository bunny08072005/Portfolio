import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WEB3FORMS_KEY = 'fef68739-7d93-4189-aebe-ab27d225fc8b'; // Replace with your Web3Forms access key

const Contact = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: formData.name,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section ref={ref} id="contact" className="w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-emerald-900/10" style={{ background: '#0a0a0a' }}>
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white/[0.03] uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Outer Bordered Box */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pb-12">
        <div className="border border-emerald-500/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.08)]">
        <div
          data-aos="fade-up"
          className="w-full p-8 md:p-16 text-white flex flex-col justify-between"
          style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #059669 100%)' }}
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-6 uppercase opacity-90" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Let's Connect
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap gap-6 mb-12 md:mb-16">
            <a href="mailto:pvenkatahemanth2005@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base">
              <span>📧</span>
              <span className="underline underline-offset-4 decoration-1">pvenkatahemanth2005@gmail.com</span>
            </a>
            <a href="https://wa.me/919000872375" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base">
              <span>💬</span>
              <span className="underline underline-offset-4 decoration-1">WhatsApp</span>
            </a>
            <a href="tel:+919000872375" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base">
              <span>📞</span>
              <span className="underline underline-offset-4 decoration-1">+91 9000872375</span>
            </a>
            <span className="flex items-center gap-2 text-white/80 text-base">
              <span>📍</span>
              Kadapa, Andhra Pradesh, India
            </span>
          </div>

          {/* Success / Error Messages */}
          {status === 'success' && (
            <div className="mb-8 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm flex items-center gap-3">
              <span className="text-xl">✅</span>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-8 px-6 py-4 rounded-xl bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-white font-semibold text-sm flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    className="w-full h-full min-h-[150px] bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <p className="text-sm text-white/50 max-w-[300px] leading-relaxed">
                Feel free to reach out about investment discussions, collaboration opportunities, or just to connect over markets!
              </p>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`px-8 py-3 rounded-full border-2 border-white/40 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap ${status === 'sending'
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:bg-white hover:text-emerald-700'
                  }`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status !== 'sending' && (
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
          </form>

        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
