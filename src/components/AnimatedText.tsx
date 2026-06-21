import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  
  // Calculate total length excluding spaces for accurate progress mapping
  const totalLength = words.join("").length;
  let charIndex = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const characters = word.split("");
        return (
          <span key={i} className="inline-block mr-1 sm:mr-2">
            {characters.map((char, j) => {
              const currentIdx = charIndex++;
              return (
                <Char 
                  key={j} 
                  char={char} 
                  progress={scrollYProgress} 
                  index={currentIdx} 
                  totalLength={totalLength} 
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

const Char = ({ char, progress, index, totalLength }: { char: string, progress: MotionValue<number>, index: number, totalLength: number }) => {
  const start = index / totalLength;
  const end = start + 0.1;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
};
