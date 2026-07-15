import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const UnfoldingImage = ({ 
  mainImage, 
  hoverImage 
}: { 
  mainImage?: string; 
  hoverImage?: string; 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload the sound effect. 
    // The user needs to add this file to their public/sounds folder.
    audioRef.current = new Audio('/sounds/paper-unfold.mp3');
    audioRef.current.volume = 0.6; // Reduced volume for a more subtle, premium feel
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (audioRef.current && hoverImage) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative w-full perspective-[2000px] py-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full aspect-[4/3] sm:aspect-[21/9] relative">
        
        {/* Main Image (Invitation) */}
        <motion.div 
          className="absolute left-0 top-0 z-20 w-[65%] h-full rounded-[10px] sm:rounded-[20px] shadow-2xl overflow-hidden bg-[#0C0C0C] origin-left"
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        >
          {mainImage ? (
            <img src={mainImage} alt="Invitation" className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm uppercase tracking-widest text-center px-4">
              Add main image
            </div>
          )}
        </motion.div>

        {/* Hover Image (Context Note / Paper) */}
        {hoverImage !== undefined && (
          <motion.div 
            className="absolute top-[10%] left-[7%] w-[45%] h-[80%] z-10 origin-left"
            initial={false}
            animate={
              isHovered 
                ? { 
                    x: '128%', // 1.28 * 45 = 57.6% of parent. 5% + 57.6% = 62.6%. Overlap with 65% main image is ~2.4%.
                    scaleX: 1, 
                    rotateY: 0, 
                    opacity: 1,
                    filter: 'drop-shadow(0px 25px 30px rgba(0,0,0,0.3))'
                  } 
                : { 
                    x: '20%', // Tucked behind
                    scaleX: 0.15, 
                    rotateY: -90, 
                    opacity: 0,
                    filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
                  }
            }
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{ 
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* The transparent PNG will naturally provide the torn edge texture */}
            {hoverImage !== "" ? (
              <img src={hoverImage} alt="Context Note" className="w-full h-full object-contain object-left" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#f4ebd8]/10 text-white/20 font-mono text-sm uppercase tracking-widest text-center px-4 rounded-[10px]">
                Add hover image
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
