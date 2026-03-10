import nursing from "./assets/nursing.jpg";
import pharmacy from "./assets/pharmacy.jpg";
import accounting from "./assets/accounting.jpg";
import laboratory from "./assets/laboratory.jpg";
import management from "./assets/management.jpg";
import resource from "./assets/resource.jpg";
import development from "./assets/development.jpg";
export const courses = [
              {
               id: 1,
               image: nursing,
               school: "Nursing",
               description: "Professional nursing education with strong clinical practice.",
               levels: ["Degree"],
               modes: ["regular"],
               link:"/courses"
               },
               {
               id: 2,
               image: pharmacy,
               school: "Pharmacy",
               description: "Study pharmaceutical sciences and patient care.",
               levels: ["Degree"],
               modes: ["regular"],
               link:"/courses"
              },
  
              {
              id: 3,
              image: accounting,
              school: "Accounting and Finance",
              description: "Financial management and accounting principles.",
              levels: ["Degree", "Diploma"],
              modes: ["regular", "night"],
              link:"/courses"
             },
             {
             id: 4,
             image: laboratory,
             school: "Medical Laboratory Science",
             description: "Laboratory diagnostics and medical testing.",
             levels: ["Degree", "Diploma"],
             modes: ["regular"],
             link:"/courses"
             },
             {
             id: 5,
             image: management,
             school: "Management",
             description: "Leadership and organizational management skills.",
             levels: ["Degree"],
             modes: ["regular"],
             link:"/courses"
            },
            {
            id: 6,
            image: resource,
            school: "Human Resource Management",
            description: "People management and organizational development.",
            levels: ["Diploma"],
            modes: ["regular", "night"],
            link:"/courses"
            },
            {
           id: 7,
           image: development,
           school: "Web Development & Database Administration",
           description: "Modern web technologies and database systems.",
           levels: ["Diploma"],
           modes: ["regular", "night"],
           link:"/courses"
           },
          ];
    