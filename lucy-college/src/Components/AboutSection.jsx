import { useNavigate } from "react-router-dom";
import About1 from '../assets/About1.jpg'
import About2 from '../assets/About2.jpg'
import About3 from '../assets/About3.jpg'
import Button from './Button';
import Heading from './Heading';
import Paragraph from "./Paragraph";

function AboutSection(){
    const navigate=useNavigate();
    return(
        <section className="flex justify-between items-center gap-12 px-12 py-16 bg-gray-100 w-screen">

            
            <div className="grid grid-cols-2 gap-4 w-1/2">
                <img 
                    src={About1} 
                    className="w-full h-60 object-cover rounded-3xl shadow-md"
                    alt="about1"
                />

                <img 
                    src={About2} 
                    className="w-full h-60 object-cover rounded-3xl shadow-md"
                    alt="about3"
                />

                <img 
                    src={About3} 
                    className="w-full h-60 object-cover rounded-3xl shadow-md col-span-2"
                    alt="about2"
                />
            </div>

           
            <div className="w-1/2 space-y-6">
                <Heading title="About Lucy"/>

                 <Paragraph children="Our institution is committed to academic excellence,
                    creativity, and practical learning. Students are encouraged
                    to explore new ideas, participate in research, and engage
                    in collaborative projects that prepare them for real-world
                    challenges. With diverse programs, modern facilities, and
                    a vibrant campus life, we strive to create an environment
                    where every student can grow, discover their potential,
                    and build a meaningful future."/>

                <Button text="More About Us" onClick={() => navigate("/about")} />
            </div>

        </section>
    );
}

export default AboutSection;