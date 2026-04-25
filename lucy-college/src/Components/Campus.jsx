import semera from "../assets/semera.jpg";
import dessie from "../assets/Dessie.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function Campus() {
  const campuses = [
    { image: semera, location: "Semera Campus" },
    { image: dessie, location: "Dessie Campus" },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">

      <Heading title="Our Campuses" />

      <Paragraph>
        Explore our modern campuses designed with advanced facilities,
        comfortable learning spaces, and an inspiring academic environment
        for student success.
      </Paragraph>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

        {campuses.map((campus, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition duration-500"
          >

            {/* Image */}
            <img
              src={campus.image}
              alt={campus.location}
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Always visible text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">
                {campus.location}
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Modern learning environment & facilities
              </p>
            </div>

            {/* Hover highlight effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-900/10 transition duration-500"></div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Campus;