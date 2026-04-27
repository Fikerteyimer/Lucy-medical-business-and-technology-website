import AboutHero from "../../Components/AboutHero";
import NavBar from "../../Components/NavBar";
import NewsLetter from "../../Components/NewsLetter";
import LucyAtAglanceBody from "../../Components/LucyAtAglanceBody";
import Footer from "../../Components/Footer";
import Paragraph from "../../Components/Paragraph";

import Dessie from "../../assets/Dessie.jpg";
import logo from "../../assets/logo.jpg";

function LucyAtAGlance() {
  return (
    <div>
      <NavBar />

      <AboutHero
        background={Dessie}
        children="Lucy-at-a-glance"
        title="About Lucy College"
        text="Explore the background of Lucy College, its academic programs, and the schools under one of the leading institutions focused on health, business, and technology education in Ethiopia."
       
        overlay="bg-blue-900/70"
      />

      <LucyAtAglanceBody
        logo={logo}
        title="Lucy College"
        quote="Knowledge, Innovation, Excellence"
        
      >
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
      </LucyAtAglanceBody>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default LucyAtAGlance;