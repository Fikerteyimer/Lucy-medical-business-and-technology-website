import Heading from "./Heading";
import Paragraph from "./Paragraph";

function AboutHero({
  children,
  title,
  text,
  height = "60vh",
  textColor = "text-gray-800",
}) {
  return (
    <section
      className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden flex items-center md:mt-20"
      style={{ minHeight: height }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-blue-300/5 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">

        {/* Label */}
        <div className="max-w-6xl mx-auto px-6 md:px-20 mb-10">
          <Paragraph className="text-blue-700 uppercase tracking-[0.3em] text-xs font-semibold bg-white/80 backdrop-blur-md px-5 py-2.5 mt-5 rounded-full inline-block shadow-md shadow-blue-500/10 border border-blue-200/50 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300">
            ✦ {children} ✦
          </Paragraph>
        </div>

        {/* Layout */}
        <div className="max-w-6xl mx-auto px-6 md:px-20">

          {/* Title */}
          <div className="max-w-3xl">
            <Heading
              title={title}
              className={`${textColor} text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent drop-shadow-sm`}
            />
          </div>

          {/* Content block */}
          <div className="mt-10 ml-0 md:ml-28 max-w-3xl">

            <div className="bg-white/80 backdrop-blur-xl p-7 md:p-9 rounded-3xl shadow-xl shadow-blue-500/10 border border-blue-100/80 hover:shadow-2xl hover:shadow-indigo-500/15 hover:scale-[1.01] transition-all duration-500 group">
              
              {/* Decorative gradient bar */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 rounded-full mb-6 group-hover:w-24 transition-all duration-500"></div>
              
              <Paragraph className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                {text}
              </Paragraph>
              
              {/* Decorative element */}
              <div className="mt-6 flex gap-1 justify-end opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;