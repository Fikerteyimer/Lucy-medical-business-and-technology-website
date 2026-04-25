import React from "react";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen  flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0B2C4D]/50"></div>

      <div className="relative z-10 px-6 max-w-4xl">

        <p className="text-[#07b0df] uppercase tracking-[0.4em] text-xs mb-6">
          Lucy College
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Empowering Minds
        </h1>

        <div className="w-24 h-1 bg-[#07b0df] mx-auto my-6"></div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/90">
          Shaping Futures
        </h2>

        <p className="mt-6 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
          A modern learning environment built for innovation, growth, and real-world success.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/courses">
            <button className="bg-[#07b0df] px-10 py-3 rounded-md text-white font-semibold
            hover:scale-105 transition duration-300 w-full sm:w-auto">
              Explore Programs
            </button>
          </Link>

          <Link to="/about">
            <button className="border border-white px-10 py-3 rounded-md text-white font-semibold
            hover:bg-white hover:text-[#0B2C4D] transition duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-cyan-400/20 rounded-full"></div>
    </div>
  );
};

export default Hero;