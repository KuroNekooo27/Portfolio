// Portfolio data configuration - edit this file to customize your portfolio

export const personalInfo = {
  name: "Ashley R. Villanueva",
  title: "Full-Stack MERN Developer",
  tagline: "Building accessible, high-performance web and mobile applications that solve real-world problems.",
  brandStatement:
    "Full-stack developer specializing in the MERN stack and mobile application development, turning complex problems into accessible, high-performance digital solutions.",
  email: "villanueva.ashley22@gmail.com",
  phone: "+63-947-226-7796",
  location: "Metro Manila, Philippines",
  social: {
    github: "https://github.com/KuroNekooo27",
    linkedin: "http://www.linkedin.com/in/ashleyvillanueva331827",
    twitter: "",
  },
  resumeUrl: "/resume.pdf",
};

export const aboutMe = {
  summary: [
    "Results-driven Full-Stack Developer with a BS in Information Technology (Mobile & Web Applications) and hands-on experience building production-grade applications using the MERN stack.",
    "During my internship as a Mobile Application Developer, I designed and shipped mobile applications using React Native, built RESTful APIs, and collaborated in Agile teams to deliver scalable solutions.",
    "I led a capstone project — a refreshable braille display system — from data analysis through full-stack development to project management, demonstrating both technical depth and leadership.",
  ],
  highlights: [
    { label: "Stack", value: "MERN" },
    { label: "Projects", value: "5+" },
    { label: "APIs Built", value: "15+" },
    { label: "Bugs Squashed", value: "50+" },
  ],
};

export const experiences = [
  {
    role: "Mobile Application Developer Intern",
    company: "Company Name",
    period: "Month Year – Month Year",
    description: [
      "Engineered and optimized cross-platform mobile applications using React Native and modern JavaScript (ES6+), improving load times and user experience across iOS and Android.",
      "Designed and developed RESTful APIs with Node.js and Express.js, enabling efficient client-server communication and supporting 100% of the application's data operations.",
      "Architected database schemas in MongoDB, implementing efficient indexing and data modeling practices for scalable data retrieval and storage.",
      "Integrated third-party APIs (payment gateways, mapping services, push notifications) to extend application capabilities, reducing custom development effort by ~30%.",
      "Identified and resolved 50+ bugs through systematic testing, debugging, and code reviews, contributing to a more stable product release.",
      "Collaborated with cross-functional Agile teams across 2-week sprint cycles, consistently delivering features on time.",
    ],
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Git", "Agile"],
  },
];

export const projects = [
  {
    title: "BRAILLIANT",
    subtitle: "Refreshable Braille Display System",
    description:
      "An accessible, full-stack web and mobile platform that powers a refreshable braille display for visually impaired students, bridging the gap between digital content and tactile learning.",
    role: "Data Analyst → Project Manager",
    highlights: [
      "Led a team of developers from concept to deployment after promotion based on technical contributions and leadership initiative",
      "Built the full backend using Node.js and Express.js, designing 15+ RESTful API endpoints",
      "Designed a normalized MongoDB database schema handling 1,000+ document operations efficiently",
      "Developed the React.js frontend with WCAG accessibility standards — screen-reader support, keyboard navigation, high-contrast UI",
      "Managed project delivery using Agile methodology with sprint planning, backlog grooming, and stakeholder demos",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    stack: "MERN Stack",
    impact: "End-to-end full-stack ownership, accessibility engineering, and leadership.",
    github: "",
    live: "",
    image: null,
    featured: true,
  },
  {
    title: "OPENCI",
    subtitle: "Field Agent Mobile Application",
    description:
      "A high-performance mobile application built for field agents to collect, sync, and manage operational data in real-time, even in low-connectivity environments.",
    role: "Mobile Developer",
    highlights: [
      "Developed a cross-platform mobile application using Flutter (Dart), delivering native-like experience on iOS and Android",
      "Integrated FastAPI backend services for authentication, data submission, and real-time status tracking",
      "Optimized API response handling and implemented local caching, reducing redundant network calls by ~40%",
      "Enhanced UX/UI based on field-agent feedback, reducing user-reported issues significantly",
      "Ensured seamless frontend-backend communication through structured request/response models",
    ],
    technologies: ["Flutter", "Dart", "FastAPI", "Python"],
    stack: "Flutter + FastAPI",
    impact: "Reliable tool for field operations, demonstrating mobile development proficiency beyond MERN.",
    github: "",
    live: "",
    image: null,
    featured: true,
  },
];

export const skills = {
  categories: [
    {
      name: "Core Stack",
      icon: "stack",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
      ],
    },
    {
      name: "Mobile Development",
      icon: "mobile",
      items: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
      ],
    },
    {
      name: "Languages",
      icon: "code",
      items: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Python", level: 70 },
        { name: "Java", level: 65 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 70 },
      ],
    },
    {
      name: "Backend & API",
      icon: "server",
      items: [
        { name: "REST API Design", level: 85 },
        { name: "FastAPI", level: 70 },
        { name: "Spring Boot", level: 55 },
        { name: "Django", level: 60 },
      ],
    },
    {
      name: "Tools & Practices",
      icon: "tools",
      items: [
        { name: "Git / GitHub", level: 85 },
        { name: "Postman", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Agile / Scrum", level: 80 },
      ],
    },
  ],
};

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];
