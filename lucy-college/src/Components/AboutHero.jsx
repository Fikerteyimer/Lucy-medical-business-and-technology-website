import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Dessie from "../assets/Dessie.jpg";
import Horizontal from "./horizontal";

function AboutHero() {
  return (
    <div
      className="relative mt-20 min-h-[55vh] flex items-center bg-cover bg-center px-6 md:px-16"
      style={{ backgroundImage: `url(${Dessie})` }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>
      <div className="relative z-10 text-white max-w-3xl w-full">
        <Paragraph className="text-white text-sm tracking-widest uppercase mb-2 text-left">
          Lucy-at-a-glance
        </Paragraph>
        <Heading
          title="About Us"
          className="text-white text-4xl md:text-5xl font-bold mb-4 text-left"
        />
        <div className="flex items-center gap-4 mb-6 justify-start">
          <Horizontal className="w-20 border-blue-200" />
          <Horizontal className="w-10 border-blue-400" />
        </div>
        <Paragraph className="text-white/90 text-base leading-relaxed max-w-2xl text-left">
          Explore the background of Lucy College, its academic programs, and the schools under one of the leading institutions focused on health, business, and technology education in Ethiopia.
        </Paragraph>

      </div>
    </div>
  );
}

export default AboutHero;