import nursing from "./assets/nursing.jpg";
import pharmacy from "./assets/pharmacy.jpg";
import accounting from "./assets/accounting.jpg";
import laboratory from "./assets/laboratory.jpg";
import management from "./assets/management.jpg";
import resource from "./assets/resource.jpg";
import development from "./assets/development.jpg";
import med from './assets/med.jpg';
import bus from './assets/bus.jpg';
import tech from './assets/tech.jpg';
import Category from "./Components/Category";

export const courses = [

              {
               id: 1,
               image: nursing,
               school: "Nursing",
               description: "Professional nursing education with strong clinical practice.",
               levels: ["Degree"],
               modes: ["regular"],
               link:"/courses",
               category:"medical"
               },
               {
               id: 2,
               image: pharmacy,
               school: "Pharmacy",
               description: "Study pharmaceutical sciences and patient care.",
               levels: ["Degree"],
               modes: ["regular"],
               link:"/courses",
               category:"medical"
              },
  
              {
              id: 3,
              image: accounting,
              school: "Accounting and Finance",
              description: "Financial management and accounting principles.",
              levels: ["Degree", "Diploma"],
              modes: ["regular", "night"],
              link:"/courses",
              category:"business"
             },
             {
             id: 4,
             image: laboratory,
             school: "Medical Laboratory Science",
             description: "Laboratory diagnostics and medical testing.",
             levels: ["Degree", "Diploma"],
             modes: ["regular"],
             link:"/courses",
             category:"medical"
             },
             {
             id: 5,
             image: management,
             school: "Management",
             description: "Leadership and organizational management skills.",
             levels: ["Degree"],
             modes: ["regular"],
             link:"/courses",
             category:"business"
            },
            {
            id: 6,
            image: resource,
            school: "Human Resource Management",
            description: "People management and organizational development.",
            levels: ["Diploma"],
            modes: ["regular", "night"],
            link:"/courses",
            category:"business"
            },
            {
           id: 7,
           image: development,
           school: "Web Development & Database Administration",
           description: "Modern web technologies and database systems.",
           levels: ["Diploma"],
           modes: ["regular", "night"],
           link:"/courses",
           category:"tech"
           },
          ];

export const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admission", path: "/admission" },
    { name: "News and Events", path: "/news" },
    { name: "Campus Life", path: "/campus" }
  ];

export const categories = [
        {
            school: "Medical",
            description: "Explore programs in medicine, nursing, and healthcare sciences, preparing future professionals for a healthier world.",
            image:med
            
        },
        {
            school: "Business",
            description: "Learn management, finance, and entrepreneurship skills to lead in the corporate and startup world.",
          
            image:bus
        },
        {
            school: "Technology",
            description: "Build practical coding, software, and development skills to create innovative apps, websites, and solutions for the modern world.",
          
            image:tech
        }
    ];
    