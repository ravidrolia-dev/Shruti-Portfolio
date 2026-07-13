import { motion, type Transition } from 'framer-motion';

const transition: Transition = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" };

export const Circle1 = ({ className }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 95 43" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <motion.path
        d="M 81.49 16.931 C 81.49 1.676 14.701 -11.069 1.021 14.985 C -12.659 41.038 116.452 46.71 69.49 8.931"
        stroke="#f4e0cd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={transition}
        transform="translate(7.01 3.931)"
      />
    </svg>
  );
};

export const Circle2 = ({ className }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 95 43" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <motion.path
        d="M 86.759 4.519 C 80.965 -2.317 -5.485 -4.757 0.275 22.178 C 3.425 36.908 42.214 39.876 66.46 31.45 C 101.924 19.124 86.56 3.488 67.822 1.483"
        stroke="#f4e0cd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={transition}
        transform="translate(3.837 4.568)"
      />
    </svg>
  );
};

export const AnimatedUnderline = ({ className }: { className?: string }) => {
  return (
    <motion.div
      layoutId="active-nav-underline"
      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD600] ${className || ''}`}
      transition={{ bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }}
      style={{ borderRadius: 2 }}
    />
  );
};
