import NavBar from "./NavBar";
import Vision from "./Vision";
import { FaEye, FaGlobe, FaBook } from "react-icons/fa";

export default function VisionMission() {
  return (
    <div>
      <NavBar />

      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-16 px-6 md:px-20 lg:px-40 py-16">

        <Vision
          title="Mission"
          text="Our mission is to provide high-quality education that empowers students with practical skills. We aim to foster innovation, creativity, and critical thinking in every learner. We are committed to building a supportive and inclusive learning environment. Our goal is to prepare graduates who can solve real-world problems effectively."
          Icon1={FaEye}
          Icon2={FaGlobe}
          Icon3={FaBook}
          bgColor="bg-blue-400"
        />

        <Vision
          title="Vision"
          text="Our vision is to become a leading center of excellence in education and research. We aspire to produce globally competitive and ethically responsible graduates. We aim to drive innovation that positively impacts society and development. We envision a future where knowledge transforms lives and communities."
          Icon1={FaEye}
          Icon2={FaGlobe}
          Icon3={FaBook}
          bgColor="bg-pink-400"
        />

      </div>
    </div>
  );
}