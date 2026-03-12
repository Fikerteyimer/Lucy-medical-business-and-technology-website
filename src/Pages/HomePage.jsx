import NavBar from "../Components/NavBar";
import Hero from '../Components/Hero';
import AboutSection from "../Components/AboutSection";
import CardGrid from "../Components/CardGrid";
import Counter from '../Components/Counter';
import { courses,categories } from "../data";
import NewLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Campus from "../Components/Campus";

function HomePage(){
   

    return(
        <div>
          <NavBar/> 
          
          <Hero/>
          
          <AboutSection/>
          <CardGrid title="Top Course Categories" items={categories} />
          <Counter/>
          <div className="bg-gray-50 py-15">
          <CardGrid title="Our Popular Courses" items={courses.slice(1,4)}/>
          </div>
          <Campus/>
          
         
          <NewLetter/>
          <Footer/>
          
          
        </div>
    );
}

export default HomePage;