
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { SparklesCore } from '../components/Sparkles';
import { Typewriter } from '../components/Typewriter';

export const HeroSection = () => {
  return (
    <section className="min-h-[100svh] sm:min-h-0 sm:h-screen flex flex-col relative overflow-x-clip px-5 sm:px-8 md:px-10 pb-10 sm:pb-0">

      {/* Background Sparkles */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFD600"
        />
      </div>

      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] pt-6 md:pt-8 relative z-20 order-none">
        <span className="font-black text-[#FFD600]">PORTFOLIO</span>
        <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
      </FadeIn>

      <div className="order-1 sm:order-none overflow-hidden mt-6 mb-3 sm:mb-0 sm:mt-10 md:mt-4 lg:mt-2 relative z-20 flex justify-center items-center sm:block w-full">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-[-0.04em] sm:tracking-tight leading-[0.9] sm:leading-none whitespace-normal sm:whitespace-nowrap break-keep sm:break-normal [overflow-wrap:normal] w-full max-w-full px-4 sm:px-0 text-[clamp(3rem,12vw,5rem)] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] text-center sm:text-left">
            Hi, i&apos;m shruti
          </h1>
        </FadeIn>
      </div>

      <div className="order-3 sm:order-none flex-none sm:flex-1 flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-between gap-4 sm:gap-0 pb-0 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[320px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] px-5 sm:px-0 flex flex-col items-center sm:items-start gap-2 sm:gap-3">
          <h2 className="text-[#FFD600] font-black uppercase tracking-wider text-[1.05rem] sm:text-lg md:text-xl lg:text-2xl text-center sm:text-left">
            Graphic Designer · Performance-Driven Creative
          </h2>
          <Typewriter
            text="4.5 years designing for scale — app store growth, creative campaigns, and brand systems. 700+ creatives a month across digital advertising, freelance branding, and product marketing."
            speed={40}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-[1.7] sm:leading-relaxed text-[0.95rem] sm:text-[clamp(0.75rem,1.4vw,1.5rem)] text-center sm:text-left inline-block"
          />
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="mt-3 mb-10 sm:mt-0 sm:mb-0">
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="order-2 sm:order-none relative top-auto left-auto transform-none mx-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[220px] sm:w-[360px] md:w-[440px] lg:w-[520px] mt-5 mb-6 sm:my-0">
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="/face.png"
            alt="Shruti Portrait"
            className="w-full h-auto object-contain"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
