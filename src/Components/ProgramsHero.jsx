import programs from "../assets/programs.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
function ProgramsHero(){
    return(
         <div
                className="relative h-60 w-screen  mt-10  flex items-center justify-center "
                 style={{
                  backgroundImage: `url(${programs})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-blue-900/60">
                <Heading title="Our Programs" className="text-5xl text-white"/>
                <Paragraph children="Explore our programs in Medical,Business and Technology fields" className="text-2xl text-center text-white"/>
                </div>
                

        </div>
    );

}
export default ProgramsHero;
 