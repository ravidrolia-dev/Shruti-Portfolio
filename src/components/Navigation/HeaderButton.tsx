import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle1, Circle2 } from './Decorations';
import { HoverDecoration } from './HoverDecoration';

interface HeaderButtonProps {
  id: string;
  label: string;
  href: string;
  activeItem: string;
  hoveredItem: string | null;
  onHover: (id: string) => void;
  onLeave: () => void;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  id,
  label,
  href,
  activeItem,
  hoveredItem,
  onHover,
  onLeave,
  onClick
}) => {
  const isHovered = hoveredItem === id;

  // The Framer component uses Gochi Hand font for the text
  return (
    <div 
      className="relative flex flex-col items-center justify-center px-6 py-4 cursor-pointer"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onLeave}
    >
      <a 
        href={href}
        onClick={onClick}
        className="relative z-10 text-[22px] text-[#F2E3CF] hover:text-[#FFD600] transition-colors font-['Gochi_Hand',_sans-serif] tracking-wider outline-none"
        style={{ fontFamily: '"Gochi Hand", sans-serif' }}
      >
        {label}
      </a>

      {/* Decorative SVGs on Hover */}
      <AnimatePresence>
        {isHovered && id === 'about' && (
          <motion.div className="absolute inset-0 z-0 flex items-center justify-center scale-150 pointer-events-none">
            <Circle1 className="w-full h-full text-[#FFD600]" />
          </motion.div>
        )}
        {isHovered && id === 'projects' && (
          <motion.div className="absolute inset-0 z-0 flex items-center justify-center scale-125 pointer-events-none">
            <Circle2 className="w-full h-full text-[#FFD600]" />
          </motion.div>
        )}
        {isHovered && id === 'contact' && (
          <motion.div className="absolute inset-0 z-0 flex items-center justify-center scale-110 pointer-events-none">
            <Circle1 className="w-full h-full text-[#FFD600]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Invisible bridge for hover hit-area so mouse doesn't leave when traveling to distant absolute icons */}
      {isHovered && id === 'contact' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[150px] h-[220px] bg-transparent z-[-1]" />
      )}

      <HoverDecoration id={id} isHovered={isHovered} />
      
    </div>
  );
};
