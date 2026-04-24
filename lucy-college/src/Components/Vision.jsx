import Horizontal from "./Horizontal";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";
import {
  FaEye,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

function Vision({title,items = [],bgColor = "bg-blue-500",
}) {
  const iconMap = [
    { keywords: ["quality", "standard"], icon: FaCheckCircle },
    { keywords: ["innovation", "idea", "creative"], icon: FaLightbulb },
    { keywords: ["community", "people", "team"], icon: FaUsers },
    { keywords: ["growth", "development"], icon: FaChartLine },
    { keywords: ["global", "world"], icon: FaGlobe },
    { keywords: ["education", "learning", "student"], icon: FaGraduationCap },
  ];

  const getTopIcons = () => {
    const score = new Map();

    items.forEach((text) => {
      const t = text.toLowerCase();

      iconMap.forEach(({ keywords, icon }) => {
        keywords.forEach((word) => {
          if (t.includes(word)) {
            score.set(icon, (score.get(icon) || 0) + 1);
          }
        });
      });
    });

    const sorted = [...score.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([icon]) => icon);

    const fallback = [FaEye, FaLightbulb, FaUsers];

    return [...sorted, ...fallback].slice(0, 3);
  };

  const [Icon1, Icon2, Icon3] = getTopIcons();

  return (
    <>
    <div className="flex flex-col items-center gap-6 py-8 animate-fadeUp">

      <div className="flex flex-col items-center gap-4">

        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor} text-white text-2xl`}
        >
          <Icon1 />
        </div>

        <div className="flex gap-4">
          {Icon2&&Icon3&&[Icon2, Icon3].map((Icon, index) => (
            <div
              key={index}
              className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor} text-white text-lg`}
            >
              <Icon />
            </div>
          ))}
        </div>

      </div>
      <div  className="text-center mb-10">
      <Subheading text={title} className="font-bold mb-0" />
      <Horizontal />
      </div>
      <ul className="max-w-xl w-full space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">

            <span
              className={`mt-2 w-4 h-4 rounded-full ${bgColor} inline-block`}
            ></span>

            <Paragraph className="text-left">
              {item}
            </Paragraph>

          </li>
        ))}
      </ul>

    </div>
    <style>
        {`
          @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
      }

       .animate-fadeUp {
       animation: fadeUp 1s ease forwards;
        }
        `}
      </style>
      </>
  );
}

export default Vision;