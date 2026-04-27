import Heading from "./Heading";
import Paragraph from "./Paragraph";

function AboutHero({
  children,
  title,
  text,
  height = "50vh",
  textColor = "text-gray-800",
}) {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden mt-20"
      style={{ minHeight: height }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"></div>

      {/* Soft glow layers */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl"></div>

      {/* subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 text-center">

        {/* Label */}
        <div className="flex justify-center mb-6">
          <span className="bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full border border-white/20">
            ✦ {children} ✦
          </span>
        </div>

        {/* Title */}
        <Heading
          title={title}
          className="text-white text-3xl md:text-5xl font-bold leading-tight"
        />

        {/* underline */}
        <div className="w-24 h-1 bg-white/70 rounded-full mx-auto mt-6"></div>

        {/* Text */}
        <div className="mt-8 flex justify-center">
          <div className="max-w-2xl">
            <Paragraph className="text-blue-50 text-base md:text-lg leading-relaxed">
              {text}
            </Paragraph>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;