// Campus.jsx
import React from "react";
import semera from "../assets/semera.jpg";
import dessie from "../assets/dessie.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function Campus() {
  const campuses = [
    { image: semera, location: "Semera" },
    { image: dessie, location: "Dessie" },
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50">
     
      <Heading title="Our Campuses"/>
      <Paragraph children="Explore our modern campus facilities designed to provide a comfortable
        and inspiring learning environment for our students. Currently, we have campuses in Semera and Dessie."className="text-center mx-50"/>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {campuses.map((campus, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
          
            <img
              src={campus.image}
              alt={campus.location}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay with location text */}
            <div className="absolute inset-0 bg-blue-50 bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-blue-900 text-2xl font-semibold">
                {campus.location}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Campus;