import AboutHero from "../../Components/AboutHero";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import NewsLetter from '../../Components/NewsLetter';
function AcademicCases(){
    return(
        <div>
            <NavBar />
            <AboutHero children="Academic Cases" title="Academic Cases"/>
            <NewsLetter/>
            <Footer/>
           
        </div>

    );
}
export default AcademicCases;