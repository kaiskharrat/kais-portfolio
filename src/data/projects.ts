export type ProjectCategory = 'creative' | 'technology' | 'ecommerce'

export interface Project {
  title: string
  slug: string
  category: ProjectCategory
  shortDescription: string
  description: string
  coverImage: string          // placeholder — replace with real image path
  images: string[]
  technologies: string[]
  services?: string[]
  role: string
  year: string
  featured: boolean
  // Case study fields
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
    title: 'SmartHire',
    slug: 'smarthire',
    category: 'technology',
    shortDescription: 'AI-powered recruitment platform that automates candidate screening and shortlisting.',
    description:
      'SmartHire is a full-stack recruitment SaaS platform that uses AI to analyse CVs, match candidates to job requirements, and automate the shortlisting process — reducing time-to-hire significantly.',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI API', 'PostgreSQL', 'REST API'],
    role: 'Full-Stack Developer & Product Designer',
    year: '2024',
    featured: true,
    challenge:
      'Recruitment teams waste hours manually reviewing CVs that do not match requirements. The challenge was to build a system that could intelligently pre-screen candidates without losing qualified profiles.',
    approach:
      'Designed a multi-step pipeline: CV parsing → AI scoring against job criteria → ranked shortlist with reasoning. Built an intuitive dashboard for recruiters to review, approve or override AI decisions.',
    solution:
      'AI-assisted candidate scoring with a transparent scoring model that shows recruiters exactly why a candidate was ranked high or low. Integrated with email for automatic candidate communication.',
    results: '— [INSERT RESULTS PLACEHOLDER] —',
    metrics: [
      { label: 'Time-to-hire reduction', value: '[INSERT %]' },
      { label: 'CVs processed', value: '[INSERT NUMBER]' },
      { label: 'Match accuracy', value: '[INSERT %]' },
    ],
    githubUrl: 'https://github.com/kaiskharrat',
  },
  {
    title: 'Cura CRM',
    slug: 'cura-crm',
    category: 'technology',
    shortDescription: 'Custom e-commerce CRM & order management system integrated with delivery APIs.',
    description:
      'A full internal CRM built for Cura, a fast-growing e-commerce company. Handles order management, delivery tracking, agent performance, and customer communication — all in one system.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ],
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT', 'Docker'],
    role: 'Lead Full-Stack Developer',
    year: '2024',
    featured: true,
    challenge:
      'Off-the-shelf CRM tools did not fit the specific workflow of the business — order confirmation, delivery follow-up, agent assignment, and analytics all existed in separate tools.',
    approach:
      'Built a custom system from scratch with a modular architecture. Integrated two delivery company APIs for real-time order tracking. Designed an intuitive interface for agents with no technical background.',
    solution:
      'Single platform for order lifecycle management, from creation to delivery. Real-time delivery API sync, automated status updates, and a performance dashboard for management.',
    results: 'Deployed in production, used daily by the entire team.',
    metrics: [
      { label: 'Team members using CRM', value: '[INSERT NUMBER]' },
      { label: 'Orders managed', value: '[INSERT NUMBER]' },
      { label: 'Delivery rate', value: '[INSERT %]' },
    ],
    githubUrl: 'https://github.com/kaiskharrat',
  },
  {
    title: 'Automation Workflow System',
    slug: 'automation-system',
    category: 'technology',
    shortDescription: 'n8n-based automation connecting Meta Ads, CRM, delivery APIs and reporting.',
    description:
      'A series of automation workflows built with n8n that connects Meta Ads data, order management, delivery status and business reporting into a single automated pipeline.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    ],
    technologies: ['n8n', 'Meta Ads API', 'REST APIs', 'Webhooks', 'AI APIs'],
    role: 'Automation Engineer',
    year: '2024',
    featured: false,
    challenge:
      'Manual processes for order confirmation, ad reporting, and delivery follow-up were taking hours daily and causing errors.',
    approach:
      'Mapped every manual process and rebuilt it as an automated workflow. Used n8n as the central orchestration engine with webhooks and API integrations.',
    solution:
      'Fully automated pipeline from ad click to delivery confirmation. Automated reporting dashboards updated in real time.',
    results: '— [INSERT RESULTS PLACEHOLDER] —',
    metrics: [
      { label: 'Hours saved per week', value: '[INSERT]' },
      { label: 'Automated workflows', value: '[INSERT NUMBER]' },
    ],
  },
]

// ─── CREATIVE PROJECTS ────────────────────────────────────────────────────────

export const creativeProjects: Project[] = [
  {
    title: 'Brand Identity — [Client Name]',
    slug: 'brand-identity-project',
    category: 'creative',
    shortDescription: 'Complete brand identity: logo, visual system, typography and social media kit.',
    description:
      'Full brand identity design for [INSERT CLIENT], including logo design, colour system, typography, brand guidelines and social media visual kit.',
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=1200&q=80',
    ],
    technologies: [],
    services: ['Logo Design', 'Brand Guidelines', 'Typography', 'Colour System', 'Social Media Kit'],
    role: 'Brand Designer',
    year: '2024',
    featured: true,
    challenge: '[INSERT CHALLENGE PLACEHOLDER]',
    approach: '[INSERT APPROACH PLACEHOLDER]',
    solution: '[INSERT SOLUTION PLACEHOLDER]',
    results: '[INSERT RESULTS PLACEHOLDER]',
  },
  {
    title: 'E-commerce Creative Campaign',
    slug: 'ecommerce-creative-campaign',
    category: 'creative',
    shortDescription: 'Product visuals, video ads and Meta Ads creatives for an e-commerce launch.',
    description:
      'A full creative production for an e-commerce product launch — product photography direction, video editing, motion graphics and performance ad creatives tested across Meta Ads.',
    coverImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80',
    ],
    technologies: [],
    services: ['Video Editing', 'Premiere Pro', 'CapCut', 'Meta Ads Creatives', 'Product Photography'],
    role: 'Creative Director & Video Editor',
    year: '2024',
    featured: true,
    results: '— [INSERT METRICS: CPA, CTR, ROAS] —',
    metrics: [
      { label: 'CPA', value: '[INSERT]' },
      { label: 'CTR', value: '[INSERT %]' },
      { label: 'Videos produced', value: '[INSERT NUMBER]' },
    ],
  },
]

// ─── E-COMMERCE PROJECTS ──────────────────────────────────────────────────────

export const ecommerceProjects: Project[] = [
  {
    title: 'Cura — E-commerce Operations',
    slug: 'cura-ecommerce',
    category: 'ecommerce',
    shortDescription: 'Full e-commerce operations: Meta Ads management, CRM, team leadership and performance systems.',
    description:
      'Led the technology and growth side of Cura, a fast-growing e-commerce company in Sfax. Managed 18 Meta Ads accounts, built internal systems, led a team and drove performance marketing.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    ],
    technologies: ['Meta Ads API', 'Meta Pixel', 'n8n', 'Converty', 'CRM'],
    services: ['Performance Marketing', 'Meta Ads', 'E-commerce Operations', 'Team Management'],
    role: 'E-commerce & Systems Specialist',
    year: '2024',
    featured: true,
    challenge:
      'Scaling an e-commerce operation from a small setup to a structured, high-performance business while managing ads, operations, systems and creative simultaneously.',
    approach:
      'Built internal systems to automate repetitive operations. Created structured workflows for the team. Focused on reducing CPA through creative testing and audience optimisation.',
    solution:
      'Combination of custom CRM, automation workflows and structured Meta Ads strategy across 18 accounts.',
    results: '— [INSERT BUSINESS RESULTS] —',
    metrics: [
      { label: 'Ad accounts managed', value: '18' },
      { label: 'Average CPA', value: '[INSERT]' },
      { label: 'Delivery rate', value: '[INSERT %]' },
      { label: 'ROAS', value: '[INSERT]' },
      { label: 'Team size', value: '6' },
    ],
  },
  {
    title: 'Landing Page & Conversion System',
    slug: 'landing-page-conversion',
    category: 'ecommerce',
    shortDescription: 'High-converting landing page with creative testing, Meta Pixel events and conversion tracking.',
    description:
      'Designed and built a high-converting product landing page with full Meta Pixel integration, custom conversion events and A/B creative testing across ad sets.',
    coverImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=80',
    ],
    technologies: ['Next.js', 'Meta Pixel', 'Custom Events', 'Converty', 'A/B Testing'],
    services: ['Landing Page Design', 'Conversion Optimisation', 'Meta Pixel', 'Analytics'],
    role: 'Developer & Performance Marketer',
    year: '2024',
    featured: true,
    results: '— [INSERT CONVERSION RATE, CPA, ROAS] —',
    metrics: [
      { label: 'Conversion rate', value: '[INSERT %]' },
      { label: 'CPA', value: '[INSERT]' },
      { label: 'ROAS', value: '[INSERT]' },
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
