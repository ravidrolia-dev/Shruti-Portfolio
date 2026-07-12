import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { projectsData as projects } from '../lib/projectsData';

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const handleProjectClick = (slug: string) => {
    sessionStorage.setItem('homeScrollPos', window.scrollY.toString());
    navigate(`/project/${slug}`);
  };

  return (
    <section className="bg-transparent rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-20 -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div id="projects" className="absolute top-10 sm:top-12 md:top-14" />
      <FadeIn delay={0} y={30} className="mb-16 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative pb-[10vh]">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - 1 - index) * 0.03;
          
          return (
            <ProjectCard 
              key={project.num}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={scrollYProgress}
              targetScale={targetScale}
              onClick={() => handleProjectClick(project.slug)}
            />
          );
        })}
      </div>

    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  targetScale: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards, progress, targetScale, onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const cardProgress = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32" style={{ marginTop: index === 0 ? 0 : '10vh' }}>
      <motion.div 
        style={{ scale: cardProgress, top: `calc(10vh + ${index * 28}px)` }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col h-full transform-origin-top cursor-pointer group"
        onClick={onClick}
      >
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10 gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="text-[#D7E2EA] font-black text-[clamp(3rem,10vw,140px)] leading-none">{project.num}</span>
            <div>
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm md:text-base opacity-70 block mb-1">
                {project.client}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-none group-hover:text-[#FFD600] transition-colors">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="md:self-center self-start">
            <LiveProjectButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); onClick(); }} />
          </div>
        </div>

        {/* Bottom Row - Images Grid */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-6 min-h-0 relative pointer-events-none">
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img src={project.col1img1} alt={`${project.name} preview 1`} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-[clamp(160px,22vw,340px)] flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img src={project.col1img2} alt={`${project.name} preview 2`} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full md:w-[60%] flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img src={project.col2img} alt={`${project.name} main view`} className="w-full h-full object-cover" />
          </div>
        </div>

      </motion.div>
    </div>
  );
};
