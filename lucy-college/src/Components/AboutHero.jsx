import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Dessie from "../assets/Dessie.jpg";
import Horizontal from "./horizontal";

function AboutHero() {
  return (
    <div
      className="mt-20 px-6 min-h-[50vh] flex items-center bg-cover  relative"
      style={{ backgroundImage: `url(${Dessie})` }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>
      <div className="relative z-10 text-white max-w-3xl ml-20">
        <Paragraph className="text-left text-white">
          Lucy-at-a-glance
        </Paragraph>
        <Heading
          title="About Us"
          className="text-left text-white text-4xl md:text-5xl font-bold mb-4"
        />
        <Horizontal/>
      </div>

    </div>
  );
}
export default AboutHero;