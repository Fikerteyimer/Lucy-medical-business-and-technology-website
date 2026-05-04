import { useState, useEffect } from "react";
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";

function Counter() {
  const properties = [
    { num: 2, label: "Campuses", icon: FaUniversity },
    { num: 500, label: "Students", plus: "+", icon: FaUserGraduate },
    { num: 50, label: "Faculty Members", plus: "+", icon: FaChalkboardTeacher },
    { num: 7, label: "Courses", plus: "+", icon: FaBook },
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
    <section className="py-12 px-6 mt-20 bg-blue-900">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">

        {properties.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                p-4 sm:p-6 md:p-8
                rounded-xl
                bg-white/5
                hover:bg-white/10
                transition duration-300
                hover:-translate-y-2
                hover:scale-105
                min-w-0
              "
            >

              <div className="bg-white/10 p-3 sm:p-4 rounded-full mb-3">
                <Icon className="text-white text-xl sm:text-2xl md:text-3xl" />
              </div>

              <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white">
                {counts[index]}
                {item.plus || ""}
              </h3>

              <p className="text-blue-100 text-[10px] sm:text-sm md:text-base mt-1">
                {item.label}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Counter;