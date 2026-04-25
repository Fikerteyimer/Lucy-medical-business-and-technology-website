import Navbar from '../../Components/NavBar';
import Newsletter from '../../Components/NewsLetter';
import Footer from '../../Components/Footer';
import AboutHero from '../../Components/AboutHero';
import development from '../../assets/development.jpg';
function Overview(){
    return(
        <div>
            <Navbar/>
            <AboutHero background={development} />
            <Newsletter/>
            <Footer/>
            
        </div>
    );

}
export default Overview;