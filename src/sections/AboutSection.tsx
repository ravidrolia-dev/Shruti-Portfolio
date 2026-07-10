
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import TrueFocus from '../components/TrueFocus';

const paragraphs = [
  "I design creatives that don’t just look good — they perform.",
  "I’m Shruti Drolia, a graphic designer with 4.5 years of experience working closely with the growth team at Pratilipi, one of India’s largest storytelling platforms.",
  "My work sits at the intersection of design and performance — from Play Store visuals that improved organic installs by 12% to creating and managing 2,000+ ad creatives across Meta and Google. I’m used to working at scale, testing quickly, and focusing on what actually drives results.",
  "With a background in Fashion Merchandising, I naturally think beyond visuals. I consider positioning, audience, and how each design fits into a larger brand and business goal.",
  "I’ve worked with AI-assisted workflows, A/B testing, and alongside marketing teams to continuously refine creatives based on real performance data.",
  "I enjoy working with teams that move fast, care about quality, and see design as a tool for growth — not just decoration."
];

const skills = [
  "Photoshop", "Illustrator", "Premiere Pro", "Canva", "ChatGPT", "Midjourney", "Google Gemini",
  "Branding", "App Store Optimization (ASO)", "Social Media Design", "Advertising Creatives", "A/B Testing", "Marketing Design"
];

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]">

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

        {/* Education Block */}
        <FadeIn delay={0.2} y={20} className="flex flex-col items-center gap-2 mb-16 text-center">
          <h3 className="text-[#FFD600] font-bold tracking-widest uppercase text-sm mb-2 opacity-80">Education</h3>
          <p className="text-[#D7E2EA] font-semibold text-[clamp(1.1rem,2vw,1.4rem)] leading-tight">Bachelor of Fashion and Merchandising (BFM)</p>
          <p className="text-[#D7E2EA] font-light opacity-80 text-[clamp(0.9rem,1.2vw,1.1rem)]">School of Design, Mody University, Lakshmangarh</p>
          <p className="text-[#D7E2EA] font-light opacity-60 text-sm">2016 – 2020</p>
          <p className="text-[#FFD600] font-medium mt-1">CGPA: 8.26 (Topper of the batch)</p>
        </FadeIn>

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

        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

    </section>
  );
};
