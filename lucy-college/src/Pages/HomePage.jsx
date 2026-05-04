import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Hero from '../Components/Hero';
import AboutSection from "../Components/AboutSection";
import Counter from '../Components/Counter';
import NewLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Campus from "../Components/Campus";
import CardGrid from "../Components/CardGrid";
import { categories, courses,whatweOffer } from "../data";
import Button from "../Components/Button";
import WhyLucy from "../Components/WhyLucy";
import CampusLife from "../Components/CampusLife";
import LatestNews from "../Components/LatestNews";
import Paragraph from "../Components/Paragraph";
import Heading from "../Components/Heading";


function HomePage() {
    const navigate = useNavigate(); 
    return (
        <div>
          <NavBar /> 
          <Hero />
           <Counter />
           <div>
            <Heading title="What we Offer" className="mt-20 "/>
            <Paragraph children="At Lucy College, we offer a diverse range of programs designed to empower students with knowledge and practical skills for real-world success" className="text-center"/>
           <CardGrid data={whatweOffer} gap="gap-3"/>
          </div>
         
          
         
         
          
          
         <LatestNews/>
         
          
          <NewLetter />
          <Footer /> 
        </div>
    );
}

export default HomePage;