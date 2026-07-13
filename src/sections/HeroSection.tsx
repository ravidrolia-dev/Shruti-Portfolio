import { FadeIn } from '../components/FadeIn';

import { Typewriter } from '../components/Typewriter';


export const HeroSection = () => {
  return (
    <section className="min-h-[100svh] sm:min-h-screen flex flex-col relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 pb-10 sm:pb-0 bg-[#0C0C0C]/0">
      
      {/* Navigation */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg pt-6 md:pt-8 pb-4 border-b border-white/10 relative z-20 w-full mb-4 lg:mb-8">
        <span className="font-black text-[#FFD600] tracking-widest text-lg sm:text-xl">Portfolio</span>
        <div className="flex gap-4 sm:gap-10">
          <a href="#about" className="hover:text-[#FFD600] transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-[#FFD600] transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-[#FFD600] transition-colors duration-200">Contact</a>
        </div>
      </FadeIn>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-[1400px] mx-auto relative z-20 gap-12 lg:gap-8 xl:gap-20 pb-20 pt-0">
        
        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
          
          <FadeIn delay={0.3} y={30}>
            <h1 className="font-bold text-[#D7E2EA] leading-[1.1] text-[clamp(2.5rem,8vw,5.5rem)] tracking-tight mb-6 sm:mb-8">
              Hi, I'm <br className="hidden lg:block"/> Shruti Drolia.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-[#FFD600] font-bold tracking-[0.15em] uppercase text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 min-h-[3rem] lg:min-h-[3.5rem]">
              <span>Marketing Designer for</span>
              <Typewriter
                text={['App Growth', 'Paid Ads', 'Brand Campaigns']}
                speed={20}
                deleteSpeed={20}
                delay={2000}
                loop={true}
                className="inline-block"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={30}>
            <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl lg:max-w-xl mb-10 sm:mb-12 inline-block whitespace-pre-wrap">
              {"I create performance-led visuals for digital brands — from app store creatives and paid ads to social campaigns, launch assets, and brand systems.\n4.5 years experience · 2,000+ creatives delivered · 12% organic install growth through ASO redesign"}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={30} className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <a 
              href="#projects"
              className="inline-block rounded-full text-[#0C0C0C] font-black uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline-none transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{
                background: '#FFD600',
                boxShadow: '0px 4px 4px rgba(255, 214, 0, 0.25), inset 4px 4px 12px rgba(255, 255, 255, 0.3)',
                outline: '2px solid white',
                outlineOffset: '-3px'
              }}
            >
              View Projects
            </a>
            <a 
              href="/Shruti_Drolia.pdf"
              target="_blank"
              className="inline-block rounded-full text-[#FFD600] font-black uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline-none transition-all hover:bg-[#FFD600] hover:text-[#0C0C0C] active:scale-95 whitespace-nowrap border-2 border-[#FFD600] flex items-center justify-center"
            >
              Resume
            </a>
          </FadeIn>
        </div>

        {/* Right Column: Image */}
        <FadeIn delay={0.6} y={30} className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[40%] flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[380px] lg:max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 group bg-[#111]">
            {/* Subtle overlay effect */}
            <div className="absolute inset-0 bg-[#FFD600]/5 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <img
              src="/shruti-new.jpg"
              alt="Shruti Drolia Portrait"
              className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>
        </FadeIn>

      </div>
      
    </section>
  );
};
