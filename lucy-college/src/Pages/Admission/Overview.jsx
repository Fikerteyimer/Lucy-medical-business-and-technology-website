import Navbar from '../../Components/NavBar';
import OverViewHero from '../../Components/OverViewHero';
import Newsletter from '../../Components/NewsLetter';
import Footer from '../../Components/Footer';
function Overview(){
    return(
        <div>
            <Navbar/>
            <OverViewHero/>
            <Newsletter/>
            <Footer/>
            
        </div>
    );

}
export default Overview;