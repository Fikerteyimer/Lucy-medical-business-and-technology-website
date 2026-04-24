import CoreValues from "./Values";
import NavBar from "./NavBar";
import Vision from "./Vision";
import { FaEye, FaGlobe, FaBook, FaBullseye } from "react-icons/fa";
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import VisionHero from './VisionHero';

export default function VisionMission() {
  return (
    <div>
      <NavBar />
      <VisionHero text=" MISSION, VISION AND CORE VALUES" title="Our" />
      <div className="grid md:grid-cols-2 gap-16 px-6 md:px-20 lg:px-40 py-16">
        <Vision
          title="Mission"
          text="Our mission is to provide high-quality education that empowers students with practical skills. We aim to foster innovation, creativity, and critical thinking in every learner. We are committed to building a supportive and inclusive learning environment. Our goal is to prepare graduates who can solve real-world problems effectively."
          Icon1={FaEye}
          Icon2={FaGlobe}
          Icon3={FaBook}
          bgColor="bg-blue-400"
          items={[
            "  Provision of educational opportunities relevant to societal needs.",
            " Engage in research activities responsive to the needs of the society.",
            "Respond to societal problems through active outreach and community engagement.",
            " Produce graduates who are confident in their ability of professional proactive and leadership through trainings aided by appropriate technology.",
            "  Respond to societal problems through active community engagement.",
            "Encourage students to participate in hands-on professional development activities and to expand their academic and instructional knowledge through planned programs of service and scholarly creative activities"
          ]}
        />
        <Vision
          title="Vision"
          text="Our vision is to become a leading center of excellence in education and research. We aspire to produce globally competitive and ethically responsible graduates. We aim to drive innovation that positively impacts society and development. We envision a future where knowledge transforms lives and communities."
          Icon1={FaEye}
          Icon2={FaGlobe}
          Icon3={FaBook}
          bgColor="bg-pink-400"
          items={[
            "Lucy Medical Business and Technology College aspires to be one of the leading higher education institutions in Ethiopia providing educational opportunities responsive to the needs of the society through graduate and undergraduate studies, research and community services by 2030.",
           
          ]}

        />
      </div>
      <CoreValues/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}