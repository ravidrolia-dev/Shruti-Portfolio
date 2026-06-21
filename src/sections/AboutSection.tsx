
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import TrueFocus from '../components/TrueFocus';

const paragraphs = [
  "Hi, I'm Shruti Drolia, a Marketing Designer with 4.5+ years of professional experience creating impactful digital experiences that blend creativity, branding and performance marketing.",
  "I specialize in marketing design, app store optimization (ASO), social media campaigns, branding systems and advertising creatives that help businesses grow and connect with their audiences.",
  "Over the years, I have designed and delivered 2,000+ high-scale creatives including Meta Ads, Google Ads, story posters, vector illustrations, GIFs and short-form videos while maintaining quality and efficiency in fast-paced environments.",
  "At Pratilipi, I improved organic app installs by 12% by redesigning Play Store ASO visuals and optimizing listing hierarchies using data-driven design decisions. I have also executed high-frequency A/B testing to improve click-through rates, conversion rates and overall campaign performance.",
  "I actively leverage AI-powered workflows using Midjourney, ChatGPT and Google Gemini to accelerate ideation, streamline creative execution and reduce turnaround time.",
  "My work spans the entire creative process — from concept development to final delivery and performance optimization — while collaborating closely with Growth and Marketing teams to build meaningful visual experiences.",
  "Alongside my professional experience, I have worked as a Freelance Graphic Designer, creating visual identity systems, branding assets, banners, menu systems and marketing collateral that translate business goals into clear, user-focused design solutions."
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

        <div className="flex flex-col gap-6 mb-16">
          {paragraphs.map((p, i) => (
            <AnimatedText 
              key={i}
              text={p}
              className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,1.5vw,1.35rem)]"
            />
          ))}
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
