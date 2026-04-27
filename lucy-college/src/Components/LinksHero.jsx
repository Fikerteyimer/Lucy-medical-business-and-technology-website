import { useState } from "react";
import Paragraph from "../Components/Paragraph";
import Subheading from "../Components/Subheading";

function LinksHero({ links = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!links.length) return null;

  const activeContent = links[activeIndex]?.content || [];

  return (
    <div className="bg-white w-full">

      {/* NAV */}
      <div className="w-full bg-blue-50 border-b border-blue-100">
        <div className="flex justify-center gap-8 py-6 flex-wrap">
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
      <div className="px-6 md:px-20 py-10 max-w-6xl mx-auto">

        <Subheading
          text={links[activeIndex].link}
          className="text-center font-semibold text-blue-900"
        />

        <div className="mt-8 space-y-6">

          {activeContent.map((block, i) => {

            // TEXT
            if (block.type === "text") {
              return (
                <Paragraph key={i} className="text-gray-700 leading-relaxed">
                  {block.value}
                </Paragraph>
              );
            }

            // LIST
            if (block.type === "list") {
              return (
                <ul key={i} className="list-disc pl-6 text-gray-700 space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }

            // TABLE
            if (block.type === "table") {
              return (
                <div key={i} className="overflow-x-auto">
                  <table className="w-full border border-gray-200 text-sm">
                    <thead className="bg-blue-50 text-blue-900">
                      <tr>
                        {block.headers.map((h, idx) => (
                          <th key={idx} className="border p-3 text-left">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {block.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gray-50">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="border p-3 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}

        </div>
      </div>
    </div>
  );
}

export default LinksHero;