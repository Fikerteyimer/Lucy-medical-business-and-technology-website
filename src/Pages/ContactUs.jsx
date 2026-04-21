import ContactHero from "../Components/ContactHero";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import NewLetter from "../Components/NewsLetter";
import ContactSection from "../Components/ContactSection";
import Heros from "../Components/Heros";

function ContactUs(){
    return(
        <div>
            <NavBar/>
            <ContactHero/>
             <ContactInfo />
            <ContactSection />
            <NewLetter/>
            <Footer/>
        </div>
    );

}
export default ContactUs;