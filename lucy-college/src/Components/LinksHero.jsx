import { useState } from "react";
import Paragraph from '../Components/Paragraph'
import Subheading from '../Components/Subheading';
import Horizontal from '../Components/Horizontal';

function LinksHero() {
  const links = [
    {
      link: "Overview",
      description:
        " The admission requirements vary across different programs due to differences in academic disciplines, skill expectations, and preparatory needs, with each program setting specific criteria to ensure applicants are well-prepared for their chosen field of study. However, the University maintains a consistent standard of academic quality across all programs, meaning that applicants to non-regular programs are evaluated using the same criteria as those applying to regular programs to ensure fairness and academic integrity. In addition, all applicants follow the same admissions process, which includes submission of applications, review of academic records, verification of supporting documents, and final selection based on institutional standards, ensuring transparency, equality, and equal opportunity for all students regardless of program type."
    },
    {
      link: "Id Card",
      description:
        "A student registering at the University is issued a non-transferable identification card with a unique and permanent registration number. The card, which is a very valuable document and which requires careful handling, is a means to access services and facilities in the University. The registration number, often called identification number, which should appear on all student documents, is required every time the student requests for any University services. Identification cards are issued to all new students free of charge. It should be renewed each regular, evening or Kiremt semester, and returned to the Registrar Office when the student discontinuous his/her studies or graduates. Issuance of ID cards needs one recently taken passport size photograph of the student with his/her name, father’s and grandfather’s names clearly written on the back of the photograph in English."
    },
    {
      link: "Requirements",
      description:
        "Applicants must submit all required documents such as transcripts, identification, and any program-specific requirements before the deadline."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white w-full">
      <div className="w-full bg-gray-100 border-b border-gray-300">
        <div className="flex justify-center gap-10 py-6">
          {links.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-lg font-medium transition pb-2 ${
                activeIndex === index
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600 hover:text-blue-800"
              }`}
            >
              {item.link}
            </button>
          ))}
        </div>
      </div>

    
      <div className="px-6 md:px-20 py-10">
        <Subheading 
          text={links[activeIndex].link}
          className="text-left font-semibold"
        />
        <Horizontal className="border-red-500 mx-0 mb-8 mt-0"/>
          
       
        <Paragraph>
          {links[activeIndex].description}
        </Paragraph>
      </div>
    </div>
  );
}

export default LinksHero;