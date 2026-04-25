import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Dessie from "../assets/Dessie.jpg";
import Horizontal from "./horizontal";

function AboutHero({background,smtext,heading,text}) {
  return (
    <div
      className="relative mt-10 min-h-[70vh] flex items-center bg-cover bg-center px-6 md:px-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>
      <div className="relative z-10 text-white max-w-3xl w-full">
        <Paragraph className="text-white text-sm tracking-widest uppercase mb-2 text-left">
          {smtext}
        </Paragraph>
        <Heading
          title={heading}
          className="text-white text-4xl md:text-5xl font-bold mb-4 text-left"
        />
        
        <Paragraph className="text-white/90 text-base leading-relaxed max-w-2xl text-left">
          {text}
        </Paragraph>

      </div>
    </div>
  );
}

export default AboutHero;