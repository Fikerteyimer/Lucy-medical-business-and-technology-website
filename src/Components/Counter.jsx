import { useState, useEffect } from "react";
import Heading from "./Heading";

function Counter() {
  const properties = [
    { num: 2, behavior: "Campuses" },
    { num: 500, behavior: "Students", plus: "+" },
    { num: 50, behavior: "Faculty Members", plus: "+" },
    { num: 7, behavior: "Courses", plus: "+" },
  ];

  const [counts, setCounts] = useState(properties.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < properties[index].num ? count + 1 : count
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-16 bg-gray-100 mt-30">
      <div className="max-w-7xl mx-auto">
        <Heading title=" Our Achievements"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {counts[index]}
                {property.plus || ""}
              </h3>
              <p className="text-white/90 text-lg md:text-xl font-medium text-center">
                {property.behavior}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;