import Heading from "./Heading";
import Paragraph from "./Paragraph";
function Heros({title,children,Image}){
    return(
         <div
                className="relative h-80 w-screen  mt-20  flex items-center justify-center "
                 style={{
                  backgroundImage: `url(${Image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gray-100/60">
                <Heading title={title} className="text-5xl text-blue-900"/>
                <Paragraph children={children} className=" text-center text-blue-900"/>
                </div>
                

        </div>
    );

}
export default Heros;
 