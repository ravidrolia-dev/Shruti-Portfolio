
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: "01",
    title: "Marketing Design",
    desc: "Creation of highly engaging and conversion-focused visuals for multi-channel marketing efforts."
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "03",
    title: "App Store Optimization",
    desc: "Designing compelling app icons, screenshots, and promo graphics to maximize conversion and downloads."
  },
  {
    num: "04",
    title: "Social Media Campaigns",
    desc: "Dynamic and static creatives tailored for Meta Ads, Google Ads, and organic social media growth."
  },
  {
    num: "05",
    title: "AI Assisted Creative Design",
    desc: "Leveraging tools like Midjourney and Gemini to rapidly ideate and generate cutting-edge visual concepts."
  }
];

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30} className="mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn 
              key={service.num} 
              delay={i * 0.1} 
              y={20}
              className={`flex flex-col md:flex-row md:items-start py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${i === 0 ? 'border-t' : ''}`}
            >
              <div className="text-[#0C0C0C] font-black leading-none md:w-1/3 mb-4 md:mb-0 text-[clamp(3rem,10vw,140px)]">
                {service.num}
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <h3 className="font-medium uppercase text-[#0C0C0C] mb-2 sm:mb-3 text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60 text-[#0C0C0C]">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
