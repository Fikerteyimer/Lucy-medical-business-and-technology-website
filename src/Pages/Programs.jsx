import CardGrid from "../Components/CardGrid";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import NewLetter from "../Components/NewsLetter";
import ProgramsCard from "../Components/ProgramsCard";
import Heros from "../Components/Heros";
import  courses  from "../assets/courses.jpg";
import { categories,  } from "../data";

function Programs(){
    return(
        <div>
            <NavBar/>
            <Heros 
               title="Our Programs"
               children="Explore Our Programs in Medical,business and technology fields."
               Image={courses}
            />
            <ProgramsCard/>
            <NewLetter/>
            <Footer/>
        </div>
    );

}
export default Programs;