import AboutHero from "./AboutHero";
import NavBar from "./NavBar";
import NewsLetter from "./NewsLetter";
import LucyAtAglanceBody from"./LucyAtAglanceBody";
import Footer from "./Footer";
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