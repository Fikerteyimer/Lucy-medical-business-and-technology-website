import CardGrid from "../Components/CardGrid";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import NewLetter from "../Components/NewsLetter";
import ProgramsCard from "../Components/ProgramsCard";
import ProgramsHero from "../Components/ProgramsHero";
import { categories, courses } from "../data";

function Programs(){
    return(
        <div>
            <NavBar/>
            <ProgramsHero/>
            <ProgramsCard/>
            
            <NewLetter/>
            <Footer/>
        </div>
    );

}
export default Programs;