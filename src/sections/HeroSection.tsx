import { FadeIn } from '../components/FadeIn';
import { Typewriter } from '../components/Typewriter';
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedMetric = ({ value, suffix = "", isString = false, stringValue = "" }: { value?: number, suffix?: string, isString?: boolean, stringValue?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value === undefined) return "";
    if (value >= 1000) return Math.round(latest).toLocaleString() + suffix;
    if (value % 1 !== 0) return latest.toFixed(1) + suffix; // for 4.5
    return Math.round(latest) + suffix;
  });

  useEffect(() => {
    if (value !== undefined) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, value]);

  if (isString) return <span>{stringValue}</span>;
  return <motion.span>{rounded}</motion.span>;
};

export const HeroSection = () => {
  return (
    <section className="flex flex-col relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 pb-12 md:pb-16 bg-[#0C0C0C]/0">
      
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
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1400px] mx-auto relative z-20 gap-12 lg:gap-8 xl:gap-20 pb-0 pt-4 md:pt-8">
        
        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
          
          <FadeIn delay={0.3} y={30}>
            <h1 className="font-bold text-[#D7E2EA] leading-[1.1] text-[clamp(2.5rem,8vw,5.5rem)] tracking-tight mb-6 sm:mb-8">
              Hi, I'm <br className="hidden lg:block"/> Shruti Drolia
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
            <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl lg:max-w-xl mb-6 sm:mb-8 inline-block whitespace-pre-wrap">
              {"I create performance-led visuals for digital brands — from app store creatives and paid ads to social campaigns, launch assets, and brand systems."}
            </p>

            {/* Desktop Metrics */}
            <div className="hidden md:grid grid-cols-4 gap-x-4 w-full max-w-3xl lg:max-w-2xl mb-10 sm:mb-12 mt-6">
              {/* Row 1: Numbers */}
              <div className="col-span-1 pb-3"><span className="font-semibold text-xl lg:text-2xl text-[#D7E2EA] whitespace-nowrap"><AnimatedMetric value={4.5} suffix=" Years" /></span></div>
              <div className="col-span-1 pb-3"><span className="font-semibold text-xl lg:text-2xl text-[#D7E2EA] whitespace-nowrap"><AnimatedMetric value={500} suffix="+" /></span></div>
              <div className="col-span-1 pb-3"><span className="font-semibold text-xl lg:text-2xl text-[#D7E2EA] whitespace-nowrap"><AnimatedMetric value={12} suffix="% Growth" /></span></div>
              <div className="col-span-1 pb-3"><span className="font-semibold text-xl lg:text-2xl text-[#D7E2EA] whitespace-nowrap"><AnimatedMetric isString stringValue="Meta + Google" /></span></div>

              {/* Line */}
              <div className="col-span-4 h-px bg-white/20"></div>

              {/* Row 2: Labels */}
              <div className="col-span-1 pt-3 pr-2"><span className="font-medium text-[11px] lg:text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider leading-tight">Experience</span></div>
              <div className="col-span-1 pt-3 pr-2"><span className="font-medium text-[11px] lg:text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider leading-tight">Creatives Delivered Monthly</span></div>
              <div className="col-span-1 pt-3 pr-2"><span className="font-medium text-[11px] lg:text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider leading-tight">ASO Install Growth</span></div>
              <div className="col-span-1 pt-3 pr-2"><span className="font-medium text-[11px] lg:text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider leading-tight">Ad Creatives</span></div>
            </div>

            {/* Mobile Metrics */}
            <div className="grid md:hidden grid-cols-2 gap-y-8 gap-x-6 mb-10 w-full mt-4">
              <div className="flex flex-col">
                <span className="font-semibold text-2xl text-[#FFD600] pb-2"><AnimatedMetric value={4.5} suffix=" Years" /></span>
                <div className="h-px bg-white/20 w-full mb-3"></div>
                <span className="font-medium text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider">Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-2xl text-[#FFD600] pb-2"><AnimatedMetric value={2000} suffix="+" /></span>
                <div className="h-px bg-white/20 w-full mb-3"></div>
                <span className="font-medium text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider">Creatives Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-2xl text-[#FFD600] pb-2"><AnimatedMetric value={12} suffix="% Growth" /></span>
                <div className="h-px bg-white/20 w-full mb-3"></div>
                <span className="font-medium text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider">ASO Install Growth</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-2xl text-[#FFD600] pb-2"><AnimatedMetric isString stringValue="Meta + Google" /></span>
                <div className="h-px bg-white/20 w-full mb-3"></div>
                <span className="font-medium text-xs text-[#D7E2EA] opacity-80 uppercase tracking-wider">Ad Creatives</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} y={30} className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center rounded-full text-[#0C0C0C] font-black uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 text-[11px] sm:text-xs md:text-sm outline-none transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
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
              className="inline-flex items-center justify-center rounded-full text-[#FFD600] font-black uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 text-[11px] sm:text-xs md:text-sm outline-none transition-all hover:bg-[#FFD600] hover:text-[#0C0C0C] active:scale-95 whitespace-nowrap border-2 border-[#FFD600]"
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
