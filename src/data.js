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
               levels: ["Degree"],
               modes: ["regular"],
               link:"/courses/nursing",
               category:"medical"
               },
               {
               id: 2,
               image: pharmacy,
               school: "Pharmacy",
               description: "Study pharmaceutical sciences and patient care.",
               levels: ["Degree"],
               modes: ["regular"],
               link:"/courses/pharmacy",
               category:"medical"
              },
  
              {
              id: 3,
              image: accounting,
              school: "Accounting and Finance",
              description: "Financial management and accounting principles.",
              levels: ["Degree", "Diploma"],
              modes: ["regular", "night"],
              link:"/courses/accounting",
              category:"business"
             },
{
             id: 4,
             image: laboratory,
             school: "Medical Laboratory Science",
             description: "Laboratory diagnostics and medical testing.",
             levels: ["Degree", "Diploma"],
             modes: ["regular"],
             link:"/courses/laboratory",
             category:"medical"
             },
             {
             id: 5,
             image: management,
             school: "Management",
             description: "Leadership and organizational management skills.",
             levels: ["Degree"],
             modes: ["regular"],
             link:"/courses/management",
             category:"business"
            },
            {
            id: 6,
            image: resource,
            school: "Human Resource Management",
            description: "People management and organizational development.",
            levels: ["Diploma"],
            modes: ["regular", "night"],
            link:"/courses/resource",
            category:"business"
            },
            {
           id: 7,
           image: development,
           school: "Web Development & Database Administration",
           description: "Modern web technologies and database systems.",
           levels: ["Diploma"],
           modes: ["regular", "night"],
           link:"/courses/web development",
           category:"tech"
           },
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
