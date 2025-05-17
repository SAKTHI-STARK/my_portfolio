// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  raj,
  purie,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  project1,
  project2,
  project3,
  project5,
  project6,
  linkedin,
  github,
  python,
  django,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
   {
    id: "home",
    title: "Home",
    link: null,
  },
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "project",
    title: "project",
    link: null,
  },
   {
    id: "contact",
    title: "Contact",
    link: null,
  },
 
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
 
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Data Analyst",
    company_name: "Raj Software Solutions",
    icon: raj,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
    "Collecting, cleaning, and analyzing large datasets to derive actionable insights that support business decisions.",
  "Building and maintaining dashboards and visualizations using tools like Power BI, Tableau, or similar platforms.",
  "Utilizing statistical techniques and data mining tools to identify trends, patterns, and anomalies.",
  "Ensuring data accuracy, integrity, and consistency across different sources and systems.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Purie Robotics",
    icon: purie,
    iconBg: "#383E56",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Designing, developing, and maintaining scalable web applications using modern technologies such as HTML, CSS, JavaScript, and frameworks like React.js",
  "Collaborating with UI/UX designers, backend developers, and product teams to deliver high-quality, user-friendly web solutions.",
  "Participating in code reviews, debugging, and troubleshooting to maintain code quality and performance.",
  "Staying updated with the latest web development trends and best practices to continuously improve product offerings."
    ],
  },
  
] as const;


// Projects
export const PROJECTS = [
  {
    name: "CasePredict AI",
    description:
      "AI-based legal case outcome prediction systems are rapidly becoming powerful tools used by legal professionals, enabling them to analyze vast amounts of case data and predict outcomes with high accuracy, ultimately enhancing decision-making and judicial efficiency.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/SAKTHI-STARK/AI-for-Legal-Case-Outcome-Prediction",
    
  },
  {
    name: "Price Checker",
    description:
      "A web application that compares product prices across various e-commerce sites, helping users find the best deals. It offers real-time updates, smart filters, price trend tracking, and personalized recommendations based on user preferences and shopping history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/SAKTHI-STARK/Web_scrapping",
   
  },
  {
    name: "MediPredict AI",
    description:
      "An AI-driven medical recommendation system using Django that enables users to input symptoms, analyze reports, and receive personalized health advice. Features include QR code login, patient history tracking, and smart diagnosis through machine learning integration.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "pyhton",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/SAKTHI-STARK/Medical-Recommendation-System",
    
  },
  {
    name: "PDF-Editor",
    description:
      "A user-friendly PDF editor application developed using Python with Tkinter and py2pdf, allowing users to create, edit, merge, and convert text into PDF files. It features an intuitive graphical interface for seamless file operations and efficient PDF management.",
    tags: [
      {
        name: "tkinter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "py2pdf",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/SAKTHI-STARK/PDF-EDITOR-APPLICATION",
    
  },
  {
    name: "Travel Advisor",
    description:
      "An AI-powered tour guide built with Flask, Python, and Ollama, offering interactive, real-time information about tourist spots, history, and directions enhancing travel experiences with smart, conversational assistance and personalized recommendations.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ollama",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/SAKTHI-STARK/Travel-recommendation-system",
    
  },
] as const;

export const SOCIALS = [
 
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sakthivelm003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appvb",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/SAKTHI-STARK",
  },
] as const;
