import { FadeIn } from '../components/FadeIn';
import MacbookScrollDemo from '../components/macbook-scroll-demo';

const services = [
  {
    num: "01",
    title: "App Store & ASO Visuals",
    desc: "Play Store screenshots, feature graphics, app listing creatives, and product communication visuals built for clarity and discovery."
  },
  {
    num: "02",
    title: "Performance Marketing Creatives",
    desc: "Meta ads, Google ads, campaign banners, ad variations, and testing-focused creatives designed for performance campaigns."
  },
  {
    num: "03",
    title: "Social Media & Campaign Design",
    desc: "Instagram posts, stories, launch creatives, festival campaigns, and content-led visual systems for digital platforms."
  },
  {
    num: "04",
    title: "Brand & Marketing Collateral",
    desc: "Menus, brochures, business cards, letterheads, posters, packaging, and offline marketing assets for consistent brand communication."
  },
  {
    num: "05",
    title: "AI-assisted Visual Exploration",
    desc: "AI-generated images, concept visuals, campaign directions, and video/image experiments refined through design tools."
  },
  {
    num: "06",
    title: "Video & Motion Creatives",
    desc: "Short-form video ads, GIFs, reels-style edits, and motion-led campaign assets for social and performance channels."
  }
];

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn delay={0} y={30} className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">

          <div className="flex flex-col flex-1 lg:w-[60%] w-full relative z-30">
            {services.map((service, i) => (
              <FadeIn
                key={service.num}
                delay={i * 0.1}
                y={20}
                className={`flex flex-col sm:flex-row sm:items-start py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${i === 0 ? 'border-t' : ''}`}
              >
                <div className="text-[#0C0C0C] font-black leading-none sm:w-1/3 mb-4 sm:mb-0 text-[clamp(2.5rem,8vw,100px)]">
                  {service.num}
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center">
                  <h3 className="font-medium uppercase text-[#0C0C0C] mb-2 sm:mb-3 text-[clamp(1rem,2vw,1.8rem)]">
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-xl text-[clamp(0.85rem,1.4vw,1.15rem)] opacity-60 text-[#0C0C0C]">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Macbook Scroll Demo */}
          <div className="w-full lg:w-[40%] flex justify-center mt-10 lg:mt-0 relative z-20">
            <FadeIn delay={0.2} y={30} className="w-full flex justify-center">
              <div className="w-full transform scale-90 sm:scale-75 lg:scale-[0.65] xl:scale-[0.8] origin-top opacity-90 hover:opacity-100 transition-opacity duration-500">
                <MacbookScrollDemo />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
