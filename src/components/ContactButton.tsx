

export const ContactButton = () => {
  return (
    <a 
      href="#contact"
      className="inline-flex items-center justify-center rounded-full text-[#0C0C0C] font-black uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 text-[11px] sm:text-xs md:text-sm outline-none transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
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
