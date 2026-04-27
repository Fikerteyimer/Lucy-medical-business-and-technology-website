import AboutHero from "../../Components/AboutHero";
import Footer from "../../Components/Footer";
import LinksHero from "../../Components/LinksHero";
import NavBar from "../../Components/NavBar";
import NewsLetter from '../../Components/NewsLetter';
import { links } from "../../data";
function Admission(){
    return(
        <div>
            <NavBar />
            <AboutHero children="Academic Cases" title="Admission"/>
            <LinksHero links={links} />
            <NewsLetter/>
            <Footer/>
           
        </div>

    );
}
export default Admission;