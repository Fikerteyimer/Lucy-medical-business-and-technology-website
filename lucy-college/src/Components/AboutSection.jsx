import { useNavigate } from "react-router-dom";
import About1 from '../assets/About1.jpg';
import Button from './Button';
import Heading from './Heading';
import Paragraph from "./Paragraph";

function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="flex mt-40 bg-blue-950 flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 px-6 md:px-12 py-20 w-full my-15">
      <div className="w-full md:w-1/2">
        <img
          src={About1}
          className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-md"
          alt="about1"
        />
      </div>

      <div 
        className="w-full md:w-1/2 space-y-6">
        <Heading 
          title="About Lucy"
          className="text-center md:text-left text-blue-300" />
        <Paragraph className="text-white"
          children="Our institution is committed to academic excellence, creativity, and practical learning. Students are encouraged to explore new ideas, participate in research, and engage in collaborative projects that prepare them for real-world challenges. With diverse programs, modern facilities, and a vibrant campus life, we strive to create an environment where every student can grow, discover their potential, and build a meaningful future." />
        <div 
          className="flex justify-center md:justify-start">
          <Button 
            text="More About Us"
            onClick={() => navigate("/LucyAtAGlance")}
            className="py-3 px-10 bg-blue-400" />
        </div>
      </div>

    </section>
  );
}

export default AboutSection;