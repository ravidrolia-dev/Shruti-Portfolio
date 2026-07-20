import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import TrueFocus from '../components/TrueFocus';

const paragraphs = [
  "I design creatives that don’t just look good — they perform.",
  "I’m Shruti Drolia, a marketing designer with 4.5 years of experience creating high-volume digital creatives for app growth, paid ads, ASO, and brand campaigns.",
  "I have worked closely with growth and marketing teams to design Play Store visuals, Meta and Google ad creatives, story posters, GIFs, short-form videos, and campaign assets — delivering around 500 creatives monthly across multiple formats and campaign needs.",
  "My work contributed to a 12% increase in organic app installs through ASO visual redesign and listing hierarchy improvements.",
  "I enjoy working in collaborative teams where design, marketing, and performance goals come together. I like building visuals that are fast, scalable, brand-aware, and performance-focused — designed not just to look good, but to communicate clearly and drive action."
];

import {
  IconBrandAdobePhotoshop,
  IconBrandAdobeIllustrator,
  IconBrandAdobePremiere,
  IconPalette,
  IconBrandOpenai,
  IconSparkles,
  IconWand,
  IconLayout,
  IconTypography,
  IconFingerprint,
  IconVector,
  IconSocial,
  IconPrinter,
  IconAppWindow,
  IconChartLine,
  IconAd,
  IconSpeakerphone,
  IconFlask,
  IconStack2,
  IconDatabase
} from '@tabler/icons-react';

const skillCategories = [
  {
    title: "TOOLS",
    skills: [
      { name: "Photoshop", icon: <IconBrandAdobePhotoshop size={16} /> },
      { name: "Illustrator", icon: <IconBrandAdobeIllustrator size={16} /> },
      { name: "Premiere Pro", icon: <IconBrandAdobePremiere size={16} /> },
      { name: "Canva", icon: <IconPalette size={16} /> },
      { name: "Midjourney", icon: <IconWand size={16} /> },
      { name: "ChatGPT", icon: <IconBrandOpenai size={16} /> },
      { name: "Gemini", icon: <IconSparkles size={16} /> }
    ]
  },
  {
    title: "DESIGN SKILLS",
    skills: [
      { name: "Layout Design", icon: <IconLayout size={16} /> },
      { name: "Typography", icon: <IconTypography size={16} /> },
      { name: "Brand Identity", icon: <IconFingerprint size={16} /> },
      { name: "Vector Illustration", icon: <IconVector size={16} /> },
      { name: "Social Media Design", icon: <IconSocial size={16} /> },
      { name: "Print Collateral", icon: <IconPrinter size={16} /> }
    ]
  },
  {
    title: "GROWTH & MARKETING",
    skills: [
      { name: "ASO Visual Design", icon: <IconAppWindow size={16} /> },
      { name: "Performance Creatives", icon: <IconChartLine size={16} /> },
      { name: "Meta & Google Ads", icon: <IconAd size={16} /> },
      { name: "Campaign Design", icon: <IconSpeakerphone size={16} /> },
      { name: "Creative A/B Testing", icon: <IconFlask size={16} /> },
      { name: "High-volume Creative Execution", icon: <IconStack2 size={16} /> },
      { name: "Data-Driven Design", icon: <IconDatabase size={16} /> }
    ]
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-transparent">
      <div className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pt-32 pb-20 mt-16 sm:mt-24 md:mt-32">
        
        <FadeIn delay={0} y={0} className="mb-12 sm:mb-16 md:mb-20 text-[#D7E2EA]">
          <TrueFocus
            sentence="About Me"
            manualMode={false}
            blurAmount={4}
            borderColor="#FFD600"
            glowColor="rgba(255, 214, 0, 0.6)"
            animationDuration={1.2}
            pauseBetweenAnimations={0.2}
          />
        </FadeIn>

        <FadeIn delay={0.2} y={20} className="w-full max-w-4xl flex flex-col gap-6 mb-20 sm:mb-24 md:mb-32">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,1.5vw,1.35rem)]">
              {p}
            </p>
          ))}
        </FadeIn>

        {/* Visual Skills Block */}
        <FadeIn delay={0.3} y={20} className="flex flex-col w-full max-w-6xl mb-16 sm:mb-20 md:mb-24 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col w-full">
              <div className="flex items-center justify-center mb-5">
                <h3 className="text-[#FFD600] text-xs sm:text-sm uppercase tracking-[0.15em] font-medium whitespace-nowrap text-center">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-[#161616] text-[#D7E2EA] font-semibold text-xs sm:text-sm hover:border-[#FFD600]/30 hover:bg-[#FFD600]/10 transition-all cursor-default"
                  >
                    <span className="text-white/50 group-hover:text-[#FFD600] transition-colors flex items-center justify-center">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          <a
            href="/Shruti_Drolia.pdf"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full text-[#FFD600] font-black uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 text-[11px] sm:text-xs md:text-sm outline-none transition-all hover:bg-[#FFD600] hover:text-[#0C0C0C] active:scale-95 whitespace-nowrap border-2 border-[#FFD600]"
          >
            Resume
          </a>
        </FadeIn>
      </div>

    </section>
  );
};
