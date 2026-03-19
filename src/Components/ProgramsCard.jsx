import React, { useState } from "react";
import CardGrid from "./CardGrid";
import { courses } from "../data";

function ProgramsCard() {
  const Credentials = ["All", "Degree", "Diploma"];
  const Specifications = ["All", "regular", "night"];

  const [selectedCredential, setSelectedCredential] = useState("All");
  const [selectedSpecification, setSelectedSpecification] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const credentialMatch =
      selectedCredential === "All" ||
      course.levels.includes(selectedCredential);

    const specMatch =
      selectedSpecification === "All" ||
      course.modes.includes(selectedSpecification);

    return credentialMatch && specMatch;
  });

  return (
    <div className="px-4  md:px-10 py-8 mt-20 bg-blue-50 rounded-2xl">
   
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
          Explore Our Programs
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Find the perfect course that matches your passion and future goals.
        </p>
      </div>

     
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 flex-wrap">
        
       
        <div className="flex gap-2 flex-wrap justify-center">
          {Credentials.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCredential(c)}
              className={`px-4 py-2 rounded-full text-sm transition 
                ${
                  selectedCredential === c
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-100"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

       
        <div className="flex gap-2 flex-wrap justify-center">
          {Specifications.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSpecification(s)}
              className={`px-4 py-2 rounded-full text-sm transition 
                ${
                  selectedSpecification === s
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-100"
                }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

    
      <div className=" rounded-2xl   md:p-6">
        <CardGrid
          items={filteredCourses.map((course) => ({
            image: course.image,
            school: course.school,
            description: course.description,
            link: course.link,
            id:course.id
          }))}
          className="w-full"
          text="View Detail"
          arrow="→"
        />
      </div>
    </div>
  );
}

export default ProgramsCard;