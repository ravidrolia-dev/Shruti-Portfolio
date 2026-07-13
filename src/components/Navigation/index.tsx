import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderButton } from './HeaderButton';

export const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active item based on current route
  const getActiveItem = () => {
    if (location.pathname.startsWith('/project')) {
      return 'projects';
    }
    // If we're on the home page, we can use the hash or default to 'about'
    if (location.hash === '#projects') return 'projects';
    if (location.hash === '#contact') return 'contact';
    return 'about';
  };

  const activeItem = getActiveItem();

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
    <nav className="fixed top-0 left-0 w-full p-5 sm:p-6 md:px-12 md:py-6 border-b border-white/10 flex justify-between items-center z-50 bg-[#0C0C0C]/70 backdrop-blur-md">
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
          activeItem={activeItem}
          hoveredItem={hoveredItem}
          onHover={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
          onClick={(e) => handleNavigation(e, '#about')}
        />
        <HeaderButton 
          id="projects" 
          label="Project" 
          href="#projects"
          activeItem={activeItem}
          hoveredItem={hoveredItem}
          onHover={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
          onClick={(e) => handleNavigation(e, '#projects')}
        />
        <HeaderButton 
          id="contact" 
          label="Connect" 
          href="#contact"
          activeItem={activeItem}
          hoveredItem={hoveredItem}
          onHover={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
          onClick={(e) => handleNavigation(e, '#contact')}
        />
      </div>
    </nav>
  );
};
