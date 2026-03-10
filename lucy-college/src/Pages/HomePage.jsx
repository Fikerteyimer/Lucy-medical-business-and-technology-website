import NavBar from "../Components/NavBar";
import Hero from '../Components/Hero';
import AboutSection from "../Components/AboutSection";
import CardGrid from "../Components/CardGrid";
import Counter from '../Components/Counter';

import { courses } from "../data";

function HomePage(){
    const categories = [
        {
            school: "Medical",
            description: "Explore programs in medicine, nursing, and healthcare sciences, preparing future professionals for a healthier world.",
            link:"/courses"
        },
        {
            school: "Business",
            description: "Learn management, finance, and entrepreneurship skills to lead in the corporate and startup world.",
            link:"/courses"
        },
        {
            school: "Technology",
            description: "Build practical coding, software, and development skills to create innovative apps, websites, and solutions for the modern world.",
            link:"/courses"
        }
    ];

    return(
        <div>
          <NavBar/>  
          <Hero/>
          <AboutSection/>
          <CardGrid title="Top Course Categories" items={categories} />
          <Counter/>
          <div className="bg-gray-50">
          <CardGrid title="Our Popular Courses" items={courses.slice(1,4)}/>
          </div>
          
        </div>
    );
}

export default HomePage;