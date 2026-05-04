import { useState, useEffect } from "react";
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";

function Counter() {
  const stats = [
    { value: 2, label: "Campuses", icon: FaUniversity },
    { value: 500, label: "Students", suffix: "+", icon: FaUserGraduate },
    { value: 50, label: "Faculty Members", suffix: "+", icon: FaChalkboardTeacher },
    { value: 7, label: "Courses", suffix: "+", icon: FaBook },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const target = stats[i].value;
          const step = Math.ceil(target / 30); // smooth counting
          return count < target ? Math.min(count + step, target) : target;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-4 mt-16 bg-blue-900">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-3">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                p-3 sm:p-4 md:p-5
                rounded-lg
                bg-white/5
                hover:bg-white/10
                transition-all duration-300
                hover:-translate-y-1
                min-w-0

                opacity-0
                animate-[fadeIn_0.6s_ease_forwards]
              "
              style={{ animationDelay: `${index * 0.15}s` }}
            >

              {/* ICON */}
              <div className="bg-white/10 p-2 sm:p-3 rounded-full mb-2">
                <Icon className="text-white text-lg sm:text-xl md:text-2xl" />
              </div>

              {/* NUMBER */}
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {counts[index]}
                {item.suffix || ""}
              </h3>

              {/* LABEL */}
              <p className="text-blue-100 text-[10px] sm:text-xs md:text-sm mt-1">
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