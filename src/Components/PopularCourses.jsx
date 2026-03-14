import { useNavigate } from "react-router-dom";
import { courses } from "../data";
import Button from "./Button";
import CardGrid from "./CardGrid";

function PopularCourses(){
    const navigate=useNavigate();
    return(
        <div>
           
            <CardGrid title="Our Popular Courses"
                      items={courses.slice(3,6) }
                      button={<Button text="view All" className="py-3 px-20" onClick={() => navigate("/courses")} />}
                     
            
            />
             
        </div>
    );

}
export default PopularCourses;