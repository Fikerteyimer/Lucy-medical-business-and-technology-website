import React from "react";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row mt-5">

      <div className="w-full md:w-3/5 flex items-center justify-center px-6 py-16 md:py-0 bg-white">

        <div className="max-w-xl text-center md:text-left">

          <p className="text-[#07b0df] uppercase tracking-[0.4em] text-xs mb-6">
            Lucy College
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2C4D] leading-tight">
            Empowering Minds
          </h1>

          <div className="w-24 h-1 bg-[#07b0df] my-6 mx-auto md:mx-0"></div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2C4D]/80">
            Shaping Futures
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            A modern learning environment built for innovation, growth, and real-world success.
            Lucy College prepares students with knowledge and practical skills.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <Link to="/courses">
              <button className="bg-[#07b0df] px-8 py-3 rounded-md text-white font-semibold hover:scale-105 transition">
                Explore Programs
              </button>
            </Link>

            <Link to="/about">
              <button className="border border-[#0B2C4D] px-8 py-3 rounded-md text-[#0B2C4D] font-semibold hover:bg-[#0B2C4D] hover:text-white transition">
                Learn More
              </button>
            </Link>

          </div>

        </div>
      </div>

      <div
        className="w-full md:w-2/5 min-h-[40vh] mt-10 md:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

    </div>
  );
};

export default Hero;