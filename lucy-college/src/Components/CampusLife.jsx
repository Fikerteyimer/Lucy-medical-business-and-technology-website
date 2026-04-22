import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function CampusLife() {
  const campusImages = [ Image1, Image3,Image1,Image2,Image3,Image1,Image2,Image2,Image3];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      
      <Heading title="Campus Life"/>
      <Paragraph
        children="Experience a vibrant campus environment that supports learning,
        collaboration, and student growth." />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campusImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-md transition duration-300"
          >
            <img
              src={img}
              alt={`Campus life ${index + 1}`}
              className="w-full h-70 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default CampusLife;