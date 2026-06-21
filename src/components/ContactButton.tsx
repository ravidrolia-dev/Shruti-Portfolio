

export const ContactButton = () => {
  return (
    <a 
      href="#contact"
      className="inline-block rounded-full text-[#0C0C0C] font-black uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline-none transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
      style={{
        background: '#FFD600',
        boxShadow: '0px 4px 4px rgba(255, 214, 0, 0.25), inset 4px 4px 12px rgba(255, 255, 255, 0.3)',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      Contact Me
    </a>
  );
};
