import Paragraph from "./Paragraph";
import SIDE from "../assets/SIDE.jpg"

function AboutSections(){
    return(
        <div className=" flex justify-between items-center m-20">
            <div className=" w-1/2">
            <h2 className="text-2xl text-blue-900 font-bold mb-10">Who is Lucy? </h2>
            <Paragraph children="Lucy Medical, Business and Technology College
             is a private higher education institution established in Ethiopia
              in 2014 with the aim of providing quality education and developing
               skilled professionals in different fields of study. Since its establishment,
                the college has been committed to academic excellence, practical training,
                 and student-centered learning that prepares graduates to meet the demands of the
                  modern workforce. The institution currently operates two campuses and offers programs in
                   various disciplines including health sciences, business, and technology. 
                   By combining theoretical knowledge with hands-on experience, the college
                    strives to equip students with the skills, professionalism, and confidence
                     needed to succeed in their careers. Lucy College is dedicated to creating a
                      supportive learning environment with qualified instructors, modern facilities,
                       and a strong commitment to community development. Through continuous improvement in teaching, 
                       training, and innovation, the college aims to contribute to the development of skilled human resources
                        and play an important role in the advancement of education and society."/>
                        
        </div>
        <img src={SIDE} className="object-cover h-auto rounded-2xl"/>
        </div>
    );

}
export default AboutSections;