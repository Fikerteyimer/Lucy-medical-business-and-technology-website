import AboutHero from "../../Components/AboutHero";
import Footer from "../../Components/Footer";
import LinksHero from "../../Components/LinksHero";
import NavBar from "../../Components/NavBar";
import NewsLetter from '../../Components/NewsLetter';
function AcademicCases(){
    return(
        <div>
            <NavBar />
            <AboutHero children="Academic Cases" title="Academic Cases"/>
            <LinksHero/>
            <NewsLetter/>
            <Footer/>
           
        </div>

    );
}
export default AcademicCases;