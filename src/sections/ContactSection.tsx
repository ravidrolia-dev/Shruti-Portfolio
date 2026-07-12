import { FadeIn } from '../components/FadeIn';
import { Mail } from 'lucide-react';

export const ContactSection = () => {
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

        <FadeIn delay={0.4} y={20} className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-2">
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </span>
            <a href="mailto:shruti06drolia@gmail.com" className="text-[#FFD600] font-medium text-xl sm:text-[1.3rem] hover:opacity-70 transition-opacity">
              shruti06drolia@gmail.com
            </a>
          </div>


          <div className="flex flex-col gap-3">
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50">Socials</span>
            <div className="flex flex-wrap gap-6">
              <a href="https://www.linkedin.com/in/shruti-drolia-2162b913a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#D7E2EA] font-medium hover:text-[#FFD600] transition-colors uppercase tracking-wider">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
