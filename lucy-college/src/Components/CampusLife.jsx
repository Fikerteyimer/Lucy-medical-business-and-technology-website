import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function CampusLife() {
  const campusImages = [
    Image1,
    Image2,
    Image3,
    Image1,
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">

      <Heading title="Campus Life" />

      <Paragraph>
        Experience a vibrant campus environment that supports learning,
        collaboration, innovation, and student growth in a modern academic setting.
      </Paragraph>

     
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {campusImages.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500"
          >
            
           
            <img
              src={img}
              alt={`Campus life ${index + 1}`}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 translate-y-6 group-hover:translate-y-0 transition duration-500 opacity-0 group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold">
                Campus Life {index + 1}
              </h3>
              <p className="text-white text-sm opacity-80">
                Student environment & activities
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default CampusLife;