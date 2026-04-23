import NavBar from "./NavBar";
import Vision from "./Vision";
import {FaEye,FaGlobe,FaBook} from "react-icons/fa"

export default function VisionMission(){
    return(
        <div>
            <NavBar/>
            <div className="flex flex-row items-center gap-10 m-20 px-6 md:px-40">
             <div className="grid md:grid-cols-3 gap-10">
                <Vision
                  title="Mission"
                  text="Our mission is to provide high-quality education that empowers students with practical skills.
We aim to foster innovation, creativity, and critical thinking in every learner.
We are committed to building a supportive and inclusive learning environment.
Our goal is to prepare graduates who can solve real-world problems effectively."
                  Icon1={FaEye}
                  Icon2={FaGlobe}
                  Icon3={FaBook}
                  bgColor="bg-blue-400"
                />
             
             </div>
             <div className="grid md:grid-cols-3 gap-10">
                <Vision
                  title="Vision"
                  text="Our vision is to become a leading center of excellence in education and research.
We aspire to produce globally competitive and ethically responsible graduates.
We aim to drive innovation that positively impacts society and development.
We envision a future where knowledge transforms lives and communities."
                  Icon1={FaEye}
                  Icon2={FaGlobe}
                  Icon3={FaBook}
                  bgColor="bg-pink-400"
                />
            </div>
             
             </div>
        </div>
    );

}