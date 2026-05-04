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

  {
    name: "About",
    submenu: [
      {
        title: "Who we are",
        items: [
          { name: "Lucy at a glance", path: "/LucyAtAGlance" },
          {name:"about",path:"/about"},
          { name: "Our history", path: "/history" },
          { name: "Our mission and vision", path: "/VisionMission" },
          { name: "The shareholders", path: "/shareholders" }
        ]
      },
      {
        title: "Leadership and People",
        items: [
          { name: "President / Dean", path: "/president" },
          { name: "Faculty & Staff", path: "/faculty" }
        ]
      },
      {
        title: "Accreditation & Recognition",
        items: [
          { name: "Certifications", path: "/Certifications" },
          { name: "Government Approval", path: "/government-approval" },
          { name: "Partnerships", path: "/Partnerships" }
        ]
      }
    ]
  },

  {
    name: "Admission",
    submenu: [
      {
        title: "Admission Information",
        items: [
          { name: "Overview", path: "/Overview" },
          { name: "Admission", path: "/admission" },
          { name: "Academic Cases", path: "/academic-cases" },
          { name: "Tuition Service Fees", path: "/tuition-service-fees" }
        ]
      }
    ]
  },

  {
    name: "Academics",
    submenu: [
      {
        title: "Academic Structure",
        items: [
          { name: "Departments", path: "/departments" },
          { name: "Registrar Office", path: "/registrar-office" },
          { name: "Student Statistics", path: "/student-statistics" },
          { name: "Facilities", path: "/facilities" }
        ]
      },
      {
        title: "Academic Life",
        items: [
          { name: "Academic Calendar", path: "/calendar" },
          { name: "Academic Regulations", path: "/academic-regulations" },
          { name: "Achievements", path: "/achievements" },
          { name: "Graduation", path: "/graduation" },
          { name: "Alumni", path: "/alumni" }
        ]
      }
    ]
  },

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
export const cases = [
  {
    link: "Academic Calendar",
    content: [
      {
        type: "text",
        value:
          "An academic calendar refers to a structured schedule that lists all academic activities in chronological order for a single academic year."
      },
      {
        type: "text",
        value:
          "Without prejudice to different program structures, a normal semester at the University consists of 16 weeks of classes followed by one week of break before examinations. Some programs may also include summer or modular course offerings depending on academic needs."
      },
      {
        type: "list",
        items: [
          "Registration periods",
          "Add and drop schedules",
          "Examination periods",
          "Semester breaks",
          "Readmission schedules",
          "Academic deadlines and events"
        ]
      },
      {
        type: "text",
        value:
          "The academic calendar is prepared by the College Registrar Office in consultation with academic units and is approved by the University Senate."
      }
    ]
  },

  {
    link: "Registration",
    content: [
      {
        type: "text",
        value:
          "Registration is the official process through which students enroll in modules or courses for a semester and activate their academic status."
      },
      {
        type: "list",
        items: [
          "Submission of required academic and personal documents",
          "Completion of online or physical registration procedures",
          "Payment of tuition or required fees",
          "Selection of courses based on program structure",
          "Final confirmation of registration at the registrar office"
        ]
      },
      {
        type: "text",
        value:
          "Students who fail to complete registration within the specified period may face academic consequences or restrictions from accessing university services."
      }
    ]
  },

  {
    link: "Assessments and Examinations",
    content: [
      {
        type: "text",
        value:
          "Student learning is assessed using a combination of continuous assessment and final examinations to ensure fair, consistent, and comprehensive evaluation of academic performance."
      },
      {
        type: "list",
        items: [
          "Continuous assessments such as quizzes, tests, assignments, and presentations",
          "Midterm examinations conducted during the semester",
          "Final examinations (written, oral, or practical depending on the course)",
          "Laboratory and practical assessments where applicable"
        ]
      },
      {
        type: "text",
        value:
          "The final grade is determined by combining continuous assessment results and final examination results, where the final examination shall not carry more than 50% of the total weight."
      },
      {
        type: "text",
        value:
          "Examinations may be written, oral, or practical depending on the nature of the module or course. In cases of oral examinations, instructors must maintain written records of student performance and grading justification."
      },
      {
        type: "list",
        items: [
          "Students must follow all examination rules strictly",
          "Violation of examination rules leads to disciplinary action",
          "Make-up examinations are allowed only under valid medical or emergency conditions",
          "Students must sign attendance sheets before leaving the examination hall"
        ]
      }
    ]
  },

  {
    link: "Grading System",
    content: [
      {
        type: "text",
        value:
          "The University uses a standardized grading system based on letter grades and grade points."
      },
      {
        type: "table",
        headers: ["Raw Mark", "Grade Point", "Letter Grade", "Status Description"],
        rows: [
          ["90–100", "4.00", "A+", "Excellent"],
          ["85–89", "4.00", "A", "Excellent"],
          ["80–84", "3.75", "A-", "Very Good"],
          ["75–79", "3.50", "B+", "Very Good"],
          ["68–74", "3.00", "B", "Good"],
          ["65–67", "2.75", "B-", "Good"],
          ["60–64", "2.50", "C+", "Satisfactory"],
          ["50–59", "2.00", "C", "Satisfactory"],
          ["45–49", "1.75", "C-", "Low Performance"],
          ["40–44", "1.00", "D", "Very Poor"],
          ["Below 40", "0.00", "F", "Fail"]
        ]
      }
    ]
  },

  {
    link: "Discontinuing Study",
    content: [
      {
        type: "text",
        value:
          "A student may be required to discontinue studies due to academic, disciplinary, or personal reasons for at least one semester."
      },
      {
        type: "text",
        value:
          "Discontinuation may occur under dismissal, dropout, or formal withdrawal conditions depending on the student’s academic status."
      },

      {
        type: "list",
        items: [
          "Dismissal due to academic failure or poor performance",
          "Voluntary dropout after consultation with academic advisors",
          "Formal withdrawal through official university procedures",
          "Eligibility for readmission depends on proper clearance and approval"
        ]
      },

      {
        type: "text",
        value:
          "Students who are dismissed must formally withdraw from the university and may be considered for readmission based on institutional rules."
      },

      {
        type: "text",
        value:
          "Dropout cases require consultation with academic advisors, and unjustified dropout may lead to denial of future readmission."
      },

      {
        type: "text",
        value:
          "Withdrawal must be completed within the official time frame (usually within 8 weeks after the start of the semester) using the proper withdrawal forms."
      },

      {
        type: "text",
        value:
          "Clearance is mandatory for all students who discontinue studies, graduate, or complete an academic year. No academic documents will be issued without proper clearance."
      }
    ]
  },

  {
    link: "Graduation",
    content: [
      {
        type: "text",
        value:
          "Students must fulfill all academic requirements to qualify for graduation from their program."
      },

      {
        type: "list",
        items: [
          "Minimum CGPA of 2.00 for undergraduate programs",
          "Completion of all required ECTS/credit hours",
          "No failed mandatory courses or modules",
          "Satisfactory completion of program requirements",
          "Possible exit examination requirement depending on program"
        ]
      },

      {
        type: "text",
        value:
          "Graduate students must fulfill coursework, thesis, or dissertation requirements depending on their program type."
      },

      {
        type: "text",
        value:
          "A student is recommended for graduation only after all academic, administrative, and research requirements are successfully completed."
      }
    ]
  },

  {
    link: "Waiver of Rules",
    content: [
      {
        type: "text",
        value:
          "Minor academic regulations may be waived under exceptional circumstances through formal institutional procedures."
      },

      {
        type: "list",
        items: [
          "Cases are first reviewed by the Department Academic Committee",
          "Recommendations are forwarded to the College Academic Commission",
          "Final approval is given by the ASCRC (Academic Standards and Curriculum Review Committee)",
          "Direct student petitions to ASCRC are not accepted"
        ]
      },

      {
        type: "text",
        value:
          "The decision of the ASCRC is final and binding for all waiver requests."
      }
    ]
  }
];

export const whatweOffer = [
  {
    text: "Training and Internships",
    description:
      "We provide hands-on learning opportunities through internships and practical training in real-world settings, allowing students to apply their knowledge and gain valuable experience in their chosen fields.",
    Icon: HiAcademicCap,
    bgcolor: "bg-white",
    color: "text-gray-500",
    Subcolor:"text-black"
  },
  {
    text: "Industry-Relevant Curriculum",
    description:
      "Our curriculum is designed in collaboration with industry experts to ensure it meets the latest market demands and equips students with relevant skills and knowledge.",
    Icon: HiBeaker,
    bgcolor: "bg-blue-950",
    color: "text-blue-300",
    Subcolor:"text-white"
  },
  {
    text: "Experienced Faculty",
    description:
      "Our faculty members are experienced professionals and academics who bring real-world insights and expertise into the classroom, enriching the learning experience for our students.",
    Icon: HiBookOpen,
    bgcolor: "bg-white",
    color: "text-gray-500",
    Subcolor:"text-black"
  },
];