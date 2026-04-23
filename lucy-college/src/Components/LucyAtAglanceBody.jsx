import Subheading from "./Subheading";
import logo from "../assets/logo.jpg";
import Horizontal from "./horizontal";
import Paragraph from "./Paragraph";
import { FaArrowRight } from "react-icons/fa";
 function LucyAtAglanceBody(){
    return(
        <div className="px-6 md:px-16 space-y-4">
            <Subheading
              text="Lucy college at a glance"
              className="text-center md:text-left"
            />
            <div className="flex items-center gap-4 my-6">
        
        <img
          src={logo}
          alt="lucy college logo"
          className="w-32 h-32 object-cover rounded-full"
        />

        {/* Vertical arrow */}
        <div className="flex flex-col items-center text-blue-700">
          <FaArrowRight className="rotate-90 text-2xl" />
          <div className="w-[2px] h-10 bg-blue-700"></div>
        </div>

        {/* Text beside arrow */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Lucy College
          </h2>
          <p className="text-sm text-gray-600 italic">
            “Knowledge, Innovation, Excellence”
          </p>
        </div>
      </div>
            
            <Paragraph 
              children="Lucy College at a Glance offers
                        a concise overview of one of Ethiopia’s growing
                        centers of academic excellence, innovation, and
                        professional development. Located in Dessie,
                        the college is dedicated to producing skilled,
                        competent, and ethically responsible graduates
                        who are ready to contribute to the nation’s 
                        development and the global workforce.
                        With a strong emphasis on science,
                        technology, business, and health-related fields,
                        Lucy College combines modern teaching methodologies
                        with practical, hands-on learning experiences."/>
            <Paragraph
              children="The institution is equipped with qualified
                and experienced instructors, well-structured curricula,
                and increasingly improved facilities that support both
                academic and personal growth. Beyond academics, Lucy College
                encourages students to engage in research, teamwork, and
                community service, helping them develop leadership skills
                and social responsibility."/>
        <Paragraph 
          children="The college also fosters a dynamic learning environment
          where innovation, discipline, and creativity are highly valued.
          By maintaining strong links with industry and continuously updating
          its programs, Lucy College strives to bridge the gap between education
          and real-world demands, ensuring that its graduates are not only 
          knowledgeable but also capable of solving practical problems in their
          respective fields."/>
            
        </div>
    );

}
export default LucyAtAglanceBody;