export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  copy: string;
}

export interface SubPageSection {
  contentHeading?: string;
  contentSubHeading?: string;
  contentCopy?: string;
  skillimage?: string;
  skillvideo?: string;
  contentBlocks: ContentBlock[];
}

export interface SubPageData {
  title: string;
  description: string;
  role?: string;
  deliverables?: string;
  servicesUsed?: string;
  skillsUsed?: string;
  heroImage?: string;
  skillimage?: string;
  contentHeading?: string;
  contentBlocks?: ContentBlock[];
  sections?: SubPageSection[];
}

export interface ContentBlock {
  type?: 'default' | 'process' | 'quote' | 'stats' | 'zigzag';
  align?: 'left' | 'center';
  imageLayout?: 'grid' | 'stacked';
  fullWidthImages?: number[];
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
  heroVideo?: string;
  role: string;
  roleDetails?: string;
  contract?: string;
  contribution?: string;
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
    shortDescription: "Pratilipi is a digital storytelling platform that connects readers and writers across multiple languages, genres and content formats.",
    role: "Marketing Designer",
    roleDetails: "Marketing Designer",
    contract: "4.5 years",
    contribution: "Created high-volume marketing and product creatives across app-store visuals, performance advertising, story promotions, video campaigns, notifications and in-app placements for Indian and US markets.",
    gallery: [],
    col1img1: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729667/a075ed2f-a5b7-479b-821c-e7390c6c7d73_imu2xv.png",
    col1img2: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729671/2029e253-9e3b-407c-ad8c-37797373be9a_htvbqb.png",
    col2img: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729688/1bc65d71-691c-4577-94a6-c60bb92632f8.jpg_vaetox.jpg",
    contentBlocks: [
      {
        type: "stats",
        stats: [
          { value: "12%", label: "Increase in organic app installs through ASO visual redesign" },
          { value: "500+", label: "Creatives delivered monthly across campaigns and content formats" },
          { value: "₹2L / Month", label: "Saved in marketing expenditure through in-house creative production" },
          { value: "India + US", label: "Creative adaptations developed for two distinct markets" }
        ]
      },
      {
        type: "zigzag",
        title: "Campaigns, Stories & Performance Creatives",
        copy: "Acquisition-focused campaigns created across Meta, Google and paid media, including static ads, video creatives, market adaptations, A/B tests and AI-assisted visual development.",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729667/a075ed2f-a5b7-479b-821c-e7390c6c7d73_imu2xv.png"],
        subPageSlug: "performance-advertising",
        subPageData: {
          title: "Campaigns, Stories & Performance Creatives",
          description: "Performance-led advertising and story-promotion creatives developed for Pratilipi’s Indian and US markets across paid acquisition channels. The work combined platform-specific design, content-led storytelling, creative experimentation and multi-format adaptation.",
          deliverables: "Meta, Google and app-install ads · Static, video and story-led creatives · India and US market adaptations · A/B testing and multi-format variations · AI-assisted campaign visuals · Agency-collaborated performance creatives",
          servicesUsed: "Performance Marketing Creatives · Social Media & Campaign Design · Video & Motion Creatives · AI-Assisted Visual Exploration",
          skillsUsed: "Visual Design · Layout Design · Typography · Image Editing · Product Communication · Creative Adaptation · A/B Testing · AI-Assisted Visual Exploration",
          sections: [
            { 
              contentBlocks: [
                {
                  type: "process",
                  processSteps: [
                    {
                      title: "Challenge",
                      copy: "Create performance creatives for two different markets while keeping Pratilipi’s identity consistent. Indian campaigns needed culturally relevant, story-led communication, while US campaigns required genre-focused visuals that could introduce the platform to a newer audience."
                    },
                    {
                      title: "Approach",
                      copy: "Developed separate visual directions for India and the US based on audience interests, genres and campaign objectives. Created A/B variations using different imagery, story snippets, layouts and visual styles, then adapted the selected directions across Meta, Google and multiple ad formats."
                    },
                    {
                      title: "Outcome",
                      copy: "Built a flexible collection of market-specific creatives that clearly communicated Pratilipi’s stories across platforms. The system supported paid acquisition, faster format adaptation and ongoing creative experimentation without making the campaigns feel repetitive."
                    }
                  ]
                }
              ]
            },
            {
              contentHeading: "Indian Market",
              contentBlocks: [
                
                {
                  title: "In-App Story Cover Designs",
                  copy: "In-app story covers created for the Pratilipi reading experience, designed to communicate genre, tone and narrative cues within seconds.",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729690/pratilipi-multilingual-covers-editorial-layout-1280x980_1_wpqusg.png"]
                },
                {
                  title: "A/B Testing & Creative Variations",
                  copy: "Created multiple ad variations for the same stories across Meta and Google Ads. Each version explored different imagery, visual styles, story snippets, layouts and placements to identify the most suitable creative direction for each platform.",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729652/83a57aaf-1307-4f00-9016-29bbe09727a2_fs9xua.png"]
                },
                {
                  title: "AI-Assisted Visuals",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729667/a075ed2f-a5b7-479b-821c-e7390c6c7d73_imu2xv.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729681/bec4d018-a7a1-4a02-b842-cd6c8fe1a6ed_llzxdg.png"]
                },
                {
                  title:"Always-On Performance Creatives",
                  copy:"High-volume ad creatives produced regularly for Pratilipi’s ongoing campaigns, story promotions and audience acquisition across digital platforms.",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729657/48927328-0718-49d3-bc17-ec53fa0cbcbb_ts0zfd.png"]
                },
                {
                  title: "Agency-Led Google Ads",
                  copy: "Google Display creatives developed from agency-provided campaign directions and adapted into multiple sizes for placements across websites, mobile pages and apps.",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729682/b528c587-6c2a-433a-953a-e42fc422e08b_edh9n0.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729676/cd187918-3ea0-4c0f-a42f-3e40d8a2daf2_a7ssl4.png"]
                },
                {
                  title: "Push Notification Creatives",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729663/ac17f789-3d62-4c9e-a2ec-a377cf9da84c_mxes2e.png"]
                },
                {
                  title:"Experimental Ad Creatives",
                  copy:"Experimental ad creatives created to test new visual directions, messaging styles and content treatments for future performance campaigns.",
                  images:["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729655/7606e340-961e-438e-b046-7edf896f5173_b9w7o2.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729682/f105aa77-1de7-4ba7-bca4-bdbe8898104c_mssmge.png"]
                },
                {
                  title:"Experimental Video Ads",
                  images:["https://res.cloudinary.com/dycy3bsn4/video/upload/v1787730269/Untitled_design_opik2l.mp4","https://res.cloudinary.com/dycy3bsn4/video/upload/v1787730115/Untitled_design_1_w1drxn.mp4","https://res.cloudinary.com/dycy3bsn4/video/upload/v1787730094/Untitled_design_2_uiovoa.mp4"]
                }
              ],
            },
            {
              contentHeading: "US Market",
              contentSubHeading: "Designed for a New Market",
              contentCopy: "A mix of A/B testing creatives, awareness ads, premium promotions and story covers created to introduce Pratilipi and its content to US audiences.",
              contentBlocks: [
                {
                  title: "Awarness Ad Creatives",
                  copy: "Story-led social media ads created to showcase popular titles and increase awareness of the Pratilipi app.",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729685/ea76a9f5-e67d-433c-9982-0926996a2b48_ttqcvc.png"]
                },
                {
                  title: "Premium Story Covers",
                  copy: "Story covers created for Pratilipi Premium, designed to communicate the genre and mood while showing how the artwork appears inside the app.",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729667/40cebfb7-2150-4196-a990-2a5baf4e6d78_atqkip.png"]
                },
                {
                  title: "A/B Testing Creative Exploration",
                  copy: "Six ad variations were created to test how different story hooks, images, layouts and text placements could influence attention and engagement.\n\n<span class=\"text-white font-medium text-xl sm:text-2xl block\">What was tested</span>\n<strong>Snippet A — Emotional Hook</strong>\nA personal, emotion-led line designed to create an immediate connection.\n\n<strong>Snippet B — Plot-Led Teaser</strong>\nA story-focused line designed to build curiosity around the plot.\n\n<span class=\"text-white font-medium text-xl sm:text-2xl block\">Design variations</span>\nThe same two snippets were applied across three different visual directions to compare:",
                  list: [
                    "image choice",
                    "layout style",
                    "typography and hierarchy",
                    "placement of the story line",
                    "overall visual mood"
                  ],
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729697/08e4e73c-3d42-4209-b303-53f19cb4b050_isbbmy.png"]
                },
              ]
            },

          ]
        } 
      },
      {
        type: "zigzag",
        title: "App Store & ASO",
        copy: "Store-listing visuals created for Indian and US markets, designed to communicate the product, improve feature clarity and support organic discovery.",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729671/2029e253-9e3b-407c-ad8c-37797373be9a_htvbqb.png"],
        subPageSlug: "app-store-aso",
        subPageData: {
          title: "App Store & ASO",
          description: "App store creatives designed for India and the US, focused on presenting key features clearly and making the product easier to understand at first glance.",
          deliverables: "App Store Screenshot Creatives and Feature Graphic",
          servicesUsed: "App Store & ASO Visuals",
          skillsUsed: "Layout Design · Visual Design · Typography · ASO Visual Design · Product Communication",
          sections: [
            {
              contentHeading: "Play Store - India",
              skillimage:"https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729703/8cf33b2b-097f-40e9-a2e3-9be32a5408e0_1_vfs66n.jpg",
              contentBlocks: [
                {
                  type: "process",
                  processSteps: [
                    {
                      title: "Challenge",
                      copy: "Pratilipi already had a strong Play Store presence, so the new screenshots needed to outperform the existing set. Multiple revisions were required to reach the right direction."
                    },
                    {
                      title: "Approach",
                      copy: "Refined the messaging, hierarchy, visuals, and screen sequence through repeated iterations, with one clear feature highlighted per screen."
                    },
                    {
                      title: "Outcome",
                      copy: "The final redesign created a clearer store presence and contributed to a 12% increase in organic installs."
                    }
                  ]
                },
                {
                  title: "Typography & Visual System",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729682/f56928a3-b2b8-4e1f-98b6-ebe5bc9d7e85_nteug9.png"]
                },
                {
                  title: "Feature Graphic ",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729684/fg_12.jpg_gnpjye.jpg"]
                }
              ]
            },
            {
              contentSubHeading: "Final App Screenshots",
              contentBlocks: [
                {
                  images: [
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729671/2029e253-9e3b-407c-ad8c-37797373be9a_htvbqb.png",
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729701/9eaadb63-ce70-4dc7-b465-b3ced70098eb_hz7w4r.png",
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729653/034cb516-ae23-4184-a9d1-5973eb731554_zkg7oh.png"
                  ]
                }
              ]
            },
            {
              contentHeading: "Play Store & App Store - US",
              skillimage:"https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729706/8cf33b2b-097f-40e9-a2e3-9be32a5408e0_1_1.jpg_pcfjah.jpg",
              contentBlocks: [
                {
                  type: "process",
                  processSteps: [
                    {
                      title: "Challenge",
                      copy: "The US market was completely new, with no previous store visuals or established direction to build from."
                    },
                    {
                      title: "Approach",
                      copy: "Built the visual direction from scratch by exploring different content styles, messaging, layouts, and screenshot sequences through multiple iterations."
                    },
                    {
                      title: "Outcome",
                      copy: "Created a clear and cohesive US store listing that introduced the product and its content offering to a new audience."
                    }
                  ]
                },
                {
                  title: "Typography & Visual System",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729626/22e6718d-0fca-41e5-94c1-9a36fd9f1356_stnxpx.png"]
                },
                {
                  title: "Feature Graphic ",
                  images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729685/fg_usArtboard_1_copy_2.jpg_jirwmk.jpg"]
                }
              ]
            },
            {
              contentSubHeading: "Play Store Screenshots",
              contentBlocks: [
                {
                  images: [
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729698/7e43dd71-0af1-44ff-9748-15178c7d1bce.jpg_cerp2o.jpg",
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729669/72124508-b360-4f4c-afb2-5985170f6639.jpg_mzc2qu.jpg",
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729704/11dfd6ee-125b-4105-b62b-dc6bb03a8d90_ecqjeb.png"
                  ]
                }
              ]
            },
            {
              contentSubHeading: "App Store (IOS) Screenshots",
              contentBlocks: [
                {
                  images: [
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729676/82a8eab8-c6ca-40c3-a00e-ed48124b7b65_ltptvu.png",
                    "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729669/b3f13313-59f0-44d3-a595-8be58bd80cc6_sztmsu.png"
                  ]
                }
              ]
            },
            {
              contentHeading: "Different markets. Different approaches",
              skillimage:"https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729686/faa54f95-2ae3-47d5-9cc3-6558e24a72e3_copy_b51nqq.png",
              contentBlocks: []
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
    skillsVideo: "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787729032/WhatsApp_Video_2026-07-16_at_1.00.58_PM_ywj3ex.mp4",
    introVideo: "",
    gallery: [],
    col1img1: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728898/7dc1bc-93af-42ed-986c-2c5a3f3c77ac1_txayfu.png",
    col1img2: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728898/857ffe14-35a3-4c57-9472-61970c1ec560_a3y88i.png",
    col2img: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728901/b92379f1-a5d1-46e3-9ed4-48726dfec11c_umsqfj.png",
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
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728902/eb69578b-2334-4198-9433-406f2284a46c_tzaa5x.png"]
      },
      {
        title: "Typography & Visual System",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728895/FitParty_Visual_System_2_rwxzuk.png"]
      },
      {
        title: "Final Screens",
        copy: "The final set was designed as a cohesive app store presentation, with each screenshot focused on one key product feature. Clear headlines, UI previews, bright gradients, and active compositions helped make the app feel simple, motivating, and easy to understand.Together, the creatives gave FitParty a polished first store presence and helped translate the product experience into clear, user-facing communication.",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728897/82ced003-0301-4c3b-922a-912bb14a692b_bzfyiu.png"]
      },
      {
        title: "From App Store to Real Life",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728882/b8507b65-2355-4fe2-abce-52e60be8d861_ylhxzp.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787728894/f47dc1bc-93af-42ed-986c-2c5a3f3c77ac_jdndqg.png"]
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
    name: "F5 Refreshments — Brand Communication Across Touchpoints",
    shortDescription: "A multi-format design system created across print, digital and physical brand applications.",
    role: "Visual Designer",
    roleDetails: "Visual Designer",
    deliverables: "Pamphlets · Digital Menu · Coupon · Sticker · Instagram Post · Water Dispenser Cover · App Landing Page",
    servicesUsed: "Brand & Marketing Collateral",
    skillsUsed: "Layout Design · Visual Design · Typography · Image Editing · Print Design · Product Communication · Digital Design",
    skillsImage: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727921/f5-refreshments-logo-white-background-1900x980_hof7lj.png",
    gallery: [],
    col1img1: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727701/9d7bab33-28d7-4e25-a383-e3de499cf894_vyzpmk.png",
    col1img2: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727916/3ebdbc37-1a99-4040-a5a2-dc694f373791_ptkv3z.png",
    col2img: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727710/2359e120-b2a8-4f01-9f40-fd85827bdf37_oqjhwl.png",
    contentBlocks: [
      {
        align: 'center',
        copy: "F5 Refreshments required communication materials for different customer touchpoints—from printed pamphlets and coupons to digital menus, social media, product branding and an app landing page.The goal was to keep each format clear, accessible and visually connected while adapting the design to its specific purpose.",
      },
      {
        type: "process",
        title: "The Project Journey",
        processSteps: [
          {
            title: "Challenge",
            copy: "This was my first real-world design project after graduation, so the challenge was to apply what I had learned to practical brand requirements across print, digital and physical touchpoints."
          },
          {
            title: "Approach",
            copy: "I focused on understanding how each format would be used, then adapted the visual language, layout and information hierarchy to keep every asset clear, functional and recognisably connected to the brand."
          },
          {
            title: "Outcome",
            copy: "The project resulted in a versatile set of customer-facing materials across pamphlets, menus, coupons, stickers, social media, product branding and the app landing page, while giving me valuable experience in designing for real business needs."
          }
        ]
      },
      {
        title: "Landing Page",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727722/b4958c01-3b36-4563-a04b-a8537b771ab8_kbybsw.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727955/Screenshot_2026-07-18_at_5.44.37_PM_i6df4p.png"]
      },
      {
        title: "Digital Menu",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727701/9d7bab33-28d7-4e25-a383-e3de499cf894_vyzpmk.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727887/1b89897a230d25f101d77a7cc3021f71_r0jwyw.jpg","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727728/7287386fbdbc9a20efdc05ea0eb29f81_zpjloz.jpg"]
      },
      {
        title: "Pamphlets",
        imageLayout: 'stacked',
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727916/3ebdbc37-1a99-4040-a5a2-dc694f373791_ptkv3z.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727980/fd0cb5b6-34d3-48a1-a5ac-ae4852db3409_zuxfmj.png"]
      },
      {
        title: "Coupon & Sticker",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727700/6b939894-4f5f-448c-a4c1-857d5d1ceb34_hhx8jx.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727701/59a4e965-e677-458d-bcd3-b5d1e2ed60ec_yzmriw.png"]
      },
      {
        title: "Instagram Post",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727882/f5-franchise-instagram-mobile-mockup-realistic-1280x980_xud4z7.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727722/F5_CAMPAIGNArtboard_1_copy_3.jpg_ylgx5b.jpg","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727921/FM_CAMPAIGN_2Artboard_1_copy_7.jpg_krtr7u.jpg","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727726/f5_franchise.jpg_ikxdsa.jpg","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727750/f5_franchise1.jpg_lyosdt.jpg"]
      },
      {
        title: "Water dispenser cover",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727730/94ebd988-0ef5-4b68-93ff-fc120bd24901_zc4k5t.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727935/FINAL_WATER_BOTTEL_COVER_DESIGN.jpg_dgtipp.jpg"]
      }
    ]
  },
  {
    slug: "textile-brand-identity",
    num: "04",
    client: "Brand Identity",
    name: "Textile\nBrand Identity",
    shortDescription: "A compact identity system designed for consistent business communication.",
    role: "Visual Designer",
    roleDetails: "Visual Designer",
    deliverables: "Logo Identity · Business Card · Letterhead",
    servicesUsed: "Brand Identity · Brand & Marketing Collateral",
    skillsUsed: "Logo Design · Typography · Layout Design · Visual Design",
    skillsImage: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729442/Business_Card-1.jpg_cscacw.jpg",
    gallery: [],
    col1img1: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729473/7090638f-cc13-4fa8-bc57-18650f995d70.jpg_qlw2zy.jpg",
    col1img2: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729461/c2471529-1ca2-49f2-841e-5d462b845b8b_tzxcju.png",
    col2img: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729462/0d660913-d621-43a8-addc-e7049016e369_tjqme5.png",
    contentBlocks: [
      {
        align: 'center',
        copy: "Bhavya Fabrics required a professional visual identity that could represent the business consistently across stationery and everyday brand communication.",
      },
      {
        type: "process",
        title: "The Project Journey",
        processSteps: [
          {
            title: "Challenge",
            copy: "Create a distinctive and professional identity suitable for a textile business."
          },
          {
            title: "Approach",
            copy: "Developed a refined logo system supported by consistent typography, colour and practical brand applications."
          },
          {
            title: "Outcome",
            copy: "A cohesive identity that works across stationery, textile labels and business-facing communication."
          }
        ]
      },
      {
        fullWidthImages: [0, 1, 4, 7],
        images: [
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729470/900e55fd-862f-4edd-963e-64b47bbaf509_copy_mvnomc.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729468/900e55fd-862f-4edd-963e-64b47bbaf509_wk3xnh.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729470/58a04e87-6fc6-43fa-be7d-0d15fa2dc335_bemgyv.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729472/42d4c863-ffad-4f71-88af-1d9edf613133_w1unrb.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729475/9bd8e037-bb99-4c87-b9f4-7e6c560e5dfb_ypk50i.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729447/letter_head_...jpg_q0bv07.jpg",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729461/c2471529-1ca2-49f2-841e-5d462b845b8b_tzxcju.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729473/7090638f-cc13-4fa8-bc57-18650f995d70.jpg_qlw2zy.jpg"
        ]
      }
    ]
  },
  {
    slug: "Luxury-design",
    num: "05",
    client: "LUxury product",
    name: "Luxury Fragrance Showcase Invite",
    shortDescription: "A premium event invite designed for a private fragrance showcase, combining soft Indian heritage cues, refined typography, product-focused composition, and warm luxury styling.",
    servicesUsed: "Brand & Marketing Collateral · Social Media & Campaign Design · AI-assisted Visual Exploration",
    skillsUsed: "Art Direction · Layout Design · Typography · Visual Design · Image Editing",
    skillsImage: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729149/Untitled-1Artboard_1_copy_o2rgqs.jpg",
    role: "Visual Designer",
    roleDetails: "Visual Designer",
    deliverables: "Digital invite",
    // We will clear problem/approach/result because we are using contentBlocks
    gallery: [], // Handled in contentBlocks
    col1img1: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729152/ChatGPT_Image_Jul_13_2026_12_26_35_PM_zfzk4a.png", 
    col1img2: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729149/Untitled-1Artboard_1_copy_o2rgqs.jpg",
    col2img: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729154/Untitled-1Artboard_1_vnaywr.png", // Hero image
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
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729142/5c17d31f-4e9e-47ae-b9c5-a35a64c59de6_1_kezigf.jpg"]
      },
      {
        title: "Typography & Visual System",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729150/df60c48c-abb0-4600-87d7-d51a8561395c_odjccm.png"]
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
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729158/Fragrance_Final_2_1_bf7cpe.jpg"]
      },
      {
        title: "Digital & Print Application",
        images: ["https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729146/1f6940be-8aea-488e-8183-28f6eb7e56b1_aejy6y.png","https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729152/ChatGPT_Image_Jul_13_2026_12_26_35_PM_zfzk4a.png"]
      },
      {
        type: "quote",
        copy: "Where scent becomes story."
      }
    ]
  },
  {
    slug: "magazine-design",
    num: "06",
    client: "Editorial Design",
    name: "Womaniya — Editorial & Magazine Layout",
    shortDescription: "A 90+ page digital magazine created as a college project, exploring editorial design across fashion, lifestyle, food and travel.",
    role: "Editorial & Layout Designer",
    roleDetails: "Editorial & Layout Designer",
    deliverables: "90+ Page Digital Magazine",
    servicesUsed: "Performance Marketing Creatives · Video & Motion Creatives · AI-Assisted Visual Exploration",
    skillsUsed: "Creative Direction · AI Visual Generation · Video Editing · Motion Design · Storytelling · Typography · Sound Selection",
    skillsImage: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729306/81a40287-6ae9-444c-a54d-4cec6fcdaf26_xmtzxg.png",
    gallery: [],
    col1img1: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729299/d118bae9-1d30-4285-8411-0af5fcf64301_zerpbh.png",
    col1img2: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729306/81a40287-6ae9-444c-a54d-4cec6fcdaf26_xmtzxg.png",
    col2img: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729305/6111df38-e934-44da-9c65-60e16d0cb461_ryqrba.png",
    contentBlocks: [
      {
        align: 'center',
        copy: "Womaniya was a collaborative college project to create a complete digital lifestyle magazine from the ground up. My responsibility was to develop its visual language and design the editorial layouts across more than 90 pages.The magazine combined fashion, beauty, food, travel, music and event-based content within one consistent publication.",
      },
      {
        type: "process",
        title: "The Project Journey",
        processSteps: [
          {
            title: "Challenge",
            copy: "Organise multiple content formats while giving every section its own visual identity."
          },
          {
            title: "Approach",
            copy: "Developed flexible grids, clear typographic hierarchy and image-led compositions that could adapt across different stories."
          },
          {
            title: "Outcome",
            copy: "Created a cohesive 90+ page magazine that maintained consistency while supporting varied editorial content."
          }
        ]
      },
      {
        images: [
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729299/d118bae9-1d30-4285-8411-0af5fcf64301_zerpbh.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729311/dd741845-3301-4f2b-b202-18ff5816a2b0_dbfsry.png",
          "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787729317/ad107cd1-b22e-4738-87ca-3e147b399617_whrr1e.png"
        ]
      },
      {
        type: "quote",
        copy: "One magazine. Multiple stories. A consistent editorial system."
      }
    ]
  },
  {
    slug: "AI-Assisted-Video-Creatives",
    num: "07",
    client: "Video Creatives",
    name: "AI-Assisted Video Creatives",
    shortDescription: "",
    role: "Marketing Designer — AI & Motion Creatives",
    roleDetails: "Marketing Designer — AI & Motion Creatives",
    deliverables: "Social Media reels and ads",
    servicesUsed: "Performance Marketing Creatives · Video & Motion Creatives · AI-Assisted Visual Exploration",
    skillsUsed: "Layout Design · Typography · Visual Hierarchy · Editorial Design",
    gallery: [],
    col1img1: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727658/25e5d82c-86f7-481e-8ff2-9a5096103ba1_e9lfpg.png",
    col1img2: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727656/e6c5415c-459c-4214-8f4c-9037de6c6976_ks5lns.png",
    col2img: "https://res.cloudinary.com/dycy3bsn4/image/upload/v1787727657/6c559249-2fa3-4bb1-b177-4cc30ed631cc_v9y6kq.png",
    
    contentBlocks: [
      {
        title: "Videos",
        align: "center",
        images: [
          "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787728419/IMG_5402_g98jyd.mp4",
          "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787728431/IMG_5409_dzqqt4.mp4",
          "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787728671/IMG_5478_qtv2sw.mp4",
          "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787728301/IMG_5497_p9ywnu.mp4",
          "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787728462/IMG_5723_co1yvf.mp4",
          "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787728283/IMG_5736_cbnvvx.mp4",
          "https://res.cloudinary.com/dycy3bsn4/video/upload/v1787728401/IMG_5771_xjwar1.mp4"
        ]
      }
    ]
  }
];
