import { FadeIn } from '../components/FadeIn';

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
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50">Email</span>
            <a href="mailto:your.email@example.com" className="text-[#FFD600] font-medium text-xl sm:text-2xl hover:opacity-70 transition-opacity">
              [your.email@example.com]
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50">Phone</span>
            <a href="tel:+1234567890" className="text-[#D7E2EA] font-medium text-xl sm:text-2xl hover:opacity-70 transition-opacity">
              [+1 234 567 890]
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-50">Socials</span>
            <div className="flex gap-6">
              <a href="#" className="text-[#D7E2EA] font-medium hover:text-[#FFD600] transition-colors uppercase tracking-wider">LinkedIn</a>
              <a href="#" className="text-[#D7E2EA] font-medium hover:text-[#FFD600] transition-colors uppercase tracking-wider">Behance</a>
              <a href="#" className="text-[#D7E2EA] font-medium hover:text-[#FFD600] transition-colors uppercase tracking-wider">Instagram</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
