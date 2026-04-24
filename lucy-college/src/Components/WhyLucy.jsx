import Heading from "./Heading";
import Paragraph from "./Paragraph";
import FeatureItem from "./FeatureItem";
import { features } from "../data";

import {
  HiAcademicCap,
  HiBeaker,
  HiBookOpen,
  HiOfficeBuilding,
} from "react-icons/hi";
import { MdModelTraining } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

function WhyLucy({ title, text }) {

  const iconMap = {
    building: <HiOfficeBuilding className="text-3xl text-blue-600" />,
    lab: <HiBeaker className="text-3xl text-blue-600" />,
    library: <HiBookOpen className="text-3xl text-blue-600" />,
    training: <MdModelTraining className="text-3xl text-blue-600" />,
    teacher: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
    cap: <HiAcademicCap className="text-3xl text-blue-600" />,
  };

  return (
    <section className="py-20 px-6 md:px-20">

      <Heading title={title} />
      <Paragraph>{text}</Paragraph>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <FeatureItem
            key={index}
            icon={iconMap[item.icon]}
            title={item.school}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
}

export default WhyLucy;