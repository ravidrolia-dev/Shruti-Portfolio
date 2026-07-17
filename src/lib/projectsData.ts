export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  copy: string;
}

export interface SubPageData {
  title: string;
  description: string;
  role?: string;
  deliverables?: string;
  servicesUsed?: string;
  skillsUsed?: string;
  heroImage?: string;
  contentBlocks: ContentBlock[];
}

export interface ContentBlock {
  type?: 'default' | 'process' | 'quote' | 'stats' | 'zigzag';
  align?: 'left' | 'center';
  title?: string;
  copy?: string;
  list?: string[];
  images?: string[];
  processSteps?: ProcessStep[];
  stats?: ProjectStat[];
  subPageSlug?: string;
  subPageData?: SubPageData;
}

export interface ProjectDetails {
  slug: string;
  num: string;
  client: string;
  name: string;
  shortDescription: string;
  servicesUsed?: string;
  skillsUsed?: string;
  skillsImage?: string;
  skillsVideo?: string;
  introVideo?: string;
  role: string;
  roleDetails?: string;
  deliverables?: string;
  problem?: string;
  approach?: string;
  result?: string;
  stats?: ProjectStat[];
  gallery: string[];
  col1img1: string;
  col1img2: string;
  col2img: string;
  contentBlocks?: ContentBlock[];
}

export const projectsData: ProjectDetails[] = [
  {
    slug: "pratilipi",
    num: "01",
    client: "App Marketing & ASO",
    name: "Pratilipi — Marketing Design Across Platforms",
    shortDescription: "Pratilipi is a digital storytelling platform that connects readers and writers across multiple languages and content formats.",
    role: "Marketing Designer",
    roleDetails: "Pratilipi (FULL-TIME · 4.5 YEARS)",
    skillsImage: "/images/page-06.jpg",
    gallery: [],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2img: "/images/pratilipi/1bc65d71-691c-4577-94a6-c60bb92632f8.jpg.jpeg",
    contentBlocks: [
      {
        type: "stats",
        stats: [
          { value: "12%", label: "increase in organic app installs" },
          { value: "2,000+", label: "high-scale creatives delivered" },
          { value: "12", label: "Indian languages supported" }
        ]
      },
      {
        type: "zigzag",
        title: "Performance & Paid Advertising",
        copy: "Acquisition-focused campaigns created across Meta, Google and paid media, including static ads, video creatives, market adaptations, A/B tests and AI-assisted visual development.",
        images: ["/images/page-07.jpg"],
        subPageSlug: "performance-advertising",
        subPageData: {
          title: "Performance & Paid Advertising",
          description: "A deep dive into acquisition-focused campaigns.",
          deliverables: "App Store Screenshot Creatives",
          servicesUsed: "App Store & ASO Visuals",
          skillsUsed: "Layout Design · Visual Design · Typography · ASO Visual Design · Product Communication",
          contentBlocks: [
            {
              type: "process",
              title: "The Project Journey",
              processSteps: [
                {
                  title: "Challenge",
                  copy: "A new delivery service needed a market-ready identity and launch assets, with COVID-era trust signals — contactless delivery, safety protocols — built directly into the messaging."
                },
                {
                  title: "Approach",
                  copy: "Built the full visual system from scratch: logo, landing page, pamphlets, and packaging, maintaining 100% brand consistency across every deliverable in a fast, resource-constrained freelance setting."
                },
                {
                  title: "Outcome",
                  copy: "A complete, launch-ready brand package spanning digital and physical touchpoints — translating business goals into user-facing design without an internal design team."
                }
              ]
            },
            {
              title: "Final Screens",
              copy: "The final set was designed as a cohesive app store presentation, with each screenshot focused on one key product feature. Clear headlines, UI previews, bright gradients, and active compositions helped make the app feel simple, motivating, and easy to understand.Together, the creatives gave FitParty a polished first store presence and helped translate the product experience into clear, user-facing communication.",
              images: ["/images/fitparty/82ced003-0301-4c3b-922a-912bb14a692b.png"]
            },
            {
              title: "Final Screens",
              copy: "The final set was designed as a cohesive app store presentation, with each screenshot focused on one key product feature. Clear headlines, UI previews, bright gradients, and active compositions helped make the app feel simple, motivating, and easy to understand.Together, the creatives gave FitParty a polished first store presence and helped translate the product experience into clear, user-facing communication.",
              images: ["/images/fitparty/82ced003-0301-4c3b-922a-912bb14a692b.png"]
            }
          ]
        } 
      },
      {
        type: "zigzag",
        title: "App Store & ASO",
        copy: "Store-listing visuals created for Indian and US markets, designed to communicate the product, improve feature clarity and support organic discovery.",
        images: ["/images/page-10.jpg"],
        subPageSlug: "app-store-aso",
        subPageData: {
          title: "App Store & ASO",
          description: "A deep dive into App Store optimization strategies.",
          deliverables: "App Store Screenshot Creatives",
          servicesUsed: "App Store & ASO Visuals",
          skillsUsed: "Layout Design · Visual Design · Typography · ASO Visual Design · Product Communication",
          contentBlocks: [
            {
              type: "process",
              title: "The Project Journey",
              processSteps: [
                {
                  title: "Challenge",
                  copy: "A new delivery service needed a market-ready identity and launch assets, with COVID-era trust signals — contactless delivery, safety protocols — built directly into the messaging."
                },
                {
                  title: "Approach",
                  copy: "Built the full visual system from scratch: logo, landing page, pamphlets, and packaging, maintaining 100% brand consistency across every deliverable in a fast, resource-constrained freelance setting."
                },
                {
                  title: "Outcome",
                  copy: "A complete, launch-ready brand package spanning digital and physical touchpoints — translating business goals into user-facing design without an internal design team."
                }
              ]
            },
            {
              type: "default",
              title: "Overview",
              copy: "Detailed placeholder content for App Store & ASO."
            }
          ]
        }
      },
      {
        type: "zigzag",
        title: "Stories, Covers & Content Promotion",
        copy: "Covers and promotional systems developed to translate stories, genres and characters into visually compelling content experiences.",
        images: ["/images/page-10.jpg"],
        subPageSlug: "stories-covers",
        subPageData: {
          title: "Stories, Covers & Content Promotion",
          description: "A deep dive into content promotion and cover designs.",
          deliverables: "App Store Screenshot Creatives",
          servicesUsed: "App Store & ASO Visuals",
          skillsUsed: "Layout Design · Visual Design · Typography · ASO Visual Design · Product Communication",
          contentBlocks: [
            {
              type: "process",
              title: "The Project Journey",
              processSteps: [
                {
                  title: "Challenge",
                  copy: "A new delivery service needed a market-ready identity and launch assets, with COVID-era trust signals — contactless delivery, safety protocols — built directly into the messaging."
                },
                {
                  title: "Approach",
                  copy: "Built the full visual system from scratch: logo, landing page, pamphlets, and packaging, maintaining 100% brand consistency across every deliverable in a fast, resource-constrained freelance setting."
                },
                {
                  title: "Outcome",
                  copy: "A complete, launch-ready brand package spanning digital and physical touchpoints — translating business goals into user-facing design without an internal design team."
                }
              ]
            },
            {
              type: "default",
              title: "Overview",
              copy: "Detailed placeholder content for Stories, Covers & Content Promotion."
            }
          ]
        }
      },
      {
        type: "zigzag",
        title: "Video ads & Engagement Creatives",
        copy: "Paid video ads, GIFs, notifications and in-app creatives created to support user acquisition, content discovery and recurring reader communication.",
        images: ["/images/page-10.jpg"],
        subPageSlug: "video-ads",
        subPageData: {
          title: "Video ads & Engagement Creatives",
          description: "A deep dive into video ads and engagement.",
          deliverables: "App Store Screenshot Creatives",
          servicesUsed: "App Store & ASO Visuals",
          skillsUsed: "Layout Design · Visual Design · Typography · ASO Visual Design · Product Communication",
          contentBlocks: [
            {
              type: "process",
              title: "The Project Journey",
              processSteps: [
                {
                  title: "Challenge",
                  copy: "A new delivery service needed a market-ready identity and launch assets, with COVID-era trust signals — contactless delivery, safety protocols — built directly into the messaging."
                },
                {
                  title: "Approach",
                  copy: "Built the full visual system from scratch: logo, landing page, pamphlets, and packaging, maintaining 100% brand consistency across every deliverable in a fast, resource-constrained freelance setting."
                },
                {
                  title: "Outcome",
                  copy: "A complete, launch-ready brand package spanning digital and physical touchpoints — translating business goals into user-facing design without an internal design team."
                }
              ]
            },
            {
              type: "default",
              title: "Overview",
              copy: "Detailed placeholder content for Video ads & Engagement Creatives."
            }
          ]
        }
      }
    ]
  },
  {
    slug: "fitparty",
    num: "02",
    client: "Mobile App Branding",
    name: "FitParty — App Store Visuals",
    shortDescription: "First app store creatives designed for a US-based fitness startup to communicate product features clearly and create a polished first impression for early users.",
    role: "Visual Designer",
    roleDetails: "Visual Designer",
    deliverables: "App Store Screenshot Creatives",
    servicesUsed: "App Store & ASO Visuals",
    skillsUsed: "Layout Design · Visual Design · Typography · ASO Visual Design · Product Communication",
    skillsVideo: "/videos/fitparty/WhatsApp Video 2026-07-16 at 1.00.58 PM.mp4",
    introVideo: "",
    gallery: [],
    col1img1: "/images/fitparty/7dc1bc-93af-42ed-986c-2c5a3f3c77ac1.png",
    col1img2: "/images/fitparty/857ffe14-35a3-4c57-9472-61970c1ec560.png",
    col2img: "/images/fitparty/b92379f1-a5d1-46e3-9ed4-48726dfec11c.png",
    contentBlocks: [
      {
        align: 'center',
        copy: "FitParty is a US-based early-stage fitness startup built around simple fitness challenges with family and friends. I created its first set of app store creatives to help users quickly understand the product, its features, and its social fitness experience.",
      },
      {
        type: "process",
        title: "The Project Journey",
        processSteps: [
          {
            title: "Challenge",
            copy: "Create the first app store creatives for a new US-based fitness startup with no existing store visual direction."
          },
          {
            title: "Approach",
            copy: "Use bright gradients, app UI mockups, clear feature-led headlines, and consistent layouts to explain each product benefit quickly."
          },
          {
            title: "Outcome",
            copy: "A polished set of app store visuals that gave FitParty a clear and credible first product-facing presence."
          }
        ]
      },
      {
        title: "Key Features",
        images: ["/images/fitparty/eb69578b-2334-4198-9433-406f2284a46c.png"]
      },
      {
        title: "Typography & Visual System",
        images: ["/images/fitparty/FitParty Visual System (2).png"]
      },
      {
        title: "Final Screens",
        copy: "The final set was designed as a cohesive app store presentation, with each screenshot focused on one key product feature. Clear headlines, UI previews, bright gradients, and active compositions helped make the app feel simple, motivating, and easy to understand.Together, the creatives gave FitParty a polished first store presence and helped translate the product experience into clear, user-facing communication.",
        images: ["/images/fitparty/82ced003-0301-4c3b-922a-912bb14a692b.png"]
      },
      {
        title: "From App Store to Real Life",
        images: ["/images/fitparty/b8507b65-2355-4fe2-abce-52e60be8d861.png","/images/fitparty/f47dc1bc-93af-42ed-986c-2c5a3f3c77ac.png"]
      },
      {
        type: "quote",
        copy: "Move Together. Stay Motivated."
      }
    ]
  },
  {
    slug: "f5-refreshment",
    num: "03",
    client: "Brand Identity",
    name: "F5 Refreshment",
    shortDescription: "Brand launch for a tea & snack delivery service — identity, packaging, and print collateral.",
    role: "Freelance Graphic Designer",
    roleDetails: "F5 Refreshment",
    servicesUsed: "Brand Identity · Packaging Design · Print Collateral",
    skillsUsed: "Logo Design · Visual Identity · Layout Design",
    skillsImage: "/images/page-15.jpg",
    gallery: [],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    contentBlocks: [
      {
        type: "process",
        title: "The Project Journey",
        processSteps: [
          {
            title: "Challenge",
            copy: "A new delivery service needed a market-ready identity and launch assets, with COVID-era trust signals — contactless delivery, safety protocols — built directly into the messaging."
          },
          {
            title: "Approach",
            copy: "Built the full visual system from scratch: logo, landing page, pamphlets, and packaging, maintaining 100% brand consistency across every deliverable in a fast, resource-constrained freelance setting."
          },
          {
            title: "Outcome",
            copy: "A complete, launch-ready brand package spanning digital and physical touchpoints — translating business goals into user-facing design without an internal design team."
          }
        ]
      },
      {
        title: "Brand Applications",
        images: ["/images/page-16.jpg", "/images/page-17.jpg", "/images/page-18.jpg"]
      }
    ]
  },
  {
    slug: "feronia-fashion-night",
    num: "04",
    client: "Event Branding",
    name: "Feronia Fashion Night",
    shortDescription: "India's first androgynous fashion show — full brand system across print, digital, and event.",
    role: "Branding, Print & Social",
    roleDetails: "Redo Times Pvt. Ltd.",
    servicesUsed: "Event Branding · Social Media Design · Print Collateral",
    skillsUsed: "Logo Design · Typography · Environmental Graphics",
    skillsImage: "/images/page-20.jpg",
    gallery: [],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    contentBlocks: [
      {
        type: "process",
        title: "The Project Journey",
        processSteps: [
          {
            title: "Challenge",
            copy: "A landmark event raising awareness on gender equality and LGBTQ inclusivity needed a visual identity strong enough to carry a sensitive message — and flexible enough to work across two cities, multiple sponsors, and press coverage."
          },
          {
            title: "Approach",
            copy: "Designed the full identity from the ground up: a logo built from two symbolic shapes — a figure representing the goddess of freedom, wings representing the freedom of life — then extended it into a website, Instagram campaign, print invitations, banners, entry passes, and on-site backdrops for both the Jaipur and Goa editions."
          },
          {
            title: "Outcome",
            copy: "A cohesive brand across 6+ formats for a first-of-its-kind event, with coverage from Postman News and multiple media partners, and sponsor placements including Radisson Blu."
          }
        ]
      },
      {
        title: "Brand Applications",
        images: ["/images/page-21.jpg", "/images/page-30.jpg"]
      },
      {
        title: "Event Collateral",
        images: ["/images/page-31.jpg", "/images/page-32.jpg", "/images/page-33.jpg", "/images/page-34.jpg"]
      },
      {
        title: "Digital & Social",
        images: ["/images/page-35.jpg", "/images/page-36.jpg"]
      }
    ]
  },
  {
    slug: "magazine-design",
    num: "05",
    client: "Editorial Design",
    name: "Magazine Design",
    shortDescription: "Layout and art direction for Womanifest, a 90+ page digital lifestyle magazine for women.",
    role: "Freelance Editorial Designer",
    roleDetails: "Visual Designer",
    servicesUsed: "Editorial Design · Art Direction · Layout",
    skillsUsed: "Typography · Editorial Layout · Composition",
    skillsImage: "/images/page-25.jpg",
    gallery: [],
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    contentBlocks: [
      {
        type: "process",
        title: "The Project Journey",
        processSteps: [
          {
            title: "Challenge",
            copy: "Needed a clean, engaging layout for a massive 90+ page lifestyle magazine focusing on women's topics."
          },
          {
            title: "Approach",
            copy: "Spearheaded the editorial layout and typography selection. The layouts prioritize readability while maintaining striking, art-directed visual compositions across food, travel, and fashion sections."
          },
          {
            title: "Outcome",
            copy: "Successfully delivered a cohesive and highly readable digital magazine experience."
          }
        ]
      },
      {
        title: "Editorial Spreads",
        images: ["/images/page-26.jpg", "/images/page-27.jpg", "/images/page-28.jpg"]
      }
    ]
  },
  {
    slug: "Luxury-design",
    num: "06",
    client: "LUxury product",
    name: "Luxury Fragrance Showcase Invite",
    shortDescription: "A premium event invite designed for a private fragrance showcase, combining soft Indian heritage cues, refined typography, product-focused composition, and warm luxury styling.",
    servicesUsed: "Brand & Marketing Collateral · Social Media & Campaign Design · AI-assisted Visual Exploration",
    skillsUsed: "Art Direction · Layout Design · Typography · Visual Design · Image Editing",
    skillsImage: "/images/luxury/Untitled-1Artboard 1 copy.jpg",
    role: "Freelance Editorial Designer",
    roleDetails: "Visual Designer",
    deliverables: "Digital invite",
    // We will clear problem/approach/result because we are using contentBlocks
    gallery: [], // Handled in contentBlocks
    col1img1: "/images/luxury/ChatGPT Image Jul 13, 2026, 12_26_35 PM.png", 
    col1img2: "/images/luxury/Untitled-1Artboard 1 copy.jpg",
    col2img: "/images/luxury/Untitled-1Artboard 1.png", // Hero image
    contentBlocks: [
      {
        align: 'center',
        copy: "The invite was created for a private fragrance showcase under the “Experiences with <strong>The House of Angadi</strong>” umbrella, featuring <strong>Maison de Fouzdar</strong>. The goal was to create a visual direction that felt premium, intimate, and brand-aligned while keeping the fragrance experience at the center.",
      },
      {
        type: "process",
        title: "Our Creative Process",
        processSteps: [
          {
            title: "Challenge",
            copy: "The challenge was to translate The House of Angadi's heritage-inspired luxury language into a modern visual system without making it feel overly decorative, festive, or cluttered."
          },
          {
            title: "Approach",
            copy: "Built the visual direction around ivory silk textures, white florals, warm gold accents, restrained heritage cues, editorial typography, and product-led composition."
          },
          {
            title: "Outcome",
            copy: "A refined invite direction that balances luxury styling, event clarity, and fragrance-led storytelling across mobile, social, and print-style applications."
          }
        ]
      },
      {
        title: "Visual Direction",
        copy: "The moodboard focused on quiet Indian luxury — ivory silk, soft florals, heritage details, warm gold accents, editorial typography, and tactile textures. These references helped shape the invite’s calm, premium, and intimate mood.",
        images: ["/images/luxury/5c17d31f-4e9e-47ae-b9c5-a35a64c59de6 (1).jpeg"]
      },
      {
        title: "Typography & Visual System",
        images: ["/images/luxury/df60c48c-abb0-4600-87d7-d51a8561395c.png"]
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
        images: ["/images/luxury/Fragrance_Final_2 (1).jpg"]
      },
      {
        title: "Digital & Print Application",
        images: ["/images/luxury/1f6940be-8aea-488e-8183-28f6eb7e56b1.png","/images/luxury/ChatGPT Image Jul 13, 2026, 12_26_35 PM.png"]
      },
      {
        type: "quote",
        copy: "Where scent becomes story."
      }
    ]
  }
];
