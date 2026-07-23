import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Mail } from 'lucide-react';
import ReactGA from 'react-ga4';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xjgnyowr', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        
        // Track successful form submission in Google Analytics
        ReactGA.event({
          category: 'Contact',
          action: 'Form Submitted',
          label: 'Contact Section Form'
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-transparent">
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 w-full max-w-5xl">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,10vw,140px)]">
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <FadeIn delay={0.2} y={20} className="flex flex-col gap-6">
          <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)]">
            Ready to start a project?
          </h3>
          <p className="text-[#D7E2EA] font-light leading-relaxed opacity-70 text-[clamp(1rem,1.5vw,1.25rem)] mb-2">
            Looking for a marketing designer who understands both visual craft and performance?
            <br />
            I&apos;m open to full-time roles, remote opportunities, and freelance collaborations.
          </p>
          <a 
            href="/Shruti_Drolia.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 rounded-full border-2 border-[#FFD600] text-[#FFD600] font-medium uppercase tracking-widest px-8 py-3.5 text-sm hover:bg-[#FFD600] hover:text-black transition-colors self-start"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Resume
          </a>
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="flex flex-col gap-4 justify-center">
          {status === 'success' ? (
            <div className="flex flex-col gap-4 w-full bg-white/5 p-8 rounded-[24px] border border-[#FFD600]/30 shadow-xl items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFD600]/20 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4 className="text-[#FFD600] font-bold text-xl uppercase tracking-widest">Message Sent!</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setStatus('idle')} 
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 text-white/70 font-medium tracking-wide px-6 py-2.5 text-xs hover:bg-white/10 hover:text-white transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full bg-white/5 p-6 sm:p-8 rounded-[24px] border border-white/10 shadow-xl"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[#D7E2EA]/70 text-sm font-medium tracking-wide">Name</label>
                <input type="text" name="name" id="name" className="bg-[#0C0C0C] border border-white/10 rounded-xl px-4 py-3.5 text-[#D7E2EA] focus:outline-none focus:border-[#FFD600]/50 focus:ring-1 focus:ring-[#FFD600]/50 transition-all placeholder-white/20" placeholder="Your name" required />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[#D7E2EA]/70 text-sm font-medium tracking-wide">Email</label>
                <input type="email" name="email" id="email" className="bg-[#0C0C0C] border border-white/10 rounded-xl px-4 py-3.5 text-[#D7E2EA] focus:outline-none focus:border-[#FFD600]/50 focus:ring-1 focus:ring-[#FFD600]/50 transition-all placeholder-white/20" placeholder="your@email.com" required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[#D7E2EA]/70 text-sm font-medium tracking-wide">Message</label>
                <textarea name="message" id="message" rows={4} className="bg-[#0C0C0C] border border-white/10 rounded-xl px-4 py-3.5 text-[#D7E2EA] focus:outline-none focus:border-[#FFD600]/50 focus:ring-1 focus:ring-[#FFD600]/50 transition-all resize-none placeholder-white/20" placeholder="Tell me about your project..." required></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm mt-1">Oops! There was a problem submitting your form.</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="mt-2 w-full inline-flex justify-center items-center gap-2 rounded-full border-2 border-[#FFD600] bg-[#FFD600] text-black font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-transparent hover:text-[#FFD600] disabled:opacity-50 disabled:hover:bg-[#FFD600] disabled:hover:text-black transition-colors"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 mt-2 px-2">
            <a href="mailto:shruti06drolia@gmail.com" className="text-[#D7E2EA]/50 hover:text-[#FFD600] transition-colors text-sm font-medium flex items-center gap-2 tracking-wide">
              <Mail className="w-4 h-4" /> shruti06drolia@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/shruti-drolia-2162b913a/" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/50 hover:text-[#FFD600] transition-colors text-sm font-medium flex items-center gap-2 tracking-wide">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
