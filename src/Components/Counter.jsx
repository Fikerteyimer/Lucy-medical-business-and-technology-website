import { useState, useEffect } from "react";

function Counter() {
  const properties = [
    {
      num: 2,
      behavior: "Campuses",
    },
    {
      num: 500,
      behavior: "Students",
      plus: "+",
    },
    {
      num: 50,
      behavior: "Faculty Members",
      plus: "+",
    },
    {
      num: 7,
      behavior: "Courses",
      plus: "+",
    },
  ];

  const [counts, setCounts] = useState(properties.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          if (count < properties[index].num) {
            return count + 1;
          }
          return count;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-32 px-12">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-3xl shadow-2xl py-16 px-10 hover:scale-107 transition duration-300">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 
              hover:scale-110 transition duration-300 shadow-lg"
            >
              <h3 className="text-5xl font-bold text-white mb-3">
                {counts[index]}
                {property.plus}
              </h3>

              <p className="text-lg text-blue-100 font-medium tracking-wide">
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