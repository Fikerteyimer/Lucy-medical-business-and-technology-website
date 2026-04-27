import AboutHero from "../../Components/AboutHero";
import Footer from "../../Components/Footer";
import LinksHero from "../../Components/LinksHero";
import NavBar from "../../Components/NavBar";
import NewsLetter from "../../Components/NewsLetter";
import { cases } from "../../data";

function AcademicCases() {
  return (
    <div>
      <NavBar />

      <AboutHero
        children="Academic Cases"
        title="Academic Cases"
        text="Explore academic policies and student information at Lucy College."
       
      />
      <LinksHero links={cases}/>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default AcademicCases;