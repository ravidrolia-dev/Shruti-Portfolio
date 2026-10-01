import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface HoverPopTextProps {
  text: string;
  className?: string;
}

export const HoverPopText: React.FC<HoverPopTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <PopChar key={index} char={char} />
      ))}
    </span>
  );
};

const PopChar = ({ char }: { char: string }) => {
  const [isPopped, setIsPopped] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleHover = () => {
    if (char === ' ') return; // Don't animate spaces
    
    setIsPopped(true);
    
    // Clear any existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Reset after 1 second
    timeoutRef.current = window.setTimeout(() => {
      setIsPopped(false);
    }, 1000);
  };

  // Generate a consistent but random-looking rotation for this character
  // Using charCode so it's the same rotation every time for the same letter
  const rotation = char !== ' ' ? ((char.charCodeAt(0) % 5) - 2) * 5 : 0;

  if (char === ' ') {
    return <span className="inline-block w-[0.3em]">&nbsp;</span>;
  }

  return (
    <motion.span
      onMouseEnter={handleHover}
      className="inline-block cursor-default"
      animate={{
        scale: isPopped ? 1.3 : 1,
        rotate: isPopped ? rotation : 0,
        color: isPopped ? '#ffd600' : 'inherit', // white color when popped
        y: isPopped ? -5 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10
      }}
      style={{
        fontFamily: isPopped ? '"Comic Sans MS", "Comic Sans", cursive' : 'inherit',
        transformOrigin: "bottom center"
      }}
    >
      {char}
    </motion.span>
  );
};
