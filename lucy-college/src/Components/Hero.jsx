import React from "react";
import background from "../assets/background.jpg";

const Hero = () => {
  return (
    <>
      <div
        className="relative h-[100vh] w-screen  mt-10  flex items-center justify-center "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0B2C4D]/70"></div>
        <div className="relative max-w-xl ml-6 md:ml-16 text-white animate-fadeUp">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Empowering Minds, 
            <span className="text-[#00c6ff]">Shaping Futures </span>
          </h1>
          <p className="mt-10 text-base md:text-lg">
           we don’t just teach we inspire,preparing students to thrive in healthcare, business, and technology careers. Step into a community 
            where curiosity, creativity, and excellence come together to build your future.
          </p>
          <a href="/programs">
            <button className="mt-6 px-6 py-3 bg-[#00c6ff] hover:bg-[#083152] rounded-3xl text-white text-lg transition-transform duration-300 hover:-translate-y-1">
              Explore Programs
            </button>
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
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
