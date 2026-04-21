import nursing from "./assets/nursing.jpg";
import pharmacy from "./assets/pharmacy.jpg";
import accounting from "./assets/accounting.jpg";
import laboratory from "./assets/laboratory.jpg";
import management from "./assets/management.jpg";
import resource from "./assets/resource.jpg";
import development from "./assets/development.jpg";
import medical from './assets/medical.png';
import financial from './assets/financial.png';
import pc from './assets/pc.png';
import Category from "./Components/Category";


import thinking from "./assets/thinking.png";
import academic from "./assets/academic.png";
import collaboration from "./assets/collaboration.png";
import inclusivity from "./assets/inclusivity.png";
import honesty from "./assets/honesty.png";
import expertise from "./assets/expertise.png";
export const courses = [
  {
    id: 1,
    image: nursing,
    school: "Nursing",
    description: "Professional nursing education with strong clinical practice.",
    fullDescription:
      "The Nursing program is designed to prepare compassionate and skilled healthcare professionals who can deliver high-quality patient care. The program combines theoretical knowledge with extensive clinical practice in hospitals and healthcare centers.",
    duration: "4 Years",
    levels: ["Degree"],
    modes: ["regular"],
    category: "medical",
    skills: [
      "Patient care",
      "Medical ethics",
      "Clinical procedures",
      "Emergency response",
      "Health assessment"
    ],
    
  },

  {
    id: 2,
    image: pharmacy,
    school: "Pharmacy",
    description: "Study pharmaceutical sciences and patient care.",
    fullDescription:
      "The Pharmacy program focuses on the study of medicines, drug development, and their safe use. Students learn how to prepare, dispense, and manage medications while ensuring patient safety and effective treatment outcomes.",
    duration: "4 Years",
    levels: ["Degree"],
    modes: ["regular"],
    category: "medical",
    skills: [
      "Pharmacology",
      "Drug interaction",
      "Prescription handling",
      "Patient counseling",
      "Medication safety"
    ]
  },

  {
    id: 3,
    image: accounting,
    school: "Accounting and Finance",
    description: "Financial management and accounting principles.",
    fullDescription:
      "This program provides students with strong foundations in financial accounting, management accounting, and financial analysis. It prepares graduates for careers in finance, auditing, banking, and business management.",
    duration: "3–4 Years",
    levels: ["Degree", "Diploma"],
    modes: ["regular", "night"],
    category: "business",
    skills: [
      "Financial reporting",
      "Budgeting",
      "Auditing",
      "Taxation",
      "Financial analysis"
    ]
  },

  {
    id: 4,
    image: laboratory,
    school: "Medical Laboratory Science",
    description: "Laboratory diagnostics and medical testing.",
    fullDescription:
      "The Medical Laboratory Science program trains students to perform laboratory tests used in diagnosing diseases. Students gain practical skills in handling medical equipment, analyzing samples, and ensuring accurate test results.",
    duration: "4 Years",
    levels: ["Degree", "Diploma"],
    modes: ["regular"],
    category: "medical",
    skills: [
      "Lab testing",
      "Sample analysis",
      "Diagnostics",
      "Microscopy",
      "Medical equipment handling"
    ]
  },

  {
    id: 5,
    image: management,
    school: "Management",
    description: "Leadership and organizational management skills.",
    fullDescription:
      "The Management program focuses on developing leadership, strategic thinking, and organizational skills. It prepares students to manage teams, plan business strategies, and make effective decisions in organizations.",
    duration: "3–4 Years",
    levels: ["Degree"],
    modes: ["regular"],
    category: "business",
    skills: [
      "Leadership",
      "Strategic planning",
      "Decision making",
      "Team management",
      "Business communication"
    ]
  },

  {
    id: 6,
    image: resource,
    school: "Human Resource Management",
    description: "People management and organizational development.",
    fullDescription:
      "Human Resource Management focuses on recruiting, training, and managing employees in organizations. Students learn how to handle workplace relationships, employee performance, and organizational policies.",
    duration: "2–3 Years",
    levels: ["Diploma"],
    modes: ["regular", "night"],
    category: "business",
    skills: [
      "Recruitment",
      "Employee relations",
      "Performance management",
      "HR policies",
      "Conflict resolution"
    ]
  },

  {
    id: 7,
    image: development,
    school: "Web Development & Database Administration",
    description: "Modern web technologies and database systems.",
    fullDescription:
      "This program equips students with skills in building modern websites and managing databases. Students learn frontend and backend development, database design, and how to create scalable web applications.",
    duration: "2–3 Years",
    levels: ["Diploma"],
    modes: ["regular", "night"],
    category: "tech",
    skills: [
      "HTML, CSS, JavaScript",
      "React / Frontend frameworks",
      "Backend development",
      "Database management",
      "API development"
    ]
  }
];

export const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admission", path: "/admission" },
    { name: "News and Events", path: "/news" },
    { name: "Campus Life", path: "/campus" },
    { name: "Contact Us", path: "/contact" }
  ];

export const categories = [
        {
            school: "Medical",
            description: "Explore programs in nursing, and healthcare sciences, preparing future professionals for a healthier world.",
            image:medical
            
        },
        {
            school: "Business",
            description: "Learn management, finance, and entrepreneurship skills to lead in the corporate and startup world.",
          
            image:financial
        },
        {
            school: "Technology",
            description: "Build practical coding, software, and development skills to create innovative apps, websites, and solutions for the modern world.",
          
            image:pc
        }
    ];
export const values=[
            { img: academic, title: "Academics", desc: "Strong theory with real-world practical learning." },
            { img: thinking, title: "Critical Thinking", desc: "We shape innovative and ethical professionals." },
            { img: collaboration, title: "Collaboration", desc: "Teamwork builds great ideas and strong careers." },
            { img: inclusivity, title: "Inclusivity", desc: "Equal opportunity and respect for all." },
            { img: honesty, title: "Honesty", desc: "Integrity, transparency, and accountability." },
            { img: expertise, title: "Expertise", desc: "Industry-aligned learning with professionals." },
          ]   
