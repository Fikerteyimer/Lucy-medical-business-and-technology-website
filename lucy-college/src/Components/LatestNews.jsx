import Heading from "./Heading";
import Paragraph from "./Paragraph";

function LatestNews() {
  const news = [
    {
      title: "New Intake Registration Open",
      description:
        "Lucy College has officially opened registration for new students for the upcoming academic year.",
      date: "April 2026",
    },
    {
      title: "Industry Partnership Signed",
      description:
        "We have signed a new partnership with healthcare institutions for student internship opportunities.",
      date: "March 2026",
    },
    {
      title: "Campus Expansion Project",
      description:
        "Construction of new modern classrooms and labs is currently underway at Dessie campus.",
      date: "February 2026",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      
      <Heading title=" Latest News & Updates"/>

      <Paragraph children="Stay updated with the latest announcements, events, and developments
        from Lucy Medical, Business and Technology College."/>

      {/* News Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {news.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <p className="text-sm text-blue-600 mb-2">{item.date}</p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestNews;