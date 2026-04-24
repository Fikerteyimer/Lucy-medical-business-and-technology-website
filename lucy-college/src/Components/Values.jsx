import {
  FaUsers,
  FaHandshake,
  FaBalanceScale,
  FaStar,
  FaChartLine,
  FaShieldAlt,
  FaEye,
  FaGraduationCap,
} from "react-icons/fa";

const values = [
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
    <section className="bg-white py-20 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900">
          Our Core Values
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-200 max-w-3xl mx-auto">
        {values.map((item, index) => (
          <div key={index} className="mb-12 ml-6 relative">
            
            {/* Circle Icon */}
            <div className="absolute -left-8 top-1 w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl shadow-lg">
              {item.icon}
            </div>

            {/* Content */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}