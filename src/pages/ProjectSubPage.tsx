import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, X, Compass, Lightbulb, Sparkles } from 'lucide-react';
import { projectsData } from '../lib/projectsData';
import type { SubPageSection, ContentBlock } from '../lib/projectsData';

const FadeIn = ({ children, delay = 0, y = 20, className = "" }: { children: React.ReactNode, delay?: number, y?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ProjectSubPage = () => {
  const { id, subId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projectsData.find(p => p.slug === id);
  const block = project?.contentBlocks?.find(b => b.subPageSlug === subId);
  const subData = block?.subPageData;

  useEffect(() => {
    if (!project || !subData) {
      navigate('/');
    }
  }, [project, subData, navigate]);

  if (!project || !subData) return null;

  const renderSections: SubPageSection[] = subData.sections || [];
  const legacySection: SubPageSection[] = subData.contentBlocks && subData.contentBlocks.length > 0 ? [{
    contentHeading: subData.contentHeading,
    contentSubHeading: undefined,
    skillimage: subData.skillimage,
    contentBlocks: subData.contentBlocks
  }] : [];
  const allSections = [...legacySection, ...renderSections];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-transparent text-white pt-24 sm:pt-32 pb-24 relative"
    >
      {/* Background glow for sub-page */}
      <div className="fixed top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFD600]/5 via-[#0C0C0C]/0 to-[#0C0C0C]/0 pointer-events-none" />

      {/* Floating Back Button */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate(`/project/${project.slug}`)}
        className="fixed top-10 lg:top-8 left-4 lg:left-8 z-50 flex items-center gap-3 px-6 lg:px-5 py-3.5 lg:py-2.5 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#FFD600] hover:text-black hover:border-transparent hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-mono text-sm tracking-widest uppercase mt-0.5 font-semibold">Back to Project</span>
      </motion.button>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 mb-8 sm:mb-12">
        <FadeIn delay={0.1} className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-[#D7E2EA]/40">
          <Link to={`/project/${project.slug}`} className="hover:text-[#FFD600] transition-colors">{project.name}</Link>
          <ChevronRight size={14} />
          <span className="text-[#FFD600]">{subData.title}</span>
        </FadeIn>
      </div>

      {/* Sub-page Hero */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 mb-20 lg:mb-32 max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-white mb-12 leading-[1.2] lg:leading-[1.1] tracking-tight">
              {subData.title}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} y={30} className="border-l-2 border-[#FFD600] pl-6 sm:pl-8 py-2 mb-12">
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed tracking-wide">
              {subData.description}
            </p>
          </FadeIn>

          {(subData.role || subData.deliverables || subData.servicesUsed || subData.skillsUsed) && (
            <FadeIn delay={0.3} y={20} className="flex flex-col gap-8 mb-16 max-w-2xl">
              {subData.role && (
                <div>
                  <h4 className="font-mono text-[#FFD600] text-xs sm:text-sm tracking-widest uppercase mb-2">Role:</h4>
                  <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg">{subData.role}</p>
                </div>
              )}
              {subData.deliverables && (
                <div>
                  <h4 className="font-mono text-[#FFD600] text-xs sm:text-sm tracking-widest uppercase mb-2">Deliverables:</h4>
                  <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg">{subData.deliverables}</p>
                </div>
              )}
              {subData.servicesUsed && (
                <div>
                  <h4 className="font-mono text-[#FFD600] text-xs sm:text-sm tracking-widest uppercase mb-2">Services Used:</h4>
                  <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg">{subData.servicesUsed}</p>
                </div>
              )}
              {subData.skillsUsed && (
                <div>
                  <h4 className="font-mono text-[#FFD600] text-xs sm:text-sm tracking-widest uppercase mb-2">Skills Used:</h4>
                  <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg">{subData.skillsUsed}</p>
                </div>
              )}
            </FadeIn>
          )}
        </div>

        {subData.heroImage && (
          <FadeIn delay={0.4} y={30} className="w-full">
            <div className="w-full aspect-[21/9] sm:aspect-[2.5/1] rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 relative group">
              <img 
                src={subData.heroImage} 
                alt={subData.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </FadeIn>
        )}
      </section>

      {allSections.map((section, sIdx) => (
        <div key={sIdx} className="w-full flex flex-col mb-24 sm:mb-32">
          {/* Content Heading */}
          {(section.contentHeading || section.contentSubHeading) && (
            <section className="px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto w-full relative z-10">
              <FadeIn delay={0.2} className="mb-12 sm:mb-16">
                {section.contentHeading && (
                  <h2 className="font-serif italic font-medium text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
                    {section.contentHeading}
                  </h2>
                )}
                {section.contentSubHeading && (
                  <h3 className={`font-mono text-[#FFD600] uppercase tracking-widest text-lg sm:text-xl ${section.contentHeading ? 'mt-4' : ''}`}>
                    {section.contentSubHeading}
                  </h3>
                )}
              </FadeIn>
            </section>
          )}

          {/* Skill Image */}
          {section.skillimage && (
            <section className="px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto w-full relative z-10">
              <FadeIn delay={0.4} y={20} className="w-full mb-16 lg:mb-24 flex justify-center">
                <div className="w-full flex justify-center">
                  <img src={section.skillimage} alt="Skills Overview" className="max-w-full max-h-[80vh] w-auto h-auto rounded-[20px] sm:rounded-[40px]" />
                </div>
              </FadeIn>
            </section>
          )}

          {/* Content Blocks */}
          <section className="px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto w-full relative z-10">
            <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 w-full">
              {section.contentBlocks && section.contentBlocks.map((cblock: ContentBlock, idx: number) => (
            cblock.type === 'process' ? (
              <div key={idx} className="w-full flex flex-col items-center py-12 sm:py-16 bg-[#090909] rounded-[30px] sm:rounded-[40px] px-5 sm:px-8 md:px-12 border border-white/5 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFD600]/5 via-black/0 to-black/0 pointer-events-none" />
                
                {cblock.title && (
                  <div className="flex items-center gap-4 mb-20 text-[#FFD600] font-mono text-xs sm:text-sm tracking-widest uppercase relative z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600]"></span>
                    {cblock.title}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600]"></span>
                  </div>
                )}
                
                {cblock.processSteps && (
                  <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-4 z-10">
                    {/* Connecting horizontal line (desktop only) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-white/10 z-0"></div>
                    
                    {cblock.processSteps.map((step, stepIdx) => (
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
            ) : cblock.type === 'quote' ? (
              <div key={idx} className="w-full flex flex-col items-center justify-center py-16 sm:py-24 mt-8 sm:mt-12 mb-8">
                <div className="w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#FFD600] to-transparent mb-12 opacity-70"></div>
                <h2 className="font-serif italic font-medium text-3xl sm:text-4xl md:text-5xl text-white text-center tracking-wide leading-tight px-4">
                  {cblock.copy}
                </h2>
              </div>
            ) : cblock.type === 'stats' && cblock.stats ? (
              <div key={idx} className="flex flex-wrap gap-8 md:gap-16 py-12 border-y border-white/10 my-8">
                {cblock.stats.map((stat, i) => (
                  <div key={i} className="flex-1 min-w-[140px] sm:min-w-[200px]">
                    <div className="font-black text-4xl sm:text-5xl md:text-6xl text-white mb-2">{stat.value}</div>
                    <div className="font-mono text-sm text-[#D7E2EA]/60 uppercase tracking-widest leading-relaxed">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
                {/* Sticky Title Column */}
                {cblock.title && (
                  <div className="lg:w-1/4 lg:sticky lg:top-32 shrink-0">
                    <h3 className="font-mono text-[#FFD600] uppercase tracking-widest text-lg sm:text-xl mb-4">
                      {cblock.title}
                    </h3>
                  </div>
                )}

                {/* Content Column */}
                <div className={`flex flex-col gap-8 w-full ${cblock.title ? 'lg:w-3/4' : ''} ${cblock.align === 'center' ? 'items-center text-center' : ''}`}>
                  {/* Block Text Content */}
                  {(cblock.copy || cblock.list) && (
                    <div className={`w-full ${cblock.align === 'center' ? 'max-w-3xl' : 'max-w-4xl'}`}>
                      {cblock.copy && (
                        <p className="text-[#D7E2EA]/80 font-light text-lg sm:text-xl leading-[1.8] mb-6">
                          {cblock.copy}
                        </p>
                      )}
                      {cblock.list && cblock.list.length > 0 && (
                        <ul className="list-disc pl-5 text-[#D7E2EA]/90 font-light text-base sm:text-lg space-y-3 lg:space-y-2">
                          {cblock.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Block Images */}
                  {cblock.images && cblock.images.length > 0 && (
                    <div className="w-full flex flex-wrap gap-4 sm:gap-6 items-start">
                      {cblock.images.map((imgUrl, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className="w-auto max-w-full rounded-[20px] lg:rounded-[30px] overflow-hidden relative group cursor-zoom-in shadow-xl"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${subData.title} image ${idx}-${imgIdx}`} 
                            className="w-auto h-auto max-w-full block group-hover:scale-[1.03] transition-transform duration-700" 
                            onClick={() => setSelectedImage(imgUrl)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
            ))}
            </div>
          </section>
        </div>
      ))}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto">
            <img 
              src={selectedImage} 
              alt="Fullscreen view" 
              className="w-full h-full object-contain pointer-events-none"
            />
            
            <button 
              className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white/50 hover:text-white transition-colors p-4 lg:p-2 bg-white/5 lg:bg-transparent rounded-full backdrop-blur-sm lg:backdrop-blur-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};
