import Subheading from "./Subheading";
import logo from "../assets/logo.jpg";
import Paragraph from "./Paragraph";

function LucyAtAglanceBody() {
  return (
    <div className="px-6 md:px-16 mt-10 space-y-6">
      
      <Subheading
        text="Lucy college at a glance"
        className="text-center md:text-left text-2xl md:text-3xl text-blue-900 leading-tight"
      />

      <div className="flex items-start gap-6 my-6">
        
        <img
          src={logo}
          alt="lucy college logo"
          className="w-28 h-28 object-cover "
        />


        <div className="w-0.5 h-20 bg-blue-700 mt-1"></div>

        {/* Text */}
        <div className="leading-snug">
          <Subheading
            className="font-bold mb-1 text-left"
            text="Lucy College"
          />
          <Paragraph
            className="text-sm italic text-gray-600"
          >
            “Knowledge, Innovation, Excellence”
          </Paragraph>
        </div>

      </div>

      <div className="space-y-4 leading-snug text-justify">
        
        <Paragraph>
          Lucy College at a Glance offers a concise overview of one of Ethiopia’s growing
          centers of academic excellence, innovation, and professional development.
          Located in Dessie, the college is dedicated to producing skilled, competent,
          and ethically responsible graduates who are ready to contribute to the nation’s
          development and the global workforce.
        </Paragraph>

        <Paragraph>
          With a strong emphasis on science, technology, business, and health-related
          fields, Lucy College combines modern teaching methodologies with practical,
          hands-on learning experiences.
        </Paragraph>

        <Paragraph>
          The institution is equipped with qualified and experienced instructors,
          well-structured curricula, and increasingly improved facilities that support
          both academic and personal growth.
        </Paragraph>

        <Paragraph>
          The college also fosters a dynamic learning environment where innovation,
          discipline, and creativity are highly valued, ensuring graduates are capable
          of solving real-world problems.
        </Paragraph>

      </div>
    </div>
  );
}

export default LucyAtAglanceBody;