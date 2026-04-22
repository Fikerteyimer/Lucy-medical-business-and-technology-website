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
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500"
          >

            <img
              src={campus.image}
              alt={campus.location}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
            />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-500">

              <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                {campus.location}
              </h3>

              <p className="text-gray-200 text-sm mt-2">
                Modern learning environment & facilities
              </p> 

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Campus;