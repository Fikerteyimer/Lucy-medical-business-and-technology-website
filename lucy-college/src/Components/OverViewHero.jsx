function OverViewHero({ background }) {
  return (
    <div
      className="relative min-h-screen w-full mt-10 flex items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0B2C4D]/60 backdrop-brightness-75"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16">
        <div className="max-w-xl text-left">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Overview
          </h1>

          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Discover more about our institution and what makes us unique.
          </p>

        </div>
      </div>
    </div>
  );
}

export default OverViewHero;