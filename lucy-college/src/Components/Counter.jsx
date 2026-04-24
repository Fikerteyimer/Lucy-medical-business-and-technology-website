import { useState, useEffect } from "react";
import Heading from "./Heading";
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";
import Paragraph from './Paragraph';
function Counter() {
  const properties = [
    { num: 2, behavior: "Campuses", icon: FaUniversity },
    { num: 500, behavior: "Students", plus: "+", icon: FaUserGraduate },
    { num: 50, behavior: "Faculty Members", plus: "+", icon: FaChalkboardTeacher },
    { num: 7, behavior: "Courses", plus: "+", icon: FaBook },
  ];

  const [counts, setCounts] = useState(properties.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < properties[i].num ? count + 5 : properties[i].num
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
  <section className="py-16 px-4 mt-20 bg-gradient-to-b from-blue-50 to-white">
    
    {/* TITLE */}
    <div className="text-center mb-12">
      <Heading title="Our Achievements" />
      <Paragraph
        className="text-gray-500 text-center max-w-xl mx-auto"
      >
        Excellence in education, innovation, and growth
      </Paragraph>
    </div>

    {/* CARD CONTAINER (NOT TOO WIDE) */}
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      
      {properties.map((property, index) => {
        const Icon = property.icon;

        return (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
          >
            {/* ICON */}
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Icon className="text-blue-700 text-xl" />
            </div>

            {/* NUMBER */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              {counts[index]}
              {property.plus || ""}
            </h3>

            {/* LABEL */}
            <p className="text-gray-500 text-sm mt-1">
              {property.behavior}
            </p>
          </div>
        );
      })}

    </div>
  </section>
);
}

export default Counter;