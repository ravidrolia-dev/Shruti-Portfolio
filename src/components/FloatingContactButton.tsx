import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    } else {
      setIsVisible(true);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, [location.pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      sessionStorage.removeItem('homeScrollPos');
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'instant' });
        }
      }, 100);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          href="/#contact"
          onClick={handleClick}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] flex items-center gap-2 rounded-full text-[#0C0C0C] font-black uppercase tracking-widest px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm outline-none transition-all hover:scale-105 active:scale-95 shadow-xl group cursor-pointer"
          style={{
            background: '#FFD600',
            boxShadow: '0px 8px 16px rgba(255, 214, 0, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.4)',
            outline: '2px solid white',
            outlineOffset: '-2px'
          }}
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline-block">Contact Me</span>
          <span className="inline-block sm:hidden">Contact</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
