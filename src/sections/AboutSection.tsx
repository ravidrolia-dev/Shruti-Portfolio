
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import TrueFocus from '../components/TrueFocus';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img 
          src="https://cdn.simpleicons.org/adobephotoshop/31A8FF" 
          alt="Photoshop icon"
          className="w-[80px] sm:w-[110px] md:w-[150px] object-contain opacity-60"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img 
          src="https://cdn.simpleicons.org/adobeillustrator/FF9A00" 
          alt="Illustrator icon"
          className="w-[80px] sm:w-[110px] md:w-[150px] object-contain opacity-60"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img 
          src="https://cdn.simpleicons.org/canva/00C4CC" 
          alt="Canva icon"
          className="w-[80px] sm:w-[110px] md:w-[150px] object-contain opacity-60"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img 
          src="https://cdn.simpleicons.org/googlegemini/8E75B2" 
          alt="AI Spark icon"
          className="w-[80px] sm:w-[110px] md:w-[150px] object-contain opacity-60"
        />
      </FadeIn>

      {/* Main Content */}
      <div className="flex flex-col items-center z-10 relative">
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16 text-[#D7E2EA]">
          <TrueFocus 
            sentence="About me"
            manualMode={false}
            blurAmount={4}
            borderColor="#FFD600"
            glowColor="rgba(255, 214, 0, 0.6)"
            animationDuration={1.2}
            pauseBetweenAnimations={0.2}
          />
        </FadeIn>

        <AnimatedText 
          text="With over 4.5 years of experience, I am a Marketing Designer with a BFM from Mody University. I specialize in branding, social media design, ASO, and creating impactful visual experiences using tools like Photoshop, Illustrator, Premiere Pro, and AI platforms like Midjourney and Gemini."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] mb-16 sm:mb-20 md:mb-24"
        />

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

    </section>
  );
};
