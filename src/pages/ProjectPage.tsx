import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { projectsData } from '../lib/projectsData';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Compass, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import { useVideoIntersection } from '../hooks/useVideoIntersection';

const isVideo = (url: string) => /\.(mp4|webm|mov)$/i.test(url);

export const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.slug === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState<boolean>(!!project?.introVideo);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 250]);
  
  const { containerRef: skillsVideoContainerRef, videoRef: skillsVideoRef } = useVideoIntersection(0.4);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showIntro]);

  useEffect(() => {
    if (!project) return;
    const savedPos = sessionStorage.getItem(`projectScroll_${project.slug}`);
    if (savedPos) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPos, 10), behavior: 'instant' });
        sessionStorage.removeItem(`projectScroll_${project.slug}`);
      }, 50);
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const titleLines = project.name.split("\n");
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <>
      <AnimatePresence>
        {showIntro && project.introVideo && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          >
            <video 
              src={project.introVideo} 
              className="w-full h-full object-cover" 
              autoPlay 
              playsInline
              muted 
              onEnded={() => setShowIntro(false)}
            />
            <button 
              onClick={() => setShowIntro(false)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors"
            >
              Skip Intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen relative z-10 bg-transparent text-[#D7E2EA]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFD600] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Floating Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="fixed top-10 lg:top-8 left-5 sm:left-8 md:left-12 z-50 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] px-6 py-3.5 lg:px-5 lg:py-2.5 rounded-full transition-all active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        BACK
      </button>

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] bg-[#0C0C0C] overflow-hidden">
        {/* Background Image/Video with Parallax */}
        <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          {project.heroVideo ? (
            <video 
              src={project.heroVideo}
              className="w-full h-full object-cover opacity-60"
              autoPlay 
              playsInline 
              muted 
              loop
            />
          ) : (
            <img 
              src={project.col2img || project.skillsImage} 
              alt={project.name}
              className="w-full h-full object-cover opacity-60"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col justify-center h-full">
          <FadeIn delay={0.1} y={30} className="w-full max-w-4xl flex flex-col items-start text-left">
            <span className="text-[#FFD600] font-bold uppercase tracking-[0.3em] text-xs sm:text-sm block mb-6 sm:mb-8">
              {project.client}
            </span>
            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="font-serif italic font-medium text-white text-[clamp(2rem,7vw,90px)] leading-[1.25] sm:leading-[1.2] lg:leading-[1.1] tracking-tight mb-8 sm:mb-12">
              {titleLines.map((line, lineIdx) => (
                <div key={lineIdx} className="block">
                  {line.split(" ").map((word, i) => (
                    <motion.span key={`${lineIdx}-${i}`} variants={wordVariants} className="inline-block mr-[0.25em] mb-1 sm:mb-2">
                      {word}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.h1>
            <div className="font-mono text-xs sm:text-sm text-white/50 tracking-[0.2em] uppercase">
              {project.role}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 lg:pb-24 max-w-7xl mx-auto">
        <FadeIn delay={0.3} y={30} className="prose prose-invert prose-lg sm:prose-xl max-w-none">
          <p className="text-[#D7E2EA] font-medium text-xl sm:text-2xl leading-relaxed mb-8 border-l-2 border-[#FFD600] pl-6">
            {project.shortDescription}
          </p>
          {project.roleDetails && (
            <div className="mb-4">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Role:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.roleDetails}</p>
            </div>
          )}
          
          {project.contract && (
            <div className="mb-4">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Contract:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.contract}</p>
            </div>
          )}

          {project.deliverables && (
            <div className="mb-4">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Deliverables:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.deliverables}</p>
            </div>
          )}
          {project.servicesUsed && (
            <div className="mb-4">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Services Used:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.servicesUsed}</p>
            </div>
          )}

          {project.skillsUsed && (
            <div className="mb-12">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Skills Used:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.skillsUsed}</p>
            </div>
          )}

          {project.contribution && (
            <div className="mb-16 flex flex-col items-center text-center">
              <h3 className="font-serif italic font-medium text-2xl sm:text-3xl text-white mb-4 tracking-wide">
                Contribution
              </h3>
              <p className="text-[#D7E2EA]/90 font-light text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
                {project.contribution}
              </p>
            </div>
          )}

          

          {(project.skillsImage !== undefined || project.skillsVideo !== undefined) && (
            <FadeIn delay={0.4} y={20} className="w-full mb-16 lg:mb-24 flex justify-center">
              <div ref={skillsVideoContainerRef} className="w-full flex justify-center">
                {project.skillsVideo ? (
                  <video 
                    ref={skillsVideoRef}
                    src={project.skillsVideo} 
                    className="max-w-full max-h-[80vh] w-auto h-auto rounded-[20px] sm:rounded-[40px]" 
                    playsInline 
                  />
                ) : project.skillsImage ? (
                  <img src={project.skillsImage} alt="Skills Overview" className="max-w-full max-h-[80vh] w-auto h-auto rounded-[20px] sm:rounded-[40px]" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm uppercase tracking-widest text-center px-4">
                    Add image or video path in projectsData.ts
                  </div>
                )}
              </div>
            </FadeIn>
          )}

          {project.contentBlocks && project.contentBlocks.length > 0 && (
            <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 w-full">
              {project.contentBlocks.map((block, idx) => (
                block.type === 'process' ? (
                  <div key={idx} className="w-full flex flex-col items-center py-12 sm:py-16 bg-[#090909] rounded-[30px] sm:rounded-[40px] px-5 sm:px-8 md:px-12 border border-white/5 relative overflow-hidden">
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
                ) : block.type === 'quote' ? (
                  <div key={idx} className="w-full flex flex-col items-center justify-center py-16 sm:py-24 mt-8 sm:mt-12 mb-8">
                    <div className="w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#FFD600] to-transparent mb-12 opacity-70"></div>
                    <h2 className="font-serif italic font-medium text-3xl sm:text-4xl md:text-5xl text-white text-center tracking-wide leading-tight px-4">
                      {block.copy}
                    </h2>
                  </div>
                ) : block.type === 'stats' && block.stats ? (
                  <div key={idx} className="flex flex-wrap gap-8 md:gap-16 py-12 border-y border-white/10 my-8">
                    {block.stats.map((stat, i) => (
                      <div key={i} className="flex-1 min-w-[140px] sm:min-w-[200px]">
                        <div className={`font-black text-white mb-2 break-words ${
                          stat.value.length > 8 ? 'text-3xl sm:text-4xl lg:text-5xl' : 
                          stat.value.length > 5 ? 'text-4xl sm:text-5xl lg:text-5xl' : 
                          'text-4xl sm:text-5xl md:text-6xl'
                        }`}>{stat.value}</div>
                        <div className="font-mono text-sm text-[#D7E2EA]/60 uppercase tracking-widest leading-relaxed">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                ) : block.type === 'zigzag' ? (
                  <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center w-full ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    <div className="w-full lg:w-1/2">
                       {block.images && block.images[0] && (
                          block.subPageSlug ? (
                            <Link 
                              to={`/project/${project.slug}/${block.subPageSlug}`} 
                              onClick={() => sessionStorage.setItem(`projectScroll_${project.slug}`, window.scrollY.toString())}
                              className="block w-full rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#0C0C0C] border border-white/10 relative group shadow-2xl hover:border-white/20 transition-all duration-300 cursor-pointer"
                            >
                              <img src={block.images[0]} alt={block.title} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                            </Link>
                          ) : (
                            <div className="w-full rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#0C0C0C] border border-white/10 relative group cursor-zoom-in shadow-2xl hover:border-white/20 transition-all duration-300" onClick={() => setSelectedImage(block.images![0])}>
                              <img src={block.images[0]} alt={block.title} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                            </div>
                          )
                       )}
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                       {block.title && (
                         block.subPageSlug ? (
                           <Link 
                             to={`/project/${project.slug}/${block.subPageSlug}`} 
                             onClick={() => sessionStorage.setItem(`projectScroll_${project.slug}`, window.scrollY.toString())}
                             className="block w-fit group mb-6"
                           >
                             <h3 className="font-serif italic font-medium text-3xl sm:text-4xl text-white tracking-wide group-hover:text-[#FFD600] transition-colors">{block.title}</h3>
                           </Link>
                         ) : (
                           <h3 className="font-serif italic font-medium text-3xl sm:text-4xl text-white mb-6 tracking-wide">{block.title}</h3>
                         )
                       )}
                       {block.copy && <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg leading-relaxed max-w-xl mb-8">{block.copy}</p>}
                       {block.subPageSlug && (
                         <div>
                           <Link 
                             to={`/project/${project.slug}/${block.subPageSlug}`}
                             onClick={() => sessionStorage.setItem(`projectScroll_${project.slug}`, window.scrollY.toString())}
                             className="inline-flex items-center gap-2 text-[#FFD600] font-mono text-sm uppercase tracking-widest hover:text-white transition-colors group"
                           >
                             View Details
                             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                           </Link>
                         </div>
                       )}
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
                  {/* Sticky Title Column / Centered Title */}
                  {block.title && block.align !== 'center' && (
                    <div className="lg:w-1/4 lg:sticky lg:top-32 shrink-0">
                      <h3 className="font-mono text-[#FFD600] uppercase tracking-widest text-lg sm:text-xl mb-4">
                        {block.title}
                      </h3>
                    </div>
                  )}

                  {/* Content Column */}
                  <div className={`flex flex-col gap-8 w-full ${block.title && block.align !== 'center' ? 'lg:w-3/4' : ''} ${block.align === 'center' ? 'items-center text-center' : ''}`}>
                    {block.title && block.align === 'center' && (
                      <h2 className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-8">
                        {block.title}
                      </h2>
                    )}
                    {/* Block Text Content */}
                    {(block.copy || block.list) && (
                      <div className="w-full">
                        {block.copy && (
                          <p 
                            className={`text-[#D7E2EA]/90 font-light text-base sm:text-lg leading-relaxed whitespace-pre-wrap mb-6 ${block.align === 'center' ? 'mx-auto text-center' : ''}`}
                            dangerouslySetInnerHTML={{ __html: block.copy }}
                          />
                        )}
                        {block.list && block.list.length > 0 && (
                          <ul className="list-disc pl-5 text-[#D7E2EA]/90 font-light text-base sm:text-lg space-y-3 lg:space-y-2">
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
                        <div className={`grid gap-4 sm:gap-6 ${
                          block.imageLayout === 'stacked' ? 'grid-cols-1' : 
                          block.images.length >= 4 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                          block.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 
                          'grid-cols-1 sm:grid-cols-2'
                        }`}>
                          {block.images.map((imgUrl, imgIdx) => (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, margin: "-10%" }}
                              transition={{ duration: 0.6 }}
                              key={imgIdx} 
                              className={`bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[30px] overflow-hidden group flex items-center justify-center ${
                                (block.fullWidthImages && block.fullWidthImages.includes(imgIdx)) || 
                                block.imageLayout === 'stacked' || 
                                block.images!.length === 1 || 
                                (!block.fullWidthImages && block.images!.length % 2 !== 0 && block.images!.length !== 3 && imgIdx === 0) ? 'sm:col-span-2' : ''
                              }`}
                            >
                              {isVideo(imgUrl) ? (
                                <motion.video 
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  transition={{ duration: 0.4 }}
                                  src={imgUrl} 
                                  className="w-full h-full object-cover block cursor-zoom-in" 
                                  onClick={() => setSelectedImage(imgUrl)}
                                  loop
                                  playsInline
                                  onMouseEnter={(e: React.MouseEvent<HTMLVideoElement>) => {
                                    const playPromise = e.currentTarget.play();
                                    if (playPromise !== undefined) {
                                      playPromise.catch(() => {});
                                    }
                                  }}
                                  onMouseLeave={(e: React.MouseEvent<HTMLVideoElement>) => e.currentTarget.pause()}
                                />
                              ) : (
                                <motion.img 
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  transition={{ duration: 0.4 }}
                                  src={imgUrl} 
                                  alt={`${project.name} context image ${idx}-${imgIdx}`} 
                                  className="w-full h-full object-cover block cursor-zoom-in" 
                                  onClick={() => setSelectedImage(imgUrl)}
                                />
                              )}
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
          )}
        </FadeIn>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {isVideo(selectedImage) ? (
              <motion.video 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage} 
                className="w-full h-full object-contain pointer-events-auto max-w-7xl mx-auto"
                autoPlay
                controls
                loop
                playsInline
              />
            ) : (
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage} 
                alt="Fullscreen view" 
                className="w-full h-full object-contain pointer-events-none max-w-7xl mx-auto"
              />
            )}
            
            <button 
              className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white/50 hover:text-white transition-colors p-4 lg:p-2 bg-white/5 lg:bg-transparent rounded-full backdrop-blur-sm lg:backdrop-blur-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};
