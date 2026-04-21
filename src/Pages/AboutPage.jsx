import AboutSections from "../Components/AboutSections";
import CardGrid from "../Components/CardGrid";
import Footer from "../Components/Footer";
import Heros from "../Components/Heros";
import Mission from "../Components/Mission";
import NavBar from "../Components/NavBar";
import NewLetter from "../Components/NewsLetter";
import Values from "../Components/Values";
import Vision from "../Components/Vision";
import AboutUs from '../assets/AboutUs.jpg';
import MissionVision from '../Components/MissionVision'
import WhyLucy from "../Components/WhyLucy";


function AboutPage(){
    return(
        <div>
            <NavBar/>
            
            <AboutSections/>
          
            <MissionVision
               title="Our Vision"
               text="Becoming a premier higher education
                institution in Ethiopia, recognized for 
                excellence in teaching, innovation, and 
                professional training across health sciences,
                business, and technology."
                reverse={false}
                />
            <MissionVision
               title="Our Mission"
               text="To provide high-quality education
                and practical training in health sciences,
                business, and technology, equipping students
                with the knowledge, skills, and ethical values
                necessary to excel in their chosen professions.
                The college is committed to fostering innovation,
                critical thinking, and leadership, while creating
                a supportive and inclusive learning environment.
                Through engagement with industry, research, and
                community initiatives,  aiming to develop competent
                and responsible professionals who contribute meaningfully
                to society, the economy, and national development."
                reverse={true}/>
            <Values/>
            <WhyLucy/>
            
            <NewLetter/>
            <Footer/>
        </div>
    );
}
export default AboutPage;