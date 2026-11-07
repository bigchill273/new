/**
 * Portfolio Constants & Data Configuration
 * 
 * Tailored for:
 * - "Build and Deploy a Modern Personal Portfolio with ReactJS and TailwindCSS"
 * - Future Interns: Full Stack Web Development – Task 1 (2026)
 */

// ==========================================
// TypeScript Interfaces & Types
// ==========================================

export interface NavLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly iconName: string;
}

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly roles: readonly string[];
  readonly tagline: string;
  readonly shortBio: string;
  readonly fullBio: readonly string[];
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly availability: string;
  readonly resumeUrl: string;
  readonly avatarUrl: string;
  readonly githubUsername: string;
  readonly linkedinUsername: string;
}

export interface HeroStat {
  readonly value: string;
  readonly label: string;
  readonly description?: string;
}

export interface SkillItem {
  readonly name: string;
  readonly level: "Beginner" | "Intermediate" | "Advanced" | "Proficient";
  readonly percentage: number;
  readonly icon: string;
  readonly description?: string;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly skills: readonly SkillItem[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
  readonly image: string;
  readonly liveUrl: string;
  readonly githubUrl: string;
  readonly featured: boolean;
  readonly category: "Full Stack" | "Frontend" | "Backend" | "UI/UX";
}

export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly companyUrl?: string;
  readonly location: string;
  readonly period: string;
  readonly isCurrent: boolean;
  readonly type: "Internship" | "Full-time" | "Freelance" | "Apprenticeship";
  readonly descriptions: readonly string[];
  readonly technologies: readonly string[];
}

export interface EducationItem {
  readonly id: string;
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly period: string;
  readonly grade?: string;
  readonly coursework: readonly string[];
}

export interface TestimonialItem {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly avatar: string;
  readonly quote: string;
}

export interface SocialLink {
  readonly name: string;
  readonly platform: "github" | "linkedin" | "twitter" | "email" | "discord";
  readonly url: string;
  readonly username: string;
  readonly iconName: string;
}

export interface ContactFormField {
  readonly name: string;
  readonly label: string;
  readonly type: "text" | "email" | "textarea";
  readonly placeholder: string;
  readonly required: boolean;
}

// ==========================================
// 1. Personal & Brand Information
// ==========================================

export const PERSONAL_INFO: PersonalInfo = {
  name: "Alex Morgan",
  title: "Full Stack Web Developer",
  roles: [
    "Full Stack Developer",
    "React & Node.js Specialist",
    "TailwindCSS Enthusiast",
    "Open Source Contributor",
  ],
  tagline: "Building scalable, high-performance web applications with modern design systems and clean architecture.",
  shortBio:
    "A self-driven Full Stack Developer passionate about translating complex requirements into seamless, interactive user interfaces and robust server-side APIs.",
  fullBio: [
    "Hello! I am a Full Stack Developer focusing on modern frontend and backend development with React, TypeScript, Tailwind CSS, Node.js, and MongoDB/MySQL.",
    "I prioritize writing clean, maintainable code, designing responsive component architectures, and delivering fluid user experiences. I take pride in building authentic projects that solve real-world problems.",
    "Currently looking to leverage my technical and creative skills in high-impact internship and full-stack software development roles.",
  ],
  email: "alex.morgan.dev@example.com",
  phone: "+91 99824 80494",
  location: "Jaipur, Rajasthan, India / Remote",
  availability: "Available for Internships & Full-Time Opportunities",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/src/assets/hero.png",
  githubUsername: "alexmorgan-dev",
  linkedinUsername: "alexmorgan-dev",
} as const;

// ==========================================
// 2. Navigation Configuration
// ==========================================

export const NAV_LINKS: readonly NavLink[] = [
  { id: "home", label: "Home", href: "#home", iconName: "Home" },
  { id: "about", label: "About", href: "#about", iconName: "User" },
  { id: "skills", label: "Skills", href: "#skills", iconName: "Code2" },
  { id: "projects", label: "Projects", href: "#projects", iconName: "FolderGit2" },
  { id: "experience", label: "Experience", href: "#experience", iconName: "Briefcase" },
  { id: "contact", label: "Contact", href: "#contact", iconName: "Mail" },
] as const;

// ==========================================
// 3. Hero Section Statistics
// ==========================================

export const HERO_STATS: readonly HeroStat[] = [
  {
    value: "1+",
    label: "Years Experience",
    description: "Hands-on software development & continuous learning",
  },
  {
    value: "12+",
    label: "Projects Built",
    description: "Full-stack apps, interactive components & REST APIs",
  },
  {
    value: "15+",
    label: "Tech Mastered",
    description: "React, Node.js, Tailwind, TypeScript, SQL/NoSQL",
  },
  {
    value: "500+",
    label: "GitHub Commits",
    description: "Active contributor to personal and open-source repos",
  },
] as const;

// ==========================================
// 4. Skills & Tech Stack
// ==========================================

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Crafting modern, accessible, and responsive user interfaces",
    skills: [
      { name: "React.js", level: "Advanced", percentage: 90, icon: "Atom", description: "Hooks, Context, Component Design, Virtual DOM" },
      { name: "TypeScript", level: "Intermediate", percentage: 80, icon: "FileCode", description: "Type Safety, Generics, Interfaces" },
      { name: "JavaScript (ES6+)", level: "Advanced", percentage: 92, icon: "Zap", description: "Async/Await, Closures, DOM Manipulation" },
      { name: "Tailwind CSS", level: "Advanced", percentage: 94, icon: "Palette", description: "Responsive layouts, Dark Mode, Custom Themes" },
      { name: "HTML5 & Semantic Web", level: "Advanced", percentage: 96, icon: "Globe", description: "SEO, Accessibility (a11y), Semantic Tags" },
      { name: "CSS3 / Modern CSS", level: "Advanced", percentage: 90, icon: "Layout", description: "Flexbox, Grid, Glassmorphism, Animations" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Designing RESTful APIs and server-side business logic",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 82, icon: "Server", description: "Event Loop, Express Server, Microservices" },
      { name: "Express.js", level: "Intermediate", percentage: 85, icon: "Layers", description: "Routing, Middleware, Error Handling" },
      { name: "RESTful APIs", level: "Advanced", percentage: 88, icon: "Network", description: "API Design, JWT Authentication, Endpoints" },
      { name: "EmailJS / Nodemailer", level: "Proficient", percentage: 85, icon: "Send", description: "Automated notifications, contact inquiries" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "Structuring, querying, and managing relational & document databases",
    skills: [
      { name: "MongoDB", level: "Intermediate", percentage: 80, icon: "Database", description: "Mongoose schemas, aggregation pipelines, CRUD" },
      { name: "MySQL", level: "Intermediate", percentage: 78, icon: "Table", description: "Relational data design, joins, normalization" },
      { name: "PostgreSQL", level: "Beginner", percentage: 70, icon: "Boxes", description: "ACID compliance, relational queries" },
    ],
  },
  {
    id: "tools",
    title: "Dev Tools & Practices",
    description: "Version control, build tools, testing, and modern workflows",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 90, icon: "GitBranch", description: "Branching, PRs, Merge Conflicts, Actions" },
      { name: "Vite & Bun", level: "Advanced", percentage: 88, icon: "Cpu", description: "Lightning-fast bundlers, ESM, HMR" },
      { name: "Postman", level: "Intermediate", percentage: 84, icon: "CheckCircle", description: "API testing, collections, environment variables" },
      { name: "Responsive Design", level: "Advanced", percentage: 95, icon: "Smartphone", description: "Mobile-first, cross-browser compatibility" },
    ],
  },
] as const;

// Flattened list for quick access or skill tag clouds
export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((category) => category.skills);

// ==========================================
// 5. Featured Projects
// ==========================================

export const PROJECTS: readonly Project[] = [
  {
    id: "shopverse-ecommerce",
    title: "ShopVerse - Full Stack E-Commerce",
    subtitle: "Complete Online Storefront with Cart & Payment Flow",
    description:
      "A responsive e-commerce web platform featuring product catalog filtering, real-time cart state management, user authentication, and checkout simulation.",
    highlights: [
      "Custom product filtering & category navigation",
      "Persistent shopping cart with local storage & state management",
      "Stripe payment gateway sandbox integration",
      "RESTful API endpoints for inventory and orders",
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://shopverse-demo.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/shopverse-ecommerce",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "taskflow-kanban",
    title: "TaskFlow - Agile Kanban SaaS",
    subtitle: "Collaborative Project Management & Productivity Tool",
    description:
      "A sleek productivity dashboard enabling agile teams to organize tasks across sprints, track deadlines, assign priorities, and visualize progress in real-time.",
    highlights: [
      "Fluid drag-and-drop task workflow with status progression",
      "Interactive data charts and completion velocity metrics",
      "Form validation with Zod and clean modal dialogs",
      "Responsive glassmorphism UI with dark theme support",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Zod", "Lucide React"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://taskflow-demo.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/taskflow-kanban",
    featured: true,
    category: "Frontend",
  },
  {
    id: "dev-portfolio",
    title: "Modern Interactive Portfolio",
    subtitle: "Personal Digital Resume & Showcase Website",
    description:
      "The exact portfolio application you are browsing, engineered with React 19, Tailwind CSS v4, Lucide icons, responsive navigation, and EmailJS contact delivery.",
    highlights: [
      "Tailwind v4 styling with custom CSS variables & glass effects",
      "Interactive contact form with automated email validation",
      "Smooth scroll sections with sticky navigation header",
      "100% responsive across desktop, tablet, and mobile displays",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "EmailJS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://alexmorgan-portfolio.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/personal-portfolio",
    featured: true,
    category: "Frontend",
  },
  {
    id: "devpulse-community-blog",
    title: "DevPulse - Tech Community & Blog",
    subtitle: "Markdown Publishing & Developer Discussion Engine",
    description:
      "A full-stack publishing platform allowing developers to create technical tutorials, comment on articles, bookmark resources, and explore trending tech topics.",
    highlights: [
      "Markdown editor with live preview and code syntax highlighting",
      "Relational SQL schema for users, articles, tags, and comments",
      "Search and tag indexing for quick discoverability",
      "Secure session handling and role-based permissions",
    ],
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://devpulse-demo.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/devpulse-blog",
    featured: false,
    category: "Full Stack",
  },
] as const;

// ==========================================
// 6. Experience & Education Timeline
// ==========================================

export const EXPERIENCES: readonly ExperienceItem[] = [
  {
    id: "exp-future-interns",
    role: "Full Stack Web Developer Intern",
    company: "Future Interns",
    companyUrl: "https://futureinterns.com",
    location: "Remote",
    period: "2026 - Present",
    isCurrent: true,
    type: "Internship",
    descriptions: [
      "Building and deploying responsive, modern web applications following industry-standard development workflows.",
      "Developed an interactive developer portfolio utilizing ReactJS, Tailwind CSS, TypeScript, and client-side validation.",
      "Architected clean, modular component structures with reusable UI tokens and accessible interactive elements.",
      "Collaborated on full-stack web initiatives covering frontend UI, backend endpoints, and database integration.",
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Git", "Vite"],
  },
  {
    id: "exp-freelance",
    role: "Freelance Frontend Developer",
    company: "Self-Employed / Freelance",
    location: "Remote",
    period: "2024 - 2025",
    isCurrent: false,
    type: "Freelance",
    descriptions: [
      "Delivered custom, responsive websites and landing pages for small businesses and startup clients.",
      "Optimized Core Web Vitals, achieving 95+ Google Lighthouse scores across performance, accessibility, and SEO.",
      "Translated Figma and UI mockups into pixel-perfect React and Tailwind CSS components.",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Figma", "HTML5", "CSS3"],
  },
] as const;

export const EDUCATION: readonly EducationItem[] = [
  {
    id: "edu-btech",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Apex Institute of Technology",
    location: "Jaipur, Rajasthan",
    period: "2022 - 2026",
    grade: "8.6 / 10 CGPA",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Technologies & Architectures",
      "Operating Systems & Computer Networks",
      "Software Engineering Principles",
    ],
  },
] as const;

// ==========================================
// 7. Testimonials & Recommendations
// ==========================================

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    id: "test-1",
    name: "Priya Sharma",
    role: "Technical Lead",
    company: "InnovateX Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "Alex demonstrates an outstanding grasp of modern frontend development. Their attention to design fidelity, clean code organization, and responsive layout execution is remarkable for an early-career engineer.",
  },
  {
    id: "test-2",
    name: "David Chen",
    role: "Senior Full Stack Mentor",
    company: "TechBridge Academy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "An exceptional learner who consistently ships production-grade code. Alex tackles backend APIs and complex React state with equal confidence and genuine curiosity.",
  },
  {
    id: "test-3",
    name: "Rohan Verma",
    role: "Product Designer",
    company: "Studio Craft",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Collaborating with Alex was a breath of fresh air. They bring designs to life with smooth animations, high aesthetic sensitivity, and immaculate responsiveness.",
  },
] as const;

// ==========================================
// 8. Social Links & Contact Details
// ==========================================

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: "GitHub",
    platform: "github",
    url: "https://github.com/alexmorgan-dev",
    username: "@alexmorgan-dev",
    iconName: "Github",
  },
  {
    name: "LinkedIn",
    platform: "linkedin",
    url: "https://linkedin.com/in/alexmorgan-dev",
    username: "in/alexmorgan-dev",
    iconName: "Linkedin",
  },
  {
    name: "Twitter / X",
    platform: "twitter",
    url: "https://twitter.com/alexmorgan_dev",
    username: "@alexmorgan_dev",
    iconName: "Twitter",
  },
  {
    name: "Email",
    platform: "email",
    url: "mailto:alex.morgan.dev@example.com",
    username: "alex.morgan.dev@example.com",
    iconName: "Mail",
  },
] as const;

export const CONTACT_INFO = {
  heading: "Let's Connect & Build Something Great",
  subheading:
    "Whether you have an internship opportunity, a freelance project, or simply want to chat about web technology, feel free to drop a message!",
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
  availabilityNotice: "Currently accepting full-time entry roles & internship opportunities for 2026.",
  responseGuarantee: "Usually responds within 24 hours.",
} as const;

export const CONTACT_FORM_FIELDS: readonly ContactFormField[] = [
  {
    name: "name",
    label: "Your Full Name",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Internship Opportunity / Project Inquiry",
    required: true,
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea",
    placeholder: "Hi Alex, I came across your portfolio and would like to discuss...",
    required: true,
  },
] as const;

// ==========================================
// 9. Task 1 (Future Interns) Specific Metadata
// ==========================================

export const INTERNSHIP_TASK_INFO = {
  program: "Future Interns",
  track: "Full Stack Web Development",
  taskNumber: 1,
  year: 2026,
  title: "Build a Personal Professional Portfolio Website",
  hashtags: ["#FutureInterns", "#webdevelopment", "#portfolio", "#reactjs", "#tailwindcss"],
  submissionGuidelines: [
    "Clean, responsive, mobile-first design across all devices",
    "Functional contact form with email validation",
    "Real projects with working live demos and GitHub repository links",
    "Authentic bio and technical skill representation",
  ],
  supportContact: {
    address: "New Rajeev Nagar, Vidhyadhar Nagar, Jaipur, RJ 302039, India",
    phone: "+91 99824 80494",
    email: "contact@futureinterns.com",
    businessEmail: "business@futureinterns.com",
  },
} as const;

// ==========================================
// 10. Footer Information
// ==========================================

export const FOOTER_INFO = {
  copyrightText: `© ${new Date().getFullYear()} Alex Morgan. All rights reserved.`,
  tagline: "Designed & Built with ReactJS, TailwindCSS, and Passion.",
  quickLinks: NAV_LINKS,
} as const;

