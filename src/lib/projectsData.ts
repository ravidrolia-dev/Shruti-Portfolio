export interface ProjectStat {
  value: string;
  label: string;
}

export interface ContentBlock {
  title?: string;
  copy?: string;
  list?: string[];
  images?: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface CreativeProcess {
  title?: string;
  steps: ProcessStep[];
}

export interface ProjectDetails {
  slug: string;
  num: string;
  client: string;
  name: string;
  shortDescription: string;
  servicesUsed?: string;
  skillsUsed?: string;
  role: string;
  problem?: string;
  approach?: string;
  result?: string;
  stats?: ProjectStat[];
  gallery: string[];
  col1img1: string;
  col1img2: string;
  col2img: string;
  contentBlocks?: ContentBlock[];
  creativeProcess?: CreativeProcess;
  closingQuote?: string;
}

export const projectsData: ProjectDetails[] = [
  {
    slug: "pratilipi",
    num: "01",
    client: "App Marketing & ASO",
    name: "Pratilipi",
    shortDescription: "App store & growth creative for India's largest storytelling platform — 6M+ stories, 12 Indian languages.",
    role: "Marketing Designer, Pratilipi (FULL-TIME · 4.5 YEARS)",
    problem: "Pratilipi needed to grow organic installs across 12 Indian languages and a competitive US romance-fiction market, while keeping creative output high enough to support constant A/B testing.",
    approach: "Redesigned Play Store ASO visuals and listing hierarchy using data-driven decisions. Owned end-to-end creative execution across Meta and Google Ads — story posters, vector illustrations, GIFs, and short-form video. Used AI tools (MidJourney, ChatGPT, Gemini) to accelerate ideation without sacrificing volume.",
    result: "Improved CTR and conversion rate through high-frequency A/B testing, with design owned end-to-end from concept to performance review.",
    stats: [
      { value: "12%", label: "increase in organic app installs" },
      { value: "2,000+", label: "high-scale creatives delivered" },
      { value: "12", label: "Indian languages supported" }
    ],
    gallery: [
      "/images/page-06.jpg",
      "/images/page-07.jpg",
      "/images/page-08.jpg",
      "/images/page-09.jpg",
      "/images/page-10.jpg",
      "/images/page-11.jpg",
      "/images/page-12.jpg"
    ],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    slug: "fitparty",
    num: "02",
    client: "Mobile App Branding",
    name: "FitParty",
    shortDescription: "App store creative for a family fitness-challenge app — badges, streaks, and social step tracking.",
    role: "Freelance Graphic Designer",
    problem: "Needed engaging and competitive visual language for a fitness-challenge app aimed at families.",
    approach: "Designed dynamic badges, streak graphics, and app store creatives to gamify the fitness experience and encourage social sharing.",
    result: "Delivered a fun, gamified identity that enhanced user retention and social step tracking.",
    gallery: [
      "/images/page-13.jpg",
      "/images/page-14.jpg"
    ],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    slug: "f5-refreshment",
    num: "03",
    client: "Brand Identity",
    name: "F5 Refreshment",
    shortDescription: "Brand launch for a tea & snack delivery service — identity, packaging, and print collateral.",
    role: "Freelance Graphic Designer, F5 Refreshment",
    problem: "A new delivery service needed a market-ready identity and launch assets, with COVID-era trust signals — contactless delivery, safety protocols — built directly into the messaging.",
    approach: "Built the full visual system from scratch: logo, landing page, pamphlets, and packaging, maintaining 100% brand consistency across every deliverable in a fast, resource-constrained freelance setting.",
    result: "A complete, launch-ready brand package spanning digital and physical touchpoints — translating business goals into user-facing design without an internal design team.",
    gallery: [
      "/images/page-15.jpg",
      "/images/page-16.jpg",
      "/images/page-17.jpg",
      "/images/page-18.jpg"
    ],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  },
  {
    slug: "feronia-fashion-night",
    num: "04",
    client: "Event Branding",
    name: "Feronia Fashion Night",
    shortDescription: "India's first androgynous fashion show — full brand system across print, digital, and event.",
    role: "Branding, Print & Social — Redo Times Pvt. Ltd.",
    problem: "A landmark event raising awareness on gender equality and LGBTQ inclusivity needed a visual identity strong enough to carry a sensitive message — and flexible enough to work across two cities, multiple sponsors, and press coverage.",
    approach: "Designed the full identity from the ground up: a logo built from two symbolic shapes — a figure representing the goddess of freedom, wings representing the freedom of life — then extended it into a website, Instagram campaign, print invitations, banners, entry passes, and on-site backdrops for both the Jaipur and Goa editions.",
    result: "A cohesive brand across 6+ formats for a first-of-its-kind event, with coverage from Postman News and multiple media partners, and sponsor placements including Radisson Blu.",
    gallery: [
      "/images/page-20.jpg",
      "/images/page-21.jpg",
      "/images/page-30.jpg",
      "/images/page-31.jpg",
      "/images/page-32.jpg",
      "/images/page-33.jpg",
      "/images/page-34.jpg",
      "/images/page-35.jpg",
      "/images/page-36.jpg"
    ],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    slug: "magazine-design",
    num: "05",
    client: "Editorial Design",
    name: "Magazine Design",
    shortDescription: "Layout and art direction for Womanifest, a 90+ page digital lifestyle magazine for women.",
    role: "Freelance Editorial Designer",
    problem: "Needed a clean, engaging layout for a massive 90+ page lifestyle magazine focusing on women's topics.",
    approach: "Spearheaded the editorial layout and typography selection. The layouts prioritize readability while maintaining striking, art-directed visual compositions across food, travel, and fashion sections.",
    result: "Successfully delivered a cohesive and highly readable digital magazine experience.",
    gallery: [
      "/images/page-25.jpg",
      "/images/page-26.jpg",
      "/images/page-27.jpg",
      "/images/page-28.jpg"
    ],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    slug: "Luxury-design",
    num: "06",
    client: "LUxury product",
    name: "Luxury Fragrance Showcase Invite",
    shortDescription: "A premium event invite designed for a private fragrance showcase, combining soft Indian heritage cues, refined typography, product-focused composition, and warm luxury styling.",
    servicesUsed: "Brand & Marketing Collateral · Social Media & Campaign Design · AI-assisted Visual Exploration",
    skillsUsed: "Art Direction · Layout Design · Typography · Visual Design · Image Editing",
    role: "Freelance Editorial Designer",
    // We will clear problem/approach/result because we are using contentBlocks
    gallery: [], // Handled in contentBlocks
    col1img1: "/images/ChatGPT Image Jul 13, 2026, 12_26_35 PM.png", 
    col1img2: "/images/1f6940be-8aea-488e-8183-28f6eb7e56b1.png",
    col2img: "/images/Untitled-1Artboard 1.png", // Hero image
    creativeProcess: {
      title: "OUR CREATIVE PROCESS",
      steps: [
        { id: "01", title: "Challenge", description: "The challenge was to translate The House of Angadi’s heritage-inspired luxury language into a modern visual system without making it feel overly decorative, festive, or cluttered." },
        { id: "02", title: "Approach", description: "Built the visual direction around ivory silk textures, white florals, warm gold accents, restrained heritage cues, editorial typography, and product-led composition." },
        { id: "03", title: "Outcome", description: "A refined invite direction that balances luxury styling, event clarity, and fragrance-led storytelling across mobile, social, and print-style applications." }
      ]
    },
    closingQuote: "Where scent becomes story.",
    contentBlocks: [
      {
        title: "Context",
        copy: "The invite was created for a private fragrance showcase under the “Experiences with The House of Angadi” umbrella, featuring Maison de Fauzdar. The goal was to create a visual direction that felt premium, intimate, and brand-aligned while keeping the fragrance experience at the center.",
        images: ["/images/Untitled-1Artboard 1 copy.jpg"]
      },
      {
        title: "Objective",
        copy: "To design a luxury fragrance showcase invite that felt refined, intimate, and premium while clearly communicating the event details.\n\nThe challenge was to translate The House of Angadi’s heritage-inspired luxury language into a modern visual system without making it feel overly decorative, festive, or cluttered.\n\nDesign goal:\nCreate an invite that feels soft, elegant, product-led, and suitable for a high-end fragrance experience.",
        images: ["/images/ChatGPT Image Jul 13, 2026, 12_26_35 PM.png"]
      },
      {
        title: "Visual Direction",
        copy: "The moodboard focused on quiet Indian luxury — ivory silk, soft florals, heritage details, warm gold accents, editorial typography, and tactile textures. These references helped shape the invite’s calm, premium, and intimate mood.",
        images: ["/images/5c17d31f-4e9e-47ae-b9c5-a35a64c59de6 (1).png"]
      },
      {
        title: "Typography & Visual System",
        copy: "The type direction uses elegant serif typography for the headline, refined spacing for supporting text, and warm muted tones to create a luxury editorial feel. The palette was kept soft and restrained so the fragrance bottle could remain the hero.",
        images: ["/images/df60c48c-abb0-4600-87d7-d51a8561395c.png"]
      },
      {
        title: "Final Invite",
        copy: "The final design uses a vertical hierarchy that moves from host brand to event title, featured fragrance house, story-led tagline, product hero, partner credits, and event details. The composition was designed to be premium but still highly readable for digital sharing.",
        list: [
          "Top: Host brand and event title",
          "Middle: Featured fragrance and tagline",
          "Hero: Perfume bottle with floral styling",
          "Bottom: Partners, date, time, and venue"
        ],
        images: ["/images/Fragrance_Final_2 (1).jpg"]
      },
      {
        title: "Digital & Print Application",
        copy: "The invite was adapted into formats suitable for WhatsApp, mobile viewing, and printed event communication while maintaining the same premium visual language.",
        images: ["/images/1f6940be-8aea-488e-8183-28f6eb7e56b1.png","/images/ChatGPT Image Jul 13, 2026, 12_26_35 PM.png"]
      }
    ]
  }
];
