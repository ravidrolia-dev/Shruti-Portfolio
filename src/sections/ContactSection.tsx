import { FadeIn } from '../components/FadeIn';
import { Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C]">
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
          <p className="text-[#D7E2EA] font-light leading-relaxed opacity-70 text-[clamp(1rem,1.5vw,1.25rem)]">
            [Add your introductory text here. For example: "I am always open to discussing product design work or partnership opportunities."]
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-2">
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </span>
            <a href="mailto:your.email@example.com" className="text-[#FFD600] font-medium text-xl sm:text-2xl hover:opacity-70 transition-opacity">
              [your.email@example.com]
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Phone
            </span>
            <a href="tel:+1234567890" className="text-[#D7E2EA] font-medium text-xl sm:text-2xl hover:opacity-70 transition-opacity">
              [+1 234 567 890]
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50">Socials</span>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="flex items-center gap-2 text-[#D7E2EA] font-medium hover:text-[#FFD600] transition-colors uppercase tracking-wider">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>

              <a href="#" className="flex items-center gap-2 text-[#D7E2EA] font-medium hover:text-[#FFD600] transition-colors uppercase tracking-wider">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
