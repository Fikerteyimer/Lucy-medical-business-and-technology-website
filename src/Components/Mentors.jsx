import { useRef } from "react";
import mentor from "../assets/mentor.jpg";

function Mentors() {
  const scrollRef = useRef(null);

  const mentors = [
    { image: mentor, name: "Dr. Abebe Tesfaye", degree: "PhD in Medical Science" },
    { image: mentor, name: "Prof. Hana Bekele", degree: "MSc in Nursing" },
    { image: mentor, name: "Dr. Samuel Kebede", degree: "PhD in Pharmacy" },
    { image: mentor, name: "Mr. Daniel Mekonnen", degree: "MBA in Business Administration" },
    { image: mentor, name: "Dr. Selamawit Girma", degree: "PhD in Laboratory Technology" },
    { image: mentor, name: "Mr. Yohannes Tadesse", degree: "MSc in Accounting" },
    { image: mentor, name: "Dr. Rahel Tesfahun", degree: "PhD in Public Health" },
    { image: mentor, name: "Prof. Dawit Alemayehu", degree: "MSc in Computer Science" },
    { image: mentor, name: "Dr. Meron Desta", degree: "PhD in Medical Laboratory" },
    { image: mentor, name: "Mr. Elias Worku", degree: "MBA in Management" },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-blue-50 px-10">

      <h2 className="text-3xl font-bold text-center mb-10">
        Meet Our Founders
      </h2>

      <div className="flex items-center gap-6">

        <button
          onClick={scrollLeft}
          className="text-3xl bg-white shadow-md px-4 py-2 rounded-full hover:bg-gray-100"
        >
          ←
        </button>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {mentors.map((m, index) => (
            <div key={index} className="shrink-0 text-center w-40">
              <img
                src={m.image}
                alt={m.name}
                className="w-32 h-32 rounded-full object-cover shadow-md mx-auto"
              />
              <p className="mt-3 font-semibold text-sm">{m.name}</p>
              <p className="text-gray-500 text-xs">{m.degree}</p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="text-3xl bg-white shadow-md px-4 py-2 rounded-full hover:bg-gray-100"
        >
          →
        </button>

      </div>

    </section>
  );
}

export default Mentors;