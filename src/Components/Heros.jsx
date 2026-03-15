import Heading from "./Heading";
import Paragraph from "./Paragraph";
function Heros({title,children,Image}){
    return(
         <div
                className="relative h-60 w-screen  mt-20  flex items-center justify-center "
                 style={{
                  backgroundImage: `url(${Image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-blue-900/60">
                <Heading title={title} className="text-5xl text-white"/>
                <Paragraph children={children} className="text-2xl text-center text-white"/>
                </div>
                

        </div>
    );

}
export default Heros;
 