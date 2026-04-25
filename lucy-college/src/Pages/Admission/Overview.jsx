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
              title="Start Your Journey at Lucy College"
              text="Discover admission requirements, programs, and how to apply." />
              <AdmissionBody/>
            <Newsletter/>
            <Footer/>
            
        </div>
    );

}
export default Overview;