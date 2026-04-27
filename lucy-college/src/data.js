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
import { HiAcademicCap, HiBeaker, HiBookOpen, HiOfficeBuilding } from "react-icons/hi";
import { MdModelTraining } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";


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
    { name: "About",
      submenu:[
        {
          title:"Who we are",
          items:[
          {name:"Lucy at a glance",path:"/LucyAtAGlance"},
          {name:"Our history",path:"/history"},
          {name:"Our mission and vision", path:"/VisionMission"},
          {name:"The shareholders", path:"/shareholders"},
        ]
        },
        {
          title:"LeaderShip and People",
          items:[
          {name:"President / Dean",path:"/president "},
          {name:"Faculty & Staff",path:"/faculty"},
         
          ]    
        },
        
         {
          title:"ACCREDITATION & RECOGNITION",
          items:[
          {name:"Certifications",path:"/Certifications "},
          {name:"Government Approval",path:"/faculty"},
          {name:"Partnerships",path:"/Partnerships"},
          ]    
        },

      ]
     },
    { name: "Admission", 
      submenu:[
        {
          title:"Admission Information",
          items:[
          {name:"Overview",path:"/Overview"},
          {name:"Calender",path:"/calender"},
          {name:"Admission", path:"/admission"},
          {name:"Academic Cases", path:"/academic-cases"},
          {name:"Tuition Service fees", path:"/tuition-Service-fees"},
         
        ]
        }, 
      ]

     },
    { name: "Courses", path: "/courses" },
    { name: "News and Events", path: "/news" },
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
export const features = [
  {
    icon: "building",
    school: "Modern Classrooms",
    description: "State-of-the-art classrooms equipped with modern teaching tools for interactive learning",
  },
  {
    icon: "lab",
    school: "Laboratories",
    description: "Well-equipped medical, computer, and science labs for practical and hands-on training",
  },
  {
    icon: "library",
    school: "Libraries",
    description: "Extensive library resources",
  },
  {
    icon: "training",
    school: "Practical Training Centers",
    description: "Dedicated centers",
  },
  {
    icon: "teacher",
    school: "Experienced Instructors",
    description: "Qualified faculty",
  },
  {
    icon: "cap",
    school: "Industry Partnerships",
    description: "Collaborations",
  },
];

export const links = [
    {
      link: "Overview",
      description:
        " The admission requirements vary across different programs due to differences in academic disciplines, skill expectations, and preparatory needs, with each program setting specific criteria to ensure applicants are well-prepared for their chosen field of study. However, the University maintains a consistent standard of academic quality across all programs, meaning that applicants to non-regular programs are evaluated using the same criteria as those applying to regular programs to ensure fairness and academic integrity. In addition, all applicants follow the same admissions process, which includes submission of applications, review of academic records, verification of supporting documents, and final selection based on institutional standards, ensuring transparency, equality, and equal opportunity for all students regardless of program type."
    },
    {
      link: "Id Card",
      description:
        "A student registering at the University is issued a non-transferable identification card with a unique and permanent registration number. The card, which is a very valuable document and which requires careful handling, is a means to access services and facilities in the University. The registration number, often called identification number, which should appear on all student documents, is required every time the student requests for any University services. Identification cards are issued to all new students free of charge. It should be renewed each regular, evening or Kiremt semester, and returned to the Registrar Office when the student discontinuous his/her studies or graduates. Issuance of ID cards needs one recently taken passport size photograph of the student with his/her name, father’s and grandfather’s names clearly written on the back of the photograph in English."
    },
    {
      link: "Requirements",
      description:
        "Applicants must submit all required documents such as transcripts, identification, and any program-specific requirements before the deadline."
    }
  ];
export const cases=[
  {
    link:"Academic calender",
    description:"An academic calendar refers to a structured schedule that lists all academic activities in chronological order for a single academic year. At the University, a normal semester consists of 16 weeks of classes followed by one week of break before examinations, while a summer or Kiremt semester usually runs for 8 to 12 weeks. The regular academic year begins in September and ends in June. Summer semesters begin on July 1 and end on September 7, during which students take a reduced course load compared to a normal semester. The duration of modular course offerings depends on the ECTS or credit value assigned to each course, while special programs may have flexible semester lengths based on their specific academic needs. Each year, the academic calendar is prepared by the College Registrar in consultation with the relevant academic administration and is approved by the Senate. The calendar also includes important academic activities such as registration periods, readmission, add and drop schedules, examination periods, and a minimum four-week inter-semester break to support academic planning and preparation."
  }

]
