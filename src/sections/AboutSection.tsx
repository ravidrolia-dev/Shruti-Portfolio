
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import TrueFocus from '../components/TrueFocus';

const paragraphs = [
  "I design creatives that don’t just look good — they perform.",
  "I’m Shruti Drolia, a marketing designer with 4.5 years of experience creating high-volume digital creatives for app growth, paid ads, ASO, and brand campaigns.",
  "I have worked closely with growth and marketing teams to design Play Store visuals, Meta and Google ad creatives, story posters, GIFs, short-form videos, and campaign assets — delivering around 500 creatives monthly across multiple formats and campaign needs.",
  "My work contributed to a 12% increase in organic app installs through ASO visual redesign and listing hierarchy improvements.",
  "I enjoy working in collaborative teams where design, marketing, and performance goals come together. I like building visuals that are fast, scalable, brand-aware, and performance-focused — designed not just to look good, but to communicate clearly and drive action."
];

const skills = [
  "Photoshop", "Illustrator", "Premiere Pro", "Canva", "AI/generative tools", "Midjourney",
  "Branding", "Vector Illustration", "Layout Design", "A/B Testing", "Data-Driven Design"
];

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-transparent">

      <div className="flex flex-col items-center z-10 relative w-full max-w-4xl mx-auto">
        <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 md:mb-20 text-[#D7E2EA]">
          <TrueFocus
            sentence="About Me"
            manualMode={false}
            blurAmount={4}
            borderColor="#FFD600"
            glowColor="rgba(255, 214, 0, 0.6)"
            animationDuration={1.2}
            pauseBetweenAnimations={0.2}
          />
        </FadeIn>

        <div className="mb-16 w-full">
          <AnimatedText
            text={paragraphs}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,1.5vw,1.35rem)]"
          />
        </div>



        {/* Visual Skills Block */}
        <FadeIn delay={0.3} y={20} className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 md:mb-24 w-full max-w-3xl">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA] font-medium text-sm hover:border-[#FFD600] hover:text-[#FFD600] hover:bg-[#FFD600]/10 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          <ContactButton />
          <a
            href="/Shruti_Drolia.pdf"
            target="_blank"
            className="inline-block rounded-full text-[#FFD600] font-black uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline-none transition-all hover:bg-[#FFD600] hover:text-[#0C0C0C] active:scale-95 whitespace-nowrap border-2 border-[#FFD600] flex items-center justify-center"
          >
            Resume
          </a>
        </FadeIn>
      </div>

    </section>
  );
};
