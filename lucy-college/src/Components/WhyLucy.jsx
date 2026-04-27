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
    building: <HiOfficeBuilding />,
    lab: <HiBeaker />,
    library: <HiBookOpen />,
    training: <MdModelTraining />,
    teacher: <FaChalkboardTeacher />,
    cap: <HiAcademicCap />,
  };

  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <Heading title={title} />
        <div className="mt-4">
          <Paragraph>{text}</Paragraph>
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-blue-100 shadow-md hover:shadow-md transition-all duration-300 hover:-translate-y-2"
          >

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-2xl">
              {iconMap[item.icon]}
            </div>

            {/* Content */}
            <h3 className="mt-5 text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
              {item.school}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm">
              {item.description}
            </p>

            {/* Glow border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default WhyLucy;