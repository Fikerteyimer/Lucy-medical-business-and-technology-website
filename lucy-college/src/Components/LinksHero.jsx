import { useState } from "react";

function LinksHero() {
  const links = [
    {
      link: "Overview",
      description:
        "The admission requirements vary greatly depending on the programs. Because the non-regular programs should adhere to the same standards of quality as the regular programs of the University, non-regular program applicants shall be considered against the same criteria as regular program applicants. Moreover, non-regular program applicants shall be admitted through the same admissions process."
    },
    {
      link: "Admission Process",
      description:
        "Applicants must follow the official admission steps which include application submission, document verification, and final approval by the admissions office."
    },
    {
      link: "Requirements",
      description:
        "Applicants must submit all required documents such as transcripts, identification, and any program-specific requirements before the deadline."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white w-full">
      
      {/* FULL WIDTH LINKS BAR */}
      <div className="w-full bg-gray-100 border-b border-gray-300">
        <div className="flex justify-center gap-10 py-6">
          {links.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-lg font-medium transition pb-2 ${
                activeIndex === index
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600 hover:text-blue-800"
              }`}
            >
              {item.link}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          {links[activeIndex].link}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {links[activeIndex].description}
        </p>
      </div>
    </div>
  );
}

export default LinksHero;