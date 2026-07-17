import { motion, AnimatePresence } from 'framer-motion';

interface HoverDecorationProps {
  id: string;
  isHovered: boolean;
}

const aboutImages = [
  {
    src: '/navbar/nXkHodrIJijHtkJK9tj0meJSo.png', // Navie1
    className: 'absolute w-[31px] aspect-[0.925]',
    targetX:  -85, targetY: -15
  },
  {
    src: '/navbar/Js58O0WeXiEecnME3wucn8P1Lg.png', // Navie2
    className: 'absolute w-[31px] aspect-[1.26]',
    targetX: -45, targetY: 40
  },
  {
    src: '/navbar/so1wZgMvJhjB3P40EWwFAbrMls.png', // Navie3
    className: 'absolute w-[27px] aspect-[1.037]',
    targetX: 90, targetY: 5
  }
];

const workImages = [
  {
    src: '/navbar/5kwx3ViaHeW5I6KliMS9bsYa0U.png', // Navie4
    className: 'absolute w-[55px] aspect-[0.64]',
    targetX: 100, targetY: 20 
  },
  {
    src: '/navbar/klvZtuhjeLBrHRuCnpOubsPLgI.png', // Navie5
    className: 'absolute w-[15px] aspect-[0.9]',
    targetX: 140, targetY: 25
  }
];

const connectImages = [
  {
    src: '/navbar/sQTVrMmvyy0ZAP9a11y78iBE0o.png', // LinkedIn
    className: 'absolute w-[30px] aspect-square',
    targetX: 25, targetY: 55,
    href: 'https://www.linkedin.com/in/shruti-drolia-2162b913a/'
  },
  {
    src: '/navbar/email.png', // Email
    className: 'absolute w-[30px] aspect-square',
    targetX: 40, targetY: 105,
    href: 'mailto:shruti06drolia@gmail.com'
  }
];

export const HoverDecoration: React.FC<HoverDecorationProps> = ({ id, isHovered }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <AnimatePresence>
        {isHovered && id === 'about' && aboutImages.map((img, idx) => (
          <motion.img
            key={`about-${idx}`}
            src={img.src}
            className={`${img.className} top-1/2 left-1/2`}
            initial={{ opacity: 0, scale: 0.2, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: `calc(-50% + ${img.targetX}px)`, y: `calc(-50% + ${img.targetY}px)` }}
            exit={{ opacity: 0, scale: 0.2, x: "-50%", y: "-50%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5, delay: idx * 0.05 }}
            alt=""
            aria-hidden="true"
          />
        ))}

        {isHovered && id === 'projects' && workImages.map((img, idx) => (
          <motion.img
            key={`work-${idx}`}
            src={img.src}
            className={`${img.className} top-1/2 left-1/2`}
            initial={{ opacity: 0, scale: 0.2, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: `calc(-50% + ${img.targetX}px)`, y: `calc(-50% + ${img.targetY}px)` }}
            exit={{ opacity: 0, scale: 0.2, x: "-50%", y: "-50%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5, delay: idx * 0.05 }}
            alt=""
            aria-hidden="true"
          />
        ))}

        {isHovered && id === 'contact' && connectImages.map((img, idx) => (
          <motion.a
            key={`contact-${idx}`}
            href={img.href}
            target="_blank"
            rel="noreferrer"
            className={`${img.className} top-1/2 left-1/2 pointer-events-auto`}
            initial={{ opacity: 0, scale: 0.2, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: `calc(-50% + ${img.targetX}px)`, y: `calc(-50% + ${img.targetY}px)` }}
            exit={{ opacity: 0, scale: 0.2, x: "-50%", y: "-50%" }}
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5, delay: idx * 0.05 }}
          >
            <img src={img.src} alt="" aria-hidden="true" className="w-full h-full" />
          </motion.a>
        ))}
      </AnimatePresence>
    </div>
  );
};
