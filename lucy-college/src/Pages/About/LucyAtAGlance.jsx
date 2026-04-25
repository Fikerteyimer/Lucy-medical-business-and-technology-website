import AboutHero from "../../Components/AboutHero";
import NavBar from "../../Components/NavBar";
import NewsLetter from "../../Components/NewsLetter";
import LucyAtAglanceBody from"../../Components/LucyAtAglanceBody";
import Footer from "../../Components/Footer";
import Dessie from "../../assets/Dessie.jpg";
function LucyAtAGlance(){
    return(
        <div>
            <NavBar/>
            <AboutHero background={Dessie} smtext="Lucy-at-a-glance" heading="About Us" text="Explore the background of Lucy College, its academic programs, and the schools under one of the leading institutions focused on health, business, and technology education in Ethiopia." />
            <LucyAtAglanceBody/>
            <NewsLetter/>
            <Footer/>
            
        </div>
    );

}
export default LucyAtAGlance;