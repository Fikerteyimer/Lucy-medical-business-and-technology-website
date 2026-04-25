import Navbar from '../../Components/NavBar';
import Newsletter from '../../Components/NewsLetter';
import Footer from '../../Components/Footer';
import AboutHero from '../../Components/AboutHero';
import Dessie from '../../assets/Dessie.jpg';
function Overview(){
    return(
        <div>
            <Navbar/>
            <AboutHero background={Dessie} />
            <Newsletter/>
            <Footer/>
            
        </div>
    );

}
export default Overview;