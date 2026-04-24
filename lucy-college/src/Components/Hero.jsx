import React from "react";
import background from "../assets/background.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-screen w-full mt-10 flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* ENHANCED OVERLAY (same opacity feel, smoother) */}
        <div className="absolute inset-0 bg-[#0B2C4D]/60 backdrop-brightness-75"></div>

        {/* CONTENT */}
        <div className="relative max-w-xl ml-6 md:ml-16 text-white animate-fadeUp">

          {/* SMALL TAG */}
          <p className="text-[#07b0df] uppercase tracking-widest text-sm mb-3">
            Lucy College
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Empowering Minds,
            <br />
            <span className="text-[#07b0df] drop-shadow-[0_0_10px_rgba(7,176,223,0.6)]">
              Shaping Futures
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            We don’t just teach — we inspire, preparing students to thrive in
            healthcare, business, and technology careers. Step into a community
            where curiosity, creativity, and excellence come together to build
            your future.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <Link to="/courses">
              <Button
                text="Explore Programs"
                className="
                  py-3 px-10 bg-[#07b0df] my-10
                  shadow-lg shadow-cyan-500/40
                  hover:scale-105 hover:shadow-cyan-400/60
                  transition duration-300
                "
              />
            </Link>
          </div>

        </div>

        {/* SUBTLE GLOW EFFECT */}
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-cyan-400/20 blur-3xl rounded-full"></div>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease forwards;
          }
        `}
      </style>
    </>
  );
};

export default Hero;