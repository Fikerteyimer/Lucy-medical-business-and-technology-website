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
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-blue-50 to-white">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Heading title="Latest News & Updates" />

        <div className="mt-4">
          <Paragraph>
            Stay updated with the latest announcements, events, and developments
            from Lucy Medical, Business and Technology College.
          </Paragraph>
        </div>
      </div>

      {/* News Grid */}
      <div className="mt-14 grid gap-8 md:grid-cols-3">

        {news.map((item, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >

            {/* subtle top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            {/* date badge */}
            <div className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
              {item.date}
            </div>

            {/* title */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition mb-2">
              {item.title}
            </h3>

            {/* description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default LatestNews;