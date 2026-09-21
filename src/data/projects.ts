export type ProjectCategory = 'creative' | 'technology' | 'ecommerce'

export interface Project {
  title: string
  slug: string
  category: ProjectCategory
  shortDescription: string
  description: string
  coverImage: string
  images: string[]
  technologies: string[]
  services?: string[]
  role: string
  year: string
  featured: boolean
  challenge?: string
  approach?: string
  solution?: string
  results?: string
  metrics?: { label: string; value: string }[]
  liveUrl?: string
  githubUrl?: string
}

// ─── TECHNOLOGY PROJECTS ─────────────────────────────────────────────────────

export const technologyProjects: Project[] = [
  {
    title: 'TNBot',
    slug: 'tnbot',
    category: 'technology',
    shortDescription: 'SaaS tool that captures customer orders automatically from TikTok Live streams.',
    description:
      'TNBot is a real-time order capture platform built for TikTok Live sellers in Tunisia. It listens to live stream comments, extracts order data (name, quantity, phone number) and pushes it directly into a CRM dashboard — eliminating manual note-taking during live sales.',
    coverImage: '/projects/tnbot.png',
    images: ['/projects/tnbot.png'],
    technologies: ['Node.js', 'WebSocket', 'TikTok API', 'React', 'MySQL'],
    role: 'Full-Stack Developer & Product Owner',
    year: '2025',
    featured: true,
    liveUrl: 'https://tnbot.live',
    challenge:
      'Tunisian e-commerce sellers run live TikTok sales with hundreds of simultaneous comments. Manually capturing orders causes errors, missed customers and lost revenue.',
    approach:
      'Built a real-time WebSocket pipeline that connects to TikTok Live, reads incoming comments, applies NLP pattern matching to extract order intent, and populates a live CRM dashboard.',
    solution:
      'Live dashboard showing active viewers, orders captured, and revenue tracked in real time. Sellers can manage and confirm orders without leaving the stream.',
    results: 'Deployed and used by active TikTok sellers in Tunisia.',
    metrics: [
      { label: 'Orders captured (demo)', value: '521+' },
      { label: 'Revenue tracked', value: '18 803 DT' },
      { label: 'Live viewers tracked', value: '126' },
    ],
  },
  {
    title: 'ZenithGrowth Agency',
    slug: 'zenithgrowth',
    category: 'technology',
    shortDescription: 'Agency website for a UAE growth & commerce agency — Next.js, bilingual (EN/AR).',
    description:
      'Full website for ZenithGrowth, a UAE-based performance marketing and e-commerce agency. Built with Next.js, fully bilingual (English and Arabic), with a live Meta Ads dashboard mockup, case studies and a strategy call booking flow.',
    coverImage: '/projects/zenith.png',
    images: ['/projects/zenith.png'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n'],
    role: 'Full-Stack Developer & Designer',
    year: '2025',
    featured: true,
    liveUrl: 'https://zenithgrowth-agency-git-master-kais-kharrats-projects.vercel.app/en',
    challenge:
      'Build a premium agency site that communicates authority in the UAE market, supports both LTR and RTL layouts, and converts visitors into strategy call bookings.',
    approach:
      'Designed a dark, high-contrast layout with animated metrics. Implemented next-intl for full EN/AR i18n with automatic RTL layout switching.',
    solution:
      'Live dashboard UI showing real-looking Meta Ads metrics (ROAS 4.7x, -31% CPA), animated hero, bilingual routing and a direct Calendly booking integration.',
    results: 'Deployed and live on Vercel.',
    metrics: [
      { label: 'Languages', value: '2 (EN / AR)' },
      { label: 'Lighthouse score', value: '95+' },
    ],
  },
  {
    title: 'Davino Store',
    slug: 'davino',
    category: 'technology',
    shortDescription: 'Full e-commerce platform with multi-category store and custom admin panel.',
    description:
      'Davino is a full-stack e-commerce website built for a multi-category online store (clothing, electronics, health, kitchen). Includes a custom admin panel for product, order and inventory management — built from scratch without Shopify or WooCommerce.',
    coverImage: '/projects/davino.webp',
    images: ['/projects/davino.webp'],
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'REST API', 'JWT'],
    role: 'Full-Stack Developer',
    year: '2024',
    featured: true,
    liveUrl: 'https://davino.ovh',
    challenge:
      'Build a complete e-commerce platform from scratch that supports multiple product categories, an Arabic-first interface, and a custom admin panel for the store owner.',
    approach:
      'Designed a modular Angular frontend with full RTL support. Built a robust Spring Boot API for product, order and user management with JWT authentication.',
    solution:
      'Full shopping experience: product catalog, search, cart, checkout, order tracking and a complete admin dashboard for managing the entire store.',
    results: 'Live at davino.ovh.',
    metrics: [
      { label: 'Product categories', value: '6+' },
      { label: 'Stack', value: 'Angular + Spring Boot' },
    ],
  },
  {
    title: 'Ontej Academy',
    slug: 'ontej',
    category: 'technology',
    shortDescription: 'E-learning platform with 4 master class tracks: Video Editing, Design, Freelance, Content.',
    description:
      'Ontej is a full e-learning platform built for the Tunisian creator economy. Students can enroll in master class tracks — Video Editing (14 lessons), Graphic Design (17 lessons), Freelance (17 lessons) and Content Creation (5 lessons). Includes authentication, progress tracking and a video player.',
    coverImage: '/projects/ontej-1.webp',
    images: ['/projects/ontej-1.webp', '/projects/ontej-2.webp'],
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    role: 'Full-Stack Developer',
    year: '2024',
    featured: false,
    challenge:
      'Build a structured e-learning platform that handles course enrollment, video streaming and student progress for a non-technical Tunisian audience.',
    approach:
      'Built with Angular for a smooth SPA experience and Spring Boot for the backend API. Designed a clear course catalog UI with master class visual cards.',
    solution:
      'Platform with 4 course tracks, video lessons, enrollment flow and a student dashboard tracking completion per lesson.',
    results: 'Deployed and used for online course delivery.',
    metrics: [
      { label: 'Course tracks', value: '4' },
      { label: 'Total lessons', value: '53' },
      { label: 'Total content', value: '26h+' },
    ],
  },
  {
    title: 'Elco System',
    slug: 'elco-system',
    category: 'technology',
    shortDescription: 'Showcase website for a French construction & renovation company.',
    description:
      'Elco System is a showcase website built for a general construction and renovation company based in Fontenay-sous-Bois, France. The site presents services, past projects and contact information — designed to convert local visitors into quote requests.',
    coverImage: '/projects/elco.webp',
    images: ['/projects/elco.webp'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    role: 'Web Developer & Designer',
    year: '2023',
    featured: false,
    liveUrl: 'https://kaiskharrat.github.io/elcosystem/accueil',
    githubUrl: 'https://github.com/kaiskharrat/elcosystem',
    results: 'Live on GitHub Pages.',
    metrics: [
      { label: 'Market', value: 'France' },
      { label: 'Goal', value: 'Lead generation' },
    ],
  },
  {
    title: 'Cura CRM',
    slug: 'cura-crm',
    category: 'technology',
    shortDescription: 'Custom internal CRM and order management system for a fast-growing e-commerce company.',
    description:
      'A full internal CRM built for Cura, a fast-growing e-commerce company in Sfax. Handles order management, delivery tracking, agent performance, and customer communication — all in one system integrated with two delivery APIs.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'],
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT'],
    role: 'Lead Full-Stack Developer',
    year: '2024',
    featured: false,
    challenge:
      'Off-the-shelf CRM tools did not fit the specific workflow — order confirmation, delivery follow-up, agent assignment and analytics all existed in separate tools.',
    approach:
      'Built a custom system from scratch with modular architecture. Integrated two delivery company APIs for real-time tracking.',
    solution:
      'Single platform for order lifecycle management — from creation to delivery. Real-time delivery sync, automated status updates and a performance dashboard.',
    results: 'Deployed in production, used daily by the full team.',
    metrics: [
      { label: 'Team members', value: '6' },
      { label: 'Delivery APIs', value: '2 integrated' },
    ],
  },
]

// ─── CREATIVE PROJECTS ────────────────────────────────────────────────────────

export const creativeProjects: Project[] = [
  {
    title: 'Velora Paris — Creative & Store',
    slug: 'velora-paris',
    category: 'creative',
    shortDescription: 'Full e-commerce brand: store setup, product visuals and ad creatives for a French lingerie brand.',
    description:
      'Velora Paris is a French lingerie and shapewear brand. I handled the full setup: Shopify store, product pages, visual identity direction, product photography art direction and Meta Ads creatives. Built the brand from store to first sales.',
    coverImage: '/projects/velora-1.webp',
    images: ['/projects/velora-1.webp', '/projects/velora-2.webp'],
    technologies: [],
    services: ['Shopify Setup', 'Product Page Design', 'Meta Ads Creatives', 'Brand Direction', 'Video Editing'],
    role: 'E-commerce Developer & Creative Director',
    year: '2025',
    featured: true,
    liveUrl: 'https://veloraparis.shop',
    challenge:
      'Launch a lingerie brand from scratch on the French market — competitive niche with high creative expectations and a need for immediate conversion.',
    approach:
      'Designed a clean, premium Shopify store. Produced ad creatives focused on product quality and comfort messaging. Ran Meta Ads targeting French women.',
    solution:
      'Full Shopify store with optimised product pages, Velora brand identity, and a library of video and static creatives for Meta Ads.',
    results: 'Store live and generating sales on the French market.',
    metrics: [
      { label: 'Market', value: 'France' },
      { label: 'Platform', value: 'Shopify' },
    ],
  },
]

// ─── E-COMMERCE PROJECTS ──────────────────────────────────────────────────────

export const ecommerceProjects: Project[] = [
  {
    title: 'Cura — E-commerce Operations',
    slug: 'cura-ecommerce',
    category: 'ecommerce',
    shortDescription: 'Full e-commerce operations: Meta Ads management across 18 accounts, CRM and team leadership.',
    description:
      'Led the technology and growth side of Cura, a fast-growing e-commerce company in Sfax. Managed 18 Meta Ads accounts, built internal systems, led a team of 6 and drove performance marketing — from ad creative to delivery.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80'],
    technologies: ['Meta Ads API', 'Meta Pixel', 'n8n', 'Converty', 'CRM'],
    services: ['Performance Marketing', 'Meta Ads', 'E-commerce Operations', 'Team Management'],
    role: 'E-commerce & Systems Specialist',
    year: '2024 – Present',
    featured: true,
    challenge:
      'Scale an e-commerce operation while managing ads, operations, systems and creative simultaneously across multiple product lines.',
    approach:
      'Built internal systems to automate repetitive operations. Structured workflows for the team. Focused on CPA reduction through creative testing and audience optimisation.',
    solution:
      'Custom CRM + automation workflows + structured Meta Ads strategy across 18 accounts with weekly performance reporting.',
    results: 'High-volume operation running with a 6-person team.',
    metrics: [
      { label: 'Ad accounts managed', value: '18' },
      { label: 'Team size', value: '6' },
      { label: 'Automation workflows', value: '10+' },
    ],
  },
  {
    title: 'ZenithGrowth — Performance Marketing',
    slug: 'zenith-ecom',
    category: 'ecommerce',
    shortDescription: 'Performance marketing setup for UAE e-commerce clients — Meta Ads, ROAS 4.7x, CPA -31%.',
    description:
      'Growth and performance marketing operations for ZenithGrowth UAE clients. Meta Ads campaign setup, creative testing, audience segmentation and conversion tracking — targeting the UAE and GCC market.',
    coverImage: '/projects/zenith.png',
    images: ['/projects/zenith.png'],
    technologies: ['Meta Ads', 'Meta Pixel', 'Shopify', 'Analytics'],
    services: ['Performance Marketing', 'Meta Ads', 'CRO', 'Creative Testing'],
    role: 'Performance Marketing Specialist',
    year: '2025',
    featured: true,
    results: 'ROAS 4.7x, CPA reduced by 31%, +38% revenue growth.',
    metrics: [
      { label: 'ROAS', value: '4.7x' },
      { label: 'CPA reduction', value: '-31%' },
      { label: 'Revenue growth', value: '+38%' },
      { label: 'Market', value: 'UAE / GCC' },
    ],
  },
]

// ─── ALL PROJECTS ─────────────────────────────────────────────────────────────

export const allProjects: Project[] = [
  ...technologyProjects,
  ...creativeProjects,
  ...ecommerceProjects,
]

export const featuredProjects = allProjects.filter((p) => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return allProjects.filter((p) => p.category === category)
}
