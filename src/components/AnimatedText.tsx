import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  progress?: MotionValue<number>;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const activeProgress = progress || scrollYProgress;

  const paragraphs = Array.isArray(text) ? text : [text];
  
  // Calculate total length excluding spaces for accurate progress mapping
  const totalLength = paragraphs.join("").replace(/\s/g, "").length;
  let charIndex = 0;

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      {paragraphs.map((para, pIndex) => {
        const words = para.split(" ");
        return (
          <p key={pIndex} className={className}>
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
                        progress={activeProgress} 
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
      })}
    </div>
  );
};

const Char = ({ char, progress, index, totalLength }: { char: string, progress: MotionValue<number>, index: number, totalLength: number }) => {
  const start = index / totalLength;
  const end = start + (3 / totalLength); // Fade over 3 characters distance instead of 10% of total
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
