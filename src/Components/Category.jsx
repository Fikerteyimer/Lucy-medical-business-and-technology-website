import { useNavigate } from "react-router-dom";
import { categories } from "../data";
import Button from "./Button";
import CardGrid from "./CardGrid";
function Category(){
    const navigate=useNavigate();
    return(
        <div>
        <CardGrid title="Top Course Categories" items={categories} button={<Button text="view All" className="py-3 px-20" onClick={() => navigate("/courses")} />}/>
        </div>
    );

}
export default Category;