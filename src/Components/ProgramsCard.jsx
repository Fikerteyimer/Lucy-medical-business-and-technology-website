import React, { useState } from "react";
import CardGrid from "./CardGrid";
import { courses } from "../data";

function ProgramsCard() {
  const Credentials = ["Degree", "Diploma", "Masters", "PhD", "All"];
  const Specifications = ["regular", "night", "All"];

  const [selectedCredential, setSelectedCredential] = useState("All");
  const [selectedSpecification, setSelectedSpecification] = useState("All");
  const filteredCourses = courses.filter((course) => {
    const credentialMatch =
      selectedCredential === "All" || course.levels.includes(selectedCredential);
    const specMatch =
      selectedSpecification === "All" || course.modes.includes(selectedSpecification);
    return credentialMatch && specMatch;
  });

  return (
    <div className="px-2 md:px-7 py-8">
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <select
          value={selectedCredential}
          onChange={(e) => setSelectedCredential(e.target.value)}
          className="border border-blue-300 rounded px-4 py-2"
        >
          {Credentials.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={selectedSpecification}
          onChange={(e) => setSelectedSpecification(e.target.value)}
          className="border border-blue-300 rounded px-4 py-2"
        >
          {Specifications.map((s, idx) => (
            <option key={idx} value={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)} 
            </option>
          ))}
        </select>
      </div>

    
      <CardGrid
        items={filteredCourses.map((course) => ({
          image: course.image,
          school:course.school,
          description:course.description,
          link:course.link 
        }))}
        className="w-full m-0"
      />
    </div>
  );
}

export default ProgramsCard;