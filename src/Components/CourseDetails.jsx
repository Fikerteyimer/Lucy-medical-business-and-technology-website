import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data";
import NavBar from "./NavBar";
import Subheading from "./Subheading";
import Paragraph from "./Paragraph";
import Button from "./Button";

function CourseDetails() {
  const navigate=useNavigate();
  const { school } = useParams();

  const decodedSchool = decodeURIComponent(school).toLowerCase().trim();

  const course = courses.find(
    (c) => c.school.toLowerCase().trim() === decodedSchool
  );

  if (!course) {
    return <h2 className="text-center mt-10">Course not found</h2>;
  }

  return (
    <>
      <NavBar />

      <div className="max-w-6xl mx-auto px-6 py-12 mt-10">

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={course.image}
            alt={course.school}
            className="w-full h-100 object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold">
              {course.school}
            </h1>
            <p className="text-sm mt-2 opacity-90">
              {course.description || "Explore this course and start your journey."}
            </p>
          </div>
        </div>

       
        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="md:col-span-2 space-y-6">

            <div>
              <Subheading text="Course Overview" className="text-left"/>
              <Paragraph children= {course.description}/>
            </div>
  
            <div>
               <Subheading text="What You Will Learn" className="text-left"/>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {(course.skills || [
                  "Fundamentals and core concepts",
                  "Practical hands-on skills",
                  "Real-world applications",
                ]).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

          </div>

        
          <div className="space-y-6">

            <div className="bg-white shadow-md rounded-xl p-5 border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Course Details
              </h3>

              <div className="space-y-3 text-gray-700">

                <div className="flex justify-between">
                  <span className="font-medium">Level:</span>

                    <div className="flex gap-2 flex-wrap ">
                      {(course.levels).map((level, index) => (
                      <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                     >
                     {level}
                    </span>
                    ))}
                  </div>
                 
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>{course.duration}</span>
                  
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">Mode:</span>
                  <div className="flex gap-2 flex-wrap ">
                      {(course.modes).map((mode, index) => (
                      <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                     >
                     {mode}
                    </span>
                    ))}
                  </div> 
                </div>
              </div>
            </div>
            <Button text="Enroll Now" onClick={()=>{navigate("/admission")}} className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"/>
          </div>

        </div>
      </div>
    </>
  );
}

export default CourseDetails;