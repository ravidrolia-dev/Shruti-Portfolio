import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ContactSection } from '../sections/ContactSection';

export const Home = () => {
  return (
    <div className="relative z-10">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
