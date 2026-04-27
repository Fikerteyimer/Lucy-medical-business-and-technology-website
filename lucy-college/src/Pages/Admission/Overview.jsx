import Navbar from '../../Components/NavBar';
import Newsletter from '../../Components/NewsLetter';
import Footer from '../../Components/Footer';
import development from '../../assets/development.jpg';
import AdmissionBody from '../../Components/AdmissionBody';
function Overview(){
    return(
        <div>
            <Navbar/>
            <AdmissionBody/>
            <Newsletter/>
            <Footer/>
            
        </div>
    );

}
export default Overview;