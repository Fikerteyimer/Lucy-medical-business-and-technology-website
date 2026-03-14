import NavBar from "../Components/NavBar";
import Hero from '../Components/Hero';
import AboutSection from "../Components/AboutSection";
import Counter from '../Components/Counter';
import NewLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Campus from "../Components/Campus";
import Category from "../Components/Category";
import PopularCourses from "../Components/PopularCourses";

function HomePage(){
    return(
        <div>
          <NavBar/> 
          <Hero/>
          <AboutSection/>
          <Category/>
          <Counter/>
          <PopularCourses/>
          <Campus/>
          <NewLetter/>
          <Footer/> 
        </div>
    );
}

export default HomePage;