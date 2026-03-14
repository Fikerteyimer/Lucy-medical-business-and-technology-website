import Heading from "./Heading";
import Paragraph from "./Paragraph";

function ContactHero(){
    return(
        <div className="mt-30">
            <Heading title="Contact Us"/>
            <Paragraph children="Get in touch with us today your journey at Lucy College starts here!" className="text-center"/>
        </div>
        
    );

}
export default ContactHero;