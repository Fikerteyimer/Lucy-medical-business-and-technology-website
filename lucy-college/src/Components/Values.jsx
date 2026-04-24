import {FaUsers,FaHandshake,FaBalanceScale,FaStar,FaChartLine,FaShieldAlt,FaEye,FaGraduationCap,} from "react-icons/fa";
import Subheading from "./Subheading";
import Horizontal from './Horizontal';

const leftValues = [
  {
    icon: <FaUsers />,
    title: "Diversity",
    desc: "Diversity of ideas, peoples and cultures and harmonious coexistence.",
  },
  {
    icon: <FaHandshake />,
    title: "Tolerance & Respect",
    desc: "Tolerance and mutual respect.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Secularism",
    desc: "Equal and neutral environment for all.",
  },
  {
    icon: <FaStar />,
    title: "Excellence",
    desc: "Commitment to quality education, research and service.",
  },
];

const rightValues = [
  {
    icon: <FaChartLine />,
    title: "Effective Engagement",
    desc: "Driving socio-economic development.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Credibility",
    desc: "Public trust and acceptance.",
  },
  {
    icon: <FaEye />,
    title: "Transparency",
    desc: "Accountability and openness.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Academic Freedom",
    desc: "Commitment to innovation and excellence.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 px-6 md:px-20">
      
      <div className="text-center mb-16">
        <Subheading text="Our Core Values" className="font-bold"/>
        <Horizontal className="border-red-400"/>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="space-y-8">
          {leftValues.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow h-37.5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {rightValues.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow h-[150px]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}