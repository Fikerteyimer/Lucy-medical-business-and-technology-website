import AboutHero from "../../Components/AboutHero";
import NavBar from "../../Components/NavBar";
import NewsLetter from "../../Components/NewsLetter";
import LucyAtAglanceBody from"../../Components/LucyAtAglanceBody";
import Footer from "../../Components/Footer";
function LucyAtAGlance(){
    return(
        <div>
            <NavBar/>
            <AboutHero/>
            <LucyAtAglanceBody/>
            <NewsLetter/>
            <Footer/>
            
        </div>
    );

}
export default LucyAtAGlance;