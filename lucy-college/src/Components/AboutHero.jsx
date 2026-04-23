import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Dessie from "../assets/Dessie.jpg";

function AboutHero() {
  return (
    <div
      className="mt-20 px-6 min-h-[60vh] flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Dessie})` }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>
      <div className="relative z-10 text-white max-w-2xl">

        <Paragraph className="text-left text-white">
          Lucy-at-a-glance
        </Paragraph>
        <Heading
          title="About Us"
          className="text-left text-white"
        />
      </div>

    </div>
  );
}
export default AboutHero;