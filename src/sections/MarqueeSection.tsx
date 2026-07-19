import { useEffect, useRef } from 'react';

const images = [
  "/images/magazine/d118bae9-1d30-4285-8411-0af5fcf64301.png",
  "/images/pratilipi/2029e253-9e3b-407c-ad8c-37797373be9a.png",
  "/images/textile/0d660913-d621-43a8-addc-e7049016e369.png",
  "/images/f5/2359e120-b2a8-4f01-9f40-fd85827bdf37.png",
  "/images/fitparty/b92379f1-a5d1-46e3-9ed4-48726dfec11c.png",
  "/images/luxury/ChatGPT Image Jul 13, 2026, 12_26_35 PM.png",
  "/images/pratilipi/40cebfb7-2150-4196-a990-2a5baf4e6d78.png",
  "/images/f5/fd0cb5b6-34d3-48a1-a5ac-ae4852db3409.png"
];

const row1 = [...images.slice(0, 4), ...images.slice(0, 4), ...images.slice(0, 4)];
const row2 = [...images.slice(4), ...images.slice(4), ...images.slice(4)];

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetOffset = 0;
    let currentOffset = 0;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      
      targetOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
    };

    const update = () => {
      // Smooth interpolation
      currentOffset += (targetOffset - currentOffset) * 0.1;

      if (row1Ref.current && row2Ref.current) {
        // Shift both rows left initially so we start in the middle of the repeating image sequence
        row1Ref.current.style.transform = `translate3d(${currentOffset - 1400}px, 0, 0)`;
        row2Ref.current.style.transform = `translate3d(${-currentOffset - 1400}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    update(); // start loop

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-transparent pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="flex gap-3 will-change-transform w-max">
          {row1.map((src, i) => (
            <img key={i} src={src} loading="lazy" alt="marquee 1" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
          ))}
        </div>
        <div ref={row2Ref} className="flex gap-3 will-change-transform w-max">
          {row2.map((src, i) => (
            <img key={i} src={src} loading="lazy" alt="marquee 2" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
};
