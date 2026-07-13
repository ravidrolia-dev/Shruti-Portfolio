import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { projectsData } from '../lib/projectsData';

export const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <section className="px-5 sm:px-8 md:px-12 pt-32 pb-16 sm:pt-40 sm:pb-24 max-w-7xl mx-auto">
        <FadeIn delay={0.1} y={30}>
          <span className="text-[#FFD600] font-bold uppercase tracking-widest text-sm sm:text-base block mb-4">
            {project.client}
          </span>
          <h1 className="font-black uppercase text-[clamp(3rem,8vw,100px)] leading-[0.9] tracking-tight mb-8">
            {project.name}
          </h1>
          <div className="font-mono text-sm sm:text-base text-white/50 tracking-widest uppercase mb-12">
            {project.role}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="w-full aspect-video bg-white/5 border border-white/10 rounded-[30px] sm:rounded-[40px] overflow-hidden">
          <img src={project.col2img} alt={project.name} className="w-full h-full object-cover" />
        </FadeIn>
      </section>

      {/* Content Section */}
      <section className="px-5 sm:px-8 md:px-12 pb-24 max-w-5xl mx-auto">
        <FadeIn delay={0.3} y={30} className="prose prose-invert prose-lg sm:prose-xl max-w-none">
          <p className="text-[#D7E2EA] font-medium text-xl sm:text-2xl leading-relaxed mb-16 border-l-2 border-[#FFD600] pl-6">
            {project.shortDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {project.problem && (
              <div>
                <h4 className="font-mono text-[#FFD600] uppercase tracking-widest text-sm mb-4">Problem</h4>
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

          {/* Dynamic Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-16">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className={`bg-white/5 border border-white/10 rounded-[30px] overflow-hidden ${idx % 3 === 0 ? 'sm:col-span-2 aspect-video' : 'aspect-square'}`}>
                  <img src={imgUrl} alt={`${project.name} gallery image ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </section>
    </div>
  );
};
