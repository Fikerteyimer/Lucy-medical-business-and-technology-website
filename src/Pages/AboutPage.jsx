import AboutSections from "../Components/AboutSections";
import CardGrid from "../Components/CardGrid";
import Footer from "../Components/Footer";
import Heros from "../Components/Heros";
import NavBar from "../Components/NavBar";
import NewLetter from "../Components/NewsLetter";
import Values from "../Components/Values";
import AboutUs from '../assets/AboutUs.jpg';


function AboutPage(){
    return(
        <div>
            <NavBar/>
            <Heros title="About Us" children="Explore a lot about lucy" Image={AboutUs}/>
            <AboutSections/>
            <Values/>
            
            <NewLetter/>
            <Footer/>
        </div>
    );
}
export default AboutPage;