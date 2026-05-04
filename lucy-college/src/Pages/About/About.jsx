import Heros from '../../Components/Heros';
import NavBar from '../../Components/NavBar';
import Overview from '../../assets/Overview.jpg'
import Navbar from '../../Components/NavBar';
import LucyAtAglanceBody from '../../Components/LucyAtAglanceBody';
import Paragraph from '../../Components/Paragraph';
import logo from '../../assets/logo.jpg';
function About(){
    return(
        <div>
            <NavBar/>
            <Heros image={Overview} title="About Us"  children="A center of excellence dedicated to academic growth, innovation, and producing future leaders through quality education and practical learning."/>
            <LucyAtAglanceBody
        logo={logo}
        title="Lucy College"
        quote="Knowledge, Innovation, Excellence"
        className="mt-40"
        
      >
        <Paragraph>
          Lucy College offers a concise overview of one of Ethiopia’s growing
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
        </div>


    );
}
export default About;