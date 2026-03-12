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
      plus: "+"
    },
    {
      num: 50,
      behavior: "Faculty Members",
      plus: "+"
    },
    {
      num:7,
      behavior:"Courses",
      plus:"+"
    }
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
    <div className="my-30 bg-blue-900  py-10 mx-10 px-10 text-center transform transition duration-300 hover:scale-120">
      <div className="flex w-full justify-around items-center ">
        {properties.map((property, index) => {
          return (
            <div key={index} >
              <h3 className="text-4xl text-white mb-5">
                {counts[index]}{property.plus}
              </h3>
              <p className="text-xl text-white">{property.behavior}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Counter;