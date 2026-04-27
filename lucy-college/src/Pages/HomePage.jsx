import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Hero from '../Components/Hero';
import AboutSection from "../Components/AboutSection";
import Counter from '../Components/Counter';
import NewLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Campus from "../Components/Campus";
import CardGrid from "../Components/CardGrid";
import { categories, courses } from "../data";
import Button from "../Components/Button";
import WhyLucy from "../Components/WhyLucy";
import CampusLife from "../Components/CampusLife";
import LatestNews from "../Components/LatestNews";

function HomePage() {
    const navigate = useNavigate(); 
    return (
        <div>
          <NavBar /> 
          <Hero />
          
          <AboutSection />
           
          <CardGrid
            title="Top Course Categories"
            items={categories}
            className="w-20 h-20 mx-auto"
          />
          <WhyLucy 
            title="Why You Choose Lucy College?"
            text="Lucy Medical, Business and Technology College offers a unique blend of
                  practical training, academic excellence, and student-centered learning
                  to prepare graduates for successful careers and societal contribution."
          />
          <Counter />
         
          
          <CardGrid
            title="Our Popular Courses"
            items={courses.slice(1,4)}
            button={
              <Button
                text="View All"
                className="py-3 px-20"
                onClick={() => navigate("/courses")}
              />
            }
          />
         <LatestNews/>
         
          
          <NewLetter />
          <Footer /> 
        </div>
    );
}

export default HomePage;