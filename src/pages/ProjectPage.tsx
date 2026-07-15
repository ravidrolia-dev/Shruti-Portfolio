import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { projectsData } from '../lib/projectsData';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Compass, Lightbulb, Sparkles } from 'lucide-react';
import { UnfoldingImage } from '../components/UnfoldingImage';

export const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 250]);

  const project = projectsData.find(p => p.slug === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const titleWords = project.name.split(" ");
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <div className="min-h-screen relative z-10 bg-transparent text-[#D7E2EA]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFD600] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Floating Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-8 left-5 sm:left-8 md:left-12 z-50 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] px-5 py-2.5 rounded-full transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        BACK
      </button>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden mb-24">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y: yParallax }}>
          <img src={project.col2img} alt={project.name} className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1} y={30} className="w-full flex flex-col items-center justify-center">
            <span className="text-[#FFD600] font-bold uppercase tracking-[0.3em] text-xs sm:text-sm block mb-8">
              {project.client}
            </span>
            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="font-serif italic font-medium text-white text-[clamp(2.5rem,6vw,90px)] leading-[1.1] tracking-tight mb-12 flex flex-wrap justify-center gap-x-4 gap-y-2">
              {titleWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">{word}</motion.span>
              ))}
            </motion.h1>
            <div className="font-mono text-xs sm:text-sm text-white/50 tracking-[0.2em] uppercase">
              {project.role}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-24 pb-16 w-full">
        <FadeIn delay={0.3} y={30} className="prose prose-invert prose-lg sm:prose-xl max-w-none lg:w-[75%]">
          <p className="text-[#D7E2EA] font-medium text-xl sm:text-2xl leading-relaxed mb-8 border-l-2 border-[#FFD600] pl-6">
            {project.shortDescription}
          </p>

          {project.servicesUsed && (
            <div className="mb-4">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Services Used:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.servicesUsed}</p>
            </div>
          )}

          {project.skillsUsed && (
            <div className="mb-8">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Skills Used:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.skillsUsed}</p>
            </div>
          )}
        </FadeIn>
      </section>

      {/* Full Width Image Section */}
      {project.skillsImage !== undefined && (
        <section className="w-full overflow-x-hidden mb-24">
          <FadeIn delay={0.4} y={20}>
            {/* Remove max-w and mx-auto so it aligns completely to the left padding */}
            <div className="w-full px-5 sm:px-8 md:px-12 lg:px-24">
              <UnfoldingImage mainImage={project.skillsImage} hoverImage={project.skillsHoverImage} />
            </div>
          </FadeIn>
        </section>
      )}

      {/* Content Blocks Section */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-24 pb-24 w-full">
        <FadeIn delay={0.5} y={30} className="prose prose-invert prose-lg sm:prose-xl max-w-none">
          {project.contentBlocks && project.contentBlocks.length > 0 ? (
            <div className="flex flex-col gap-24 sm:gap-32 w-full">
              {project.contentBlocks.map((block, idx) => (
                block.type === 'process' ? (
                  <div key={idx} className="w-full flex flex-col items-center py-16 bg-[#090909] rounded-[40px] px-8 border border-white/5 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFD600]/5 via-black/0 to-black/0 pointer-events-none" />
                    
                    {block.title && (
                      <div className="flex items-center gap-4 mb-20 text-[#FFD600] font-mono text-xs sm:text-sm tracking-widest uppercase relative z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600]"></span>
                        {block.title}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600]"></span>
                      </div>
                    )}
                    
                    {block.processSteps && (
                      <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-4 z-10">
                        {/* Connecting horizontal line (desktop only) */}
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-white/10 z-0"></div>
                        
                        {block.processSteps.map((step, stepIdx) => (
                          <div key={stepIdx} className="relative z-10 flex-1 flex flex-col items-center text-center">
                            {/* Top Number Circle */}
                            <div className="w-16 h-16 rounded-full border border-[#FFD600]/30 bg-[#0C0C0C] flex items-center justify-center text-white/80 font-mono text-sm mb-10 mx-auto shadow-[0_0_15px_rgba(255,214,0,0.1)]">
                              0{stepIdx + 1}
                            </div>
                            
                            <h4 className="font-serif italic font-medium text-2xl text-white mb-6">{step.title}</h4>
                            
                            <p className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed mb-10 max-w-xs mx-auto">
                              {step.copy}
                            </p>
                            
                            {/* Bottom Icon Circle */}
                            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#FFD600] mt-auto">
                              {stepIdx === 0 && <Compass size={16} />}
                              {stepIdx === 1 && <Lightbulb size={16} />}
                              {stepIdx === 2 && <Sparkles size={16} />}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                  {/* Sticky Title Column */}
                  {block.title && (
                    <div className="lg:w-1/3 lg:sticky lg:top-32 shrink-0">
                      <h3 className="font-mono text-[#FFD600] uppercase tracking-widest text-lg sm:text-xl mb-4">
                        {block.title}
                      </h3>
                    </div>
                  )}

                  {/* Content Column */}
                  <div className={`flex flex-col gap-8 w-full ${block.title ? 'lg:w-2/3' : ''}`}>
                    {/* Block Text Content */}
                    {(block.copy || block.list) && (
                      <div className="max-w-3xl">
                        {block.copy && (
                          <p className="text-[#D7E2EA]/90 font-light text-base sm:text-lg leading-relaxed whitespace-pre-wrap mb-6">
                            {block.copy}
                          </p>
                        )}
                        {block.list && block.list.length > 0 && (
                          <ul className="list-disc pl-5 text-[#D7E2EA]/90 font-light text-base sm:text-lg space-y-2">
                            {block.list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Block Images with Hover Zoom */}
                    {block.images && block.images.length > 0 && (
                      <div className="w-full mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          {block.images.map((imgUrl, imgIdx) => (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, margin: "-10%" }}
                              transition={{ duration: 0.6 }}
                              key={imgIdx} 
                              className={`bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[30px] overflow-hidden group ${imgIdx % 3 === 0 || block.images!.length === 1 ? 'sm:col-span-2' : ''}`}
                            >
                              <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                src={imgUrl} 
                                alt={`${project.name} context image ${idx}-${imgIdx}`} 
                                className="w-full h-auto block" 
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                )
              ))}
            </div>
          ) : (
            // Legacy Layout Fallback
            <>
              {/* First Dynamic Gallery Image */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="w-full">
                  <img src={project.gallery[0]} alt={`${project.name} main showcase`} className="w-full h-auto rounded-[20px] sm:rounded-[30px]" />
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-2">The Problem</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base">{project.problem}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-2">The Approach</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base">{project.approach}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-2">The Result</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base">{project.result}</p>
                </div>
              </div>

              {project.stats && project.stats.length > 0 && (
                <div className="flex flex-wrap gap-8 md:gap-16 py-12 border-y border-white/10 mb-16">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="flex-1 min-w-[200px]">
                      <div className="font-black text-4xl sm:text-5xl md:text-6xl text-white mb-2">{stat.value}</div>
                      <div className="font-mono text-sm text-[#D7E2EA]/60 uppercase tracking-widest leading-relaxed">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {project.result && (
                <div className="mb-20">
                  <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-sm mb-4">Result</h4>
                  <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg leading-relaxed">
                    {project.result}
                  </p>
                </div>
              )}

              {/* Remaining Dynamic Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="w-full max-w-4xl mx-auto my-16">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {project.gallery.slice(1).map((imgUrl, idx) => (
                      <div key={idx} className={`bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[30px] overflow-hidden ${idx % 3 === 0 ? 'sm:col-span-2' : ''}`}>
                        <img src={imgUrl} alt={`${project.name} gallery image ${idx + 2}`} className="w-full h-auto block" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </FadeIn>
      </section>
    </div>
  );
};
