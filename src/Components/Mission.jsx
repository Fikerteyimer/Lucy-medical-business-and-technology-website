import Heading from "./Heading";
import Paragraph from "./Paragraph";

function Mission(){
    return(
        <div className="flex justify-between items-center m-20 gap-20">
            <h2 className="text-3xl text-blue-900 font-bold"> Our Mission </h2>
            <Paragraph children="To provide quality education and
              practical training that develops skilled, ethical, 
              and innovative professionals who contribute to community
               and national development."/>
        </div>
    );

}
export default Mission;