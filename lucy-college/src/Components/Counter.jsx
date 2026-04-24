import { useState, useEffect } from "react";
import Heading from "./Heading";
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";

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
    <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-white to-blue-50 mt-20">

      {/* TITLE */}
      <div className="text-center mb-14">
        <Heading title="Our Achievements" />
        <p className="text-gray-500 mt-2">
          Excellence in education, innovation, and growth
        </p>
      </div>

      {/* STATS STRIP (NO CARDS) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">

        {properties.map((property, index) => {
          const Icon = property.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >

              {/* ICON */}
              <div className="text-blue-700 text-3xl mb-2">
                <Icon />
              </div>

              {/* NUMBER */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                {counts[index]}
                {property.plus || ""}
              </h3>

              {/* LABEL */}
              <p className="text-gray-600 text-lg mt-1 font-medium">
                {property.behavior}
              </p>

              {/* SMALL UNDERLINE EFFECT */}
              <div className="w-10 h-[2px] bg-blue-500 mt-3 rounded-full"></div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Counter;