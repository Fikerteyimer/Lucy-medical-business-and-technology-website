import Heading from "./Heading";
import Paragraph from "./Paragraph";
import logo from '../assets/logo.jpg'

function ContactHero(){
    return(
        <>
        <div className="mt-30 break-keep animate-fadeUp">
            <img src={logo} className="w-30 h-30 mx-auto object-cover"/>
            <hr className="border-t-3 border-blue-900 w-30 mx-auto " />
            <Heading title="Contact Us"/>
            <Paragraph children="Get in touch with us today your journey at Lucy College starts here!" className="text-center"/>

        </div>
        
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease forwards;
          }
        `}
      </style>
      </>
        
    );

}
export default ContactHero;