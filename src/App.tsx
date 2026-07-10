
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { SparklesCore } from './components/Sparkles';

function App() {
  return (
    <main className="main-wrapper bg-[#0C0C0C] min-h-screen relative">
      {/* Global Background Sparkles */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFD600"
        />
      </div>
      
      <div className="relative z-10">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
