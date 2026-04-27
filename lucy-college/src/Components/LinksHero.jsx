import { useState } from "react";
import Paragraph from "../Components/Paragraph";
import Subheading from "../Components/Subheading";

function LinksHero({ links = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!links.length) return null;

  return (
    <div className="bg-white w-full">

      {/* LINKS */}
      <div className="w-full bg-gray-100 border-b border-gray-200">
        <div className="flex justify-center gap-10 py-6 flex-wrap">
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

        <Subheading
          text={links[activeIndex].link}
          className="text-left font-semibold text-blue-900"
        />

        <Paragraph>
          {links[activeIndex].description}
        </Paragraph>

      </div>
    </div>
  );
}

export default LinksHero;