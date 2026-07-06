import {
  SkillCategory,
  Experience,
  Project,
  Certification,
  Achievement,
  NavItem,
  SocialLink,
} from "./types";

// ─── Navigation ──────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Naveen8803",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveen-varma88/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:naveenvarma8803@gmail.com",
    icon: "mail",
  },
];

// ─── Hero ────────────────────────────────────────────────────
export const heroData = {
  statement: "I build intelligent systems\nthat see, understand & learn.",
  name: "Naveen Varma",
  tagline: "Data Scientist & ML Engineer",
  titles: [
    "Computer Vision",
    "Deep Learning",
    "Data Analytics",
    "NLP Systems",
  ],
  resumeUrl: "/resume.pdf",
};

// ─── About ───────────────────────────────────────────────────
export const aboutData = {
  narrative: [
    `I'm fascinated by the intersection of data and intelligence. From translating sign language in real time to optimizing factory operations with analytics — I love turning complex problems into elegant, working systems.`,
    `I spend my time building computer-vision and NLP systems, digging through messy datasets, and shipping projects end to end — from model training to deployed web apps.`,
  ],
  techStack: [
    "Python", "TensorFlow", "OpenCV", "MediaPipe", "Flask",
    "Pandas", "NumPy", "Scikit-learn", "Django", "SQL",
    "Matplotlib", "Seaborn", "Streamlit", "Docker", "Git",
  ],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 78 },
      { name: "SQL", level: 85 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Data & ML",
    icon: "brain",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Scikit-learn", level: 82 },
      { name: "TensorFlow", level: 78 },
      { name: "Machine Learning", level: 85 },
      { name: "EDA", level: 88 },
    ],
  },
  {
    title: "Visualization",
    icon: "bar-chart-3",
    skills: [
      { name: "Matplotlib", level: 88 },
      { name: "Seaborn", level: 85 },
      { name: "Plotly", level: 78 },
      { name: "Power BI", level: 70 },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: "globe",
    skills: [
      { name: "Flask", level: 80 },
      { name: "Django", level: 78 },
      { name: "HTML/CSS", level: 82 },
      { name: "OpenCV", level: 80 },
      { name: "MediaPipe", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "MS Excel", level: 82 },
      { name: "Docker", level: 65 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 68 },
    ],
  },
];

// ─── Experience ──────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    title: "AI/ML Intern",
    company: "Datavalley",
    location: "Vijayawada, India",
    period: "May — Jul 2025",
    type: "internship",
    description: [
      "Built and tuned ML classification models with optimized hyperparameters.",
      "Shipped interactive Streamlit dashboards to put model results in front of stakeholders.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "R K Metal Works",
    location: "Vijayawada, India",
    period: "May — Jun 2023",
    type: "internship",
    description: [
      "Analyzed factory production data to surface bottlenecks and scrap-utilization opportunities, then worked cross-functionally to act on them.",
    ],
    metrics: [
      { value: "15%", label: "efficiency gain" },
      { value: "₹1.5L", label: "saved via scrap optimization" },
      { value: "30%", label: "fewer delays" },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "samvak",
    title: "Samvak",
    shortTitle: "Samvak",
    description:
      "Real-time sign language translation powered by Computer Vision and LSTM deep learning models.",
    longDescription:
      "A bidirectional AI translator for Indian Sign Language — converts hand gestures to speech and spoken words back to signs.",
    techStack: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Flask", "LSTM"],
    github: "https://github.com/Naveen8803",
    liveDemo: "https://samvak.onrender.com",
    previewImage: "/samvak-preview.png",
    highlights: [
      "Real-time gesture classification with normalized MediaPipe landmarks.",
      "Bidirectional: speech-to-sign and sign-to-text.",
      "Multilingual output across 8 languages.",
    ],
    category: "AI / Computer Vision",
    featured: true,
    problem: "Hearing-impaired individuals face substantial communication barriers with non-signers, limiting access and opportunities.",
    solution: "A bidirectional translator that converts sign coordinates to synthesized vocal output, and incoming speech into sign sequences.",
    architecture: "MediaPipe landmark coordinates feed an LSTM network for gesture classification, served via a lightweight Flask API.",
    challenges: "Handling speed/lighting variances. Wrist coordinate normalization solved illumination and scaling variance.",
    futureScope: "Continuous sentence translation and porting logic to client-side WebGPU models.",
  },
  {
    id: "food-donation",
    title: "Food Donation Platform",
    shortTitle: "Food Donation",
    description:
      "Connecting surplus food from restaurants with NGOs through an automated logistics matching system.",
    longDescription:
      "A full-stack platform that reduces urban food waste by intelligently matching donors with nearby volunteers and NGOs.",
    techStack: ["Django", "MySQL", "Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Naveen8803",
    liveDemo: "https://food-donation-xqo3.onrender.com",
    previewImage: "/food-donation-preview.png",
    highlights: [
      "Role-based dashboards for donors, NGOs, and administrators.",
      "Automated matching engine routing meals to nearest volunteers.",
    ],
    category: "Full Stack",
    featured: true,
    problem: "Excess food goes to waste at restaurants while nearby communities face food shortages.",
    solution: "A smart matching app scheduling pickups and routing surplus meals directly to local NGOs.",
    architecture: "Django MVC backend utilizing a relational MySQL schema and secure user roles.",
    challenges: "Matching donors with NGOs in real-time to preserve food quality. We implemented geolocation sorting based on zip codes.",
    futureScope: "Integrating maps routing logic for volunteer pickup optimization.",
  },
  {
    id: "real-estate",
    title: "Brazilian Real Estate Market Analysis",
    shortTitle: "Real Estate Analysis",
    description:
      "Comprehensive analysis of 21,000+ Brazilian property records to identify location-based pricing patterns and investment insights.",
    longDescription:
      "An in-depth exploratory data analysis project that analyzed over 21,000 property records from the Brazilian real estate market, uncovering pricing trends, location-based patterns, and actionable investment recommendations.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    github: "https://github.com/Naveen8803",
    highlights: [
      "Analyzed 21,000+ property records using Pandas and visualization libraries",
      "Performed data cleaning, feature engineering, and trend analysis",
      "Identified location-based pricing patterns to support investment decisions",
    ],
    category: "Data Analysis",
    featured: false,
  },
  {
    id: "supermarket",
    title: "Supermarket Sales Analysis",
    shortTitle: "Sales Analysis",
    description:
      "Sales forecasting and customer segmentation analysis using Python to identify purchasing patterns and drive business recommendations.",
    longDescription:
      "A comprehensive sales analysis project focusing on customer segmentation and sales forecasting to uncover purchasing patterns and provide data-driven business recommendations.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Naveen8803",
    highlights: [
      "Performed sales forecasting using Python and Pandas",
      "Applied customer segmentation techniques to identify purchasing patterns",
      "Created visualizations to present insights and business recommendations",
    ],
    category: "Data Analysis",
    featured: false,
  },
];



// ─── Certifications ──────────────────────────────────────────
export const certifications: Certification[] = [
  {
    title: "Java Programming",
    issuer: "NPTEL",
    icon: "award",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    icon: "award",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    icon: "award",
  },
  {
    title: "Certified Advanced Automation Professional",
    issuer: "Automation Anywhere",
    icon: "award",
  },
];

// ─── Achievements ────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    metric: "15%",
    label: "Efficiency Improvement",
    description: "Improved operational efficiency through data analysis at R K Metal Works",
    icon: "trending-up",
  },
  {
    metric: "8",
    label: "Languages Supported",
    description: "Multilingual output in Samvak sign language translator",
    icon: "languages",
  },
  {
    metric: "21K+",
    label: "Records Analyzed",
    description: "Property records analyzed in Brazilian Real Estate project",
    icon: "database",
  },
];

// ─── Contact ─────────────────────────────────────────────────
export const contactData = {
  email: "naveenvarma8803@gmail.com",
  phone: "+91 7901695716",
  location: "Vijayawada, India",
  linkedin: "https://www.linkedin.com/in/naveen-varma88/",
  github: "https://github.com/Naveen8803",
};
