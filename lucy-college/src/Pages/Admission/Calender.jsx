import AboutHero from '../../Components/AboutHero';
import NavBar from '../../Components/NavBar';
import NewsLetter from '../../Components/NewsLetter';
import Footer from '../../Components/Footer';

function Calender(){
    return(
        <div>
            <NavBar/>
            <AboutHero 
              height='50vh' overlay="bg-gray-400/30"
              children="calender >"
              title="Calender"
              text="The college's Academic Calendar offers a comprehensive overview of key dates and events for the academic year, helping you stay informed and on track throughout the year."
              textColor=''/>
            <NewsLetter/>
            <Footer/>

        </div>
    );

}
export default Calender;