import { useEffect } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ContactSection } from '../sections/ContactSection';

export const Home = () => {
  useEffect(() => {
    const savedPos = sessionStorage.getItem('homeScrollPos');
    if (savedPos) {
      // Use setTimeout to ensure all sections are rendered and heights are calculated
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPos, 10), behavior: 'instant' });
        sessionStorage.removeItem('homeScrollPos');
      }, 50);
    }
  }, []);

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
