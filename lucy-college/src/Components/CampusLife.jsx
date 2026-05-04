import { useState } from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function CampusLife() {
  const images = [Image1, Image2, Image3, Image1];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full">

      {/* TEXT PART */}
      <div className="text-center py-16 px-6">
        <Heading title="Campus Life" />

        <Paragraph className="max-w-2xl mx-auto mt-4 text-center">
          Experience a vibrant campus environment that supports learning,
          collaboration, innovation, and student growth in a modern academic setting.
        </Paragraph>
      </div>

      {/* SLIDER (FULL WIDTH) */}
      <div className="w-full h-screen relative overflow-hidden">

        {/* SLIDES */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 
          bg-black/40 text-white px-4 py-2 rounded-full 
          hover:bg-black/70 transition"
        >
          ◀
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 
          bg-black/40 text-white px-4 py-2 rounded-full 
          hover:bg-black/70 transition"
        >
          ▶
        </button>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                ${
                  currentIndex === index
                    ? "bg-white scale-125"
                    : "bg-white/50"
                }`}
            ></div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default CampusLife;