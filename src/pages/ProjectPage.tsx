import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { projectsData } from '../lib/projectsData';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Compass, Lightbulb, Sparkles, Target } from 'lucide-react';

export const ProjectPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const project = projectsData.find(p => p.slug === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="min-h-screen relative z-10 bg-transparent text-[#D7E2EA]">
      {/* Floating Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-24 left-5 sm:left-8 md:left-12 z-40 flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#D7E2EA] bg-[#0C0C0C]/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full hover:text-[#FFD600] transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </button>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] sm:h-[90vh] flex items-center justify-center overflow-hidden mb-24">
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/80 via-[#0C0C0C]/30 to-[#0C0C0C] z-10" />
          <img src={project.col2img} alt={project.name} className="w-full h-full object-cover opacity-60" />
        </motion.div>

        {/* Hero Text Content */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-20 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto w-full text-center mt-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#FFD600] font-mono uppercase tracking-[0.2em] text-xs sm:text-sm block mb-6"
          >
            {project.client}
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-[clamp(3.5rem,8vw,120px)] leading-[0.9] tracking-tight mb-8 text-white drop-shadow-2xl"
          >
            {project.name}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-mono text-xs sm:text-sm text-white/50 tracking-widest uppercase"
          >
            {project.role}
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="px-5 sm:px-8 md:px-12 pb-24 max-w-5xl mx-auto">
        <FadeIn delay={0.3} y={30} className="prose prose-invert prose-lg sm:prose-xl max-w-none">
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
            <div className="mb-16">
              <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-1">Skills Used:</h4>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base">{project.skillsUsed}</p>
            </div>
          )}

          {/* Creative Process Timeline */}
          {project.creativeProcess && (
            <div className="w-full max-w-6xl mx-auto mb-24 md:mb-32 relative py-12 px-6 sm:px-12 bg-[#0C0C0C]/40 backdrop-blur-md border border-white/5 rounded-[40px] shadow-2xl">
              <h3 className="text-center font-mono text-[#FFD600] uppercase tracking-widest text-xs sm:text-sm mb-16 flex items-center justify-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#FFD600]/30" />
                {project.creativeProcess.title || "Our Creative Process"}
                <span className="w-2 h-2 rounded-full bg-[#FFD600]/30" />
              </h3>

              <div className="relative">
                {/* Horizontal Connecting Line */}
                <div 
                  className="absolute top-[24px] h-[1px] bg-white/10 hidden md:block" 
                  style={{ left: `${100 / (2 * project.creativeProcess.steps.length)}%`, right: `${100 / (2 * project.creativeProcess.steps.length)}%` }}
                />

                <div className={`grid grid-cols-1 ${project.creativeProcess.steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-12 md:gap-6 relative z-10`}>
                  {project.creativeProcess.steps.map((step, idx) => {
                    const ProcessIcons = [Compass, Lightbulb, Sparkles, Target];
                    const Icon = ProcessIcons[idx % ProcessIcons.length];
                    
                    return (
                      <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                        className="relative flex flex-col items-center text-center group"
                      >
                        {/* Step Number Circle */}
                        <div className="w-12 h-12 rounded-full bg-[#0F0F0F] border border-[#FFD600]/30 text-[#D7E2EA] flex items-center justify-center font-serif text-lg z-10 mb-6 shadow-[0_0_15px_rgba(255,214,0,0.1)] group-hover:bg-[#FFD600]/10 transition-colors duration-500">
                          {step.id}
                        </div>

                        {/* Content */}
                        <h4 className="font-serif italic text-white text-xl sm:text-2xl mb-3">{step.title}</h4>
                        <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base leading-relaxed px-2 flex-grow mb-6">
                          {step.description}
                        </p>

                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD600]/60 group-hover:text-[#FFD600] group-hover:scale-110 transition-all duration-300">
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {project.contentBlocks && project.contentBlocks.length > 0 ? (
            <div className="flex flex-col gap-24 sm:gap-32 md:gap-40">
              {project.contentBlocks.map((block, idx) => {
                const hasText = block.title || block.copy || block.list;
                const hasImages = block.images && block.images.length > 0;
                
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col ${hasText && hasImages ? (idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse') : ''} items-center gap-12 md:gap-0 relative`}
                  >
                    {/* Block Text Content */}
                    {hasText && (
                      <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0, ease: [0.16, 1, 0.3, 1] }}
                        className={`w-full ${hasImages ? 'md:w-[40%] relative z-20' : 'max-w-3xl mx-auto text-center'} ${hasText && hasImages ? (idx % 2 === 0 ? 'md:-mr-12 md:pr-4' : 'md:-ml-12 md:pl-4') : ''}`}
                      >
                        <div className={`${hasImages ? 'bg-[#0C0C0C]/80 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[30px] shadow-2xl' : 'py-4'}`}>
                          {block.title && (
                            <h3 className={`font-serif italic text-[#FFD600] text-3xl sm:text-4xl md:text-4xl mb-6 ${!hasImages ? 'mx-auto' : ''}`}>
                              {block.title}
                            </h3>
                          )}
                          {block.copy && (
                            <p className={`text-[#D7E2EA]/80 font-light text-base sm:text-lg leading-relaxed whitespace-pre-wrap mb-6 ${!hasImages ? 'mx-auto max-w-2xl' : ''}`}>
                              {block.copy}
                            </p>
                          )}
                          {block.list && block.list.length > 0 && (
                            <ul className={`list-none pl-0 text-[#D7E2EA]/80 font-light text-base sm:text-lg space-y-4 border-l border-white/20 ml-4 pl-6 ${!hasImages ? 'mx-auto text-left max-w-md' : ''}`}>
                              {block.list.map((item, i) => (
                                <li key={i} className="relative before:content-[''] before:absolute before:-left-[29px] before:top-[10px] before:w-2 before:h-2 before:rounded-full before:bg-[#FFD600]">{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Block Images */}
                    {hasImages && (
                      <div className={`w-full ${hasText ? 'md:w-[65%] relative z-10' : 'max-w-5xl mx-auto'}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                          {block.images!.map((imgUrl, imgIdx) => (
                            <motion.div 
                              key={imgIdx} 
                              initial={{ opacity: 0, y: 40, scale: 0.95 }}
                              whileInView={{ opacity: 1, y: 0, scale: 1 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: imgIdx * 0.15 }}
                              className={`bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer ${imgIdx % 3 === 0 || block.images!.length === 1 ? 'sm:col-span-2' : ''}`}
                              onClick={() => setSelectedImage(imgUrl)}
                            >
                              <img src={imgUrl} alt={`${project.name} context image ${idx}-${imgIdx}`} className="w-full h-auto block hover:scale-105 transition-transform duration-700 ease-out" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            // Legacy Layout Fallback
            <>
              {/* First Dynamic Gallery Image */}
              {project.gallery && project.gallery.length > 0 && (
                <div 
                  className="w-full max-w-4xl mx-auto mb-16 bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[30px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(project.gallery[0])}
                >
                  <img src={project.gallery[0]} alt={`${project.name} main showcase`} className="w-full h-auto block hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {project.problem && (
                  <div>
                    <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-sm mb-4">Challenge</h4>
                    <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-sm mb-4">Approach</h4>
                    <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                )}
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
                      <div 
                        key={idx} 
                        className={`bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[30px] overflow-hidden cursor-pointer ${idx % 3 === 0 ? 'sm:col-span-2' : ''}`}
                        onClick={() => setSelectedImage(imgUrl)}
                      >
                        <img src={imgUrl} alt={`${project.name} gallery image ${idx + 2}`} className="w-full h-auto block hover:scale-105 transition-transform duration-700 ease-out" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </FadeIn>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
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
  );
};
