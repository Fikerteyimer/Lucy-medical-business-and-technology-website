import Heading from "./Heading";
import Paragraph from "./Paragraph";

import { HiAcademicCap, HiBeaker, HiBookOpen, HiOfficeBuilding } from "react-icons/hi";
import { MdModelTraining } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

function WhyLucy() {
  const features = [
    {
      icon: <HiOfficeBuilding className="text-4xl text-blue-600" />,
      school: "Modern Classrooms",
      description:
        "State-of-the-art classrooms equipped with modern teaching tools for interactive learning.",
    },
    {
      icon: <HiBeaker className="text-4xl text-blue-600" />,
      school: "Laboratories",
      description:
        "Well-equipped medical, computer, and science labs for practical and hands-on training.",
    },
    {
      icon: <HiBookOpen className="text-4xl text-blue-600" />,
      school: "Libraries",
      description:
        "Extensive library resources to support research and learning across health, business, and technology.",
    },
    {
      icon: <MdModelTraining className="text-4xl text-blue-600" />,
      school: "Practical Training Centers",
      description:
        "Dedicated centers where students gain real-world experience and career readiness.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
      school: "Experienced Instructors",
      description:
        "Qualified faculty committed to mentoring and guiding students for academic and professional success.",
    },
    {
      icon: <HiAcademicCap className="text-4xl text-blue-600" />,
      school: "Industry Partnerships",
      description:
        "Collaborations with local and international organizations for internships, workshops, and exposure.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <Heading title="Why You Choose Lucy College?" />

      <Paragraph>
        Lucy Medical, Business and Technology College offers a unique blend of
        practical training, academic excellence, and student-centered learning
        to prepare graduates for successful careers and societal contribution.
      </Paragraph>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className=" p-6 text-center"
          >
            <div className="flex justify-center items-center mb-4 bg-blue-100 rounded-full w-16 h-16 mx-auto ">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.school}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyLucy;