import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderButton } from './HeaderButton';

export const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/' && href.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(href.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (href.startsWith('#')) {
      const el = document.getElementById(href.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-6 md:px-10 flex justify-between items-center z-50 bg-transparent">
      <div 
        className="text-[#FFD600] font-black tracking-widest uppercase cursor-pointer"
        onClick={() => navigate('/')}
      >
        Portfolio
      </div>
      
      <div className="relative flex items-center gap-6 sm:gap-16 md:gap-24 z-20">
        <HeaderButton 
          id="about" 
          label="About" 
          href="#about"
          hoveredItem={hoveredItem}
          onHover={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
          onClick={(e) => handleNavigation(e, '#about')}
        />
        <HeaderButton 
          id="projects" 
          label="Project" 
          href="#projects"
          hoveredItem={hoveredItem}
          onHover={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
          onClick={(e) => handleNavigation(e, '#projects')}
        />
        <HeaderButton 
          id="contact" 
          label="Connect" 
          href="#contact"
          hoveredItem={hoveredItem}
          onHover={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
          onClick={(e) => handleNavigation(e, '#contact')}
        />
      </div>
    </nav>
  );
};
