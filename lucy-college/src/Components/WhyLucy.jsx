import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { features } from "../data";
import { HiAcademicCap, HiBeaker, HiBookOpen, HiOfficeBuilding } from "react-icons/hi";
import { MdModelTraining } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

function WhyLucy() {
  const iconMap = {
  building: <HiOfficeBuilding className="text-3xl text-blue-600" />,
  lab: <HiBeaker className="text-3xl text-blue-600" />,
  library: <HiBookOpen className="text-3xl text-blue-600" />,
  training: <MdModelTraining className="text-3xl text-blue-600" />,
  teacher: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
  cap: <HiAcademicCap className="text-3xl text-blue-600" />,
};
 

  return (
    <section className="py-20  px-6 md:px-20">
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
              {iconMap[item.icon]}
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