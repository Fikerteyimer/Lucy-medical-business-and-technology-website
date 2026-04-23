import AboutHero from "./AboutHero";
import NavBar from "./NavBar";
import NewsLetter from "./NewsLetter";
import LucyAtAglanceBody from"./LucyAtAglanceBody";
function LucyAtAGlance(){
    return(
        <div>
            <NavBar/>
            <AboutHero/>
            <LucyAtAglanceBody/>
            <NewsLetter/>
        </div>
    );

}
export default LucyAtAGlance;