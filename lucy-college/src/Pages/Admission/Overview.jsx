import Navbar from '../../Components/NavBar';
import Newsletter from '../../Components/NewsLetter';
import Footer from '../../Components/Footer';
import AboutHero from '../../Components/AboutHero';
import development from '../../assets/development.jpg';
import AdmissionBody from '../../Components/AdmissionBody';
function Overview(){
    return(
        <div>
            <Navbar/>
            <AboutHero 
              background={development} 
              children="Overview" 
              title="Admission"
              text="Discover admission requirements, programs, and how to apply."
              overlay="bg-blue-900/70"/>
              <AdmissionBody/>
            <Newsletter/>
            <Footer/>
            
        </div>
    );

}
export default Overview;