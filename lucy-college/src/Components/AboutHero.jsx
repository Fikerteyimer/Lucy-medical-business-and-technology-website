import Heading from "./Heading";
import Paragraph from "./Paragraph";

function AboutHero({
  background,
  children,
  title,
  text,
  height = "70vh",
  overlay = "bg-blue-900/80", 
  textColor = "text-white",
}) {
  return (
    <div
      className="relative mt-10 flex items-center bg-cover bg-center px-6 md:px-16"
      style={{
        backgroundImage: `url(${background})`,
        minHeight: height,
      }}
    >
      {/* Overlay (Tailwind class) */}
      <div className={`absolute inset-0 ${overlay}`}></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">

        <Paragraph className={`${textColor} text-md mb-2 text-left`}>
          {children}
        </Paragraph>

        <Heading
          title={title}
          className={`${textColor} text-4xl md:text-5xl font-bold mb-4 text-left`}
        />

        <Paragraph className={`${textColor}/90 text-base leading-relaxed max-w-2xl text-left`}>
          {text}
        </Paragraph>

      </div>
    </div>
  );
}

export default AboutHero;