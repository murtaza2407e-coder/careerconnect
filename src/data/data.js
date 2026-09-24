export const categories = [
  { id: 1, name: "Software Development", icon: "💻", jobs: 42 },
  { id: 2, name: "UI/UX Design", icon: "🎨", jobs: 18 },
  { id: 3, name: "Marketing", icon: "📣", jobs: 25 },
  { id: 4, name: "Data Science", icon: "📊", jobs: 16 },
  { id: 5, name: "Human Resources", icon: "👥", jobs: 12 },
  { id: 6, name: "Finance", icon: "💰", jobs: 20 }
];

export const companies = [
  {
    id: 1,
    name: "TechNova Solutions",
    logo: "TN",
    location: "Karachi, Pakistan",
    industry: "Technology",
    openJobs: 12,
    description: "A growing technology company building modern digital products."
  },
  {
    id: 2,
    name: "PixelCraft Studio",
    logo: "PC",
    location: "Lahore, Pakistan",
    industry: "Design",
    openJobs: 7,
    description: "A creative studio focused on UI/UX and digital experiences."
  },
  {
    id: 3,
    name: "DataBridge Analytics",
    logo: "DB",
    location: "Islamabad, Pakistan",
    industry: "Data & Analytics",
    openJobs: 9,
    description: "Helping organizations make better decisions through data."
  },
  {
    id: 4,
    name: "GrowthWorks",
    logo: "GW",
    location: "Remote",
    industry: "Marketing",
    openJobs: 6,
    description: "A remote-first team helping businesses grow their online presence."
  }
];

export const jobs = [
  {
    id: 1,
    title: "Frontend React Developer",
    company: "TechNova Solutions",
    location: "Karachi, Pakistan",
    type: "Full-time",
    salary: "PKR 120,000 - 180,000",
    category: "Software Development",
    posted: "2 days ago",
    featured: true,
    description:
      "We are looking for a React developer to build responsive and user-friendly web applications.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    requirements: [
      "Good understanding of React fundamentals",
      "Experience with JavaScript and modern CSS",
      "Ability to work with reusable components",
      "Strong communication and problem-solving skills"
    ]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "PixelCraft Studio",
    location: "Lahore, Pakistan",
    type: "Full-time",
    salary: "PKR 90,000 - 140,000",
    category: "UI/UX Design",
    posted: "4 days ago",
    featured: true,
    description:
      "Create intuitive interfaces and engaging user experiences for web and mobile products.",
    skills: ["Figma", "Wireframing", "Prototyping", "UI Design"],
    requirements: [
      "Portfolio demonstrating UI/UX projects",
      "Strong knowledge of design principles",
      "Experience with Figma",
      "Ability to collaborate with developers"
    ]
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "DataBridge Analytics",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    salary: "PKR 100,000 - 160,000",
    category: "Data Science",
    posted: "1 week ago",
    featured: true,
    description:
      "Analyze business data and turn insights into practical recommendations.",
    skills: ["Excel", "SQL", "Power BI", "Python"],
    requirements: [
      "Knowledge of SQL and data analysis",
      "Experience with dashboards",
      "Strong analytical thinking",
      "Good communication skills"
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    company: "GrowthWorks",
    location: "Remote",
    type: "Full-time",
    salary: "PKR 80,000 - 130,000",
    category: "Marketing",
    posted: "3 days ago",
    featured: true,
    description:
      "Plan and execute digital campaigns across search engines and social media platforms.",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    requirements: [
      "Understanding of digital marketing fundamentals",
      "Experience with campaign analytics",
      "Good written communication",
      "Creative approach to campaigns"
    ]
  },
  {
    id: 5,
    title: "HR Coordinator",
    company: "TechNova Solutions",
    location: "Karachi, Pakistan",
    type: "Full-time",
    salary: "PKR 70,000 - 110,000",
    category: "Human Resources",
    posted: "5 days ago",
    featured: false,
    description:
      "Support recruitment, employee records, onboarding, and HR coordination activities.",
    skills: ["Recruitment", "Communication", "MS Office", "Coordination"],
    requirements: [
      "Bachelor's degree or equivalent",
      "Strong organizational skills",
      "Good communication",
      "Basic HR knowledge"
    ]
  },
  {
    id: 6,
    title: "Junior Financial Analyst",
    company: "GrowthWorks",
    location: "Remote",
    type: "Full-time",
    salary: "PKR 85,000 - 125,000",
    category: "Finance",
    posted: "1 week ago",
    featured: false,
    description:
      "Assist with financial reports, forecasting, budgeting, and business analysis.",
    skills: ["Excel", "Financial Analysis", "Reporting", "Accounting"],
    requirements: [
      "Basic financial analysis knowledge",
      "Strong Excel skills",
      "Attention to detail",
      "Good numerical reasoning"
    ]
  }
];

export const applications = [
  {
    id: 1,
    jobTitle: "Frontend React Developer",
    company: "TechNova Solutions",
    date: "September 20, 2026",
    status: "Under Review"
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    company: "PixelCraft Studio",
    date: "September 15, 2026",
    status: "Interview"
  },
  {
    id: 3,
    jobTitle: "Data Analyst",
    company: "DataBridge Analytics",
    date: "September 10, 2026",
    status: "Applied"
  }
];

export const profile = {
  name: "Muhammad Ahmed",
  title: "Frontend Developer",
  location: "Karachi, Pakistan",
  email: "ahmed@example.com",
  phone: "+92 300 1234567",
  about:
    "Frontend developer passionate about creating responsive, accessible, and user-friendly web applications.",
  skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Git"]
};