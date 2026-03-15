import { values } from "../data";
function Values(){
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-blue-50 p-30">
            {values.map((value,index)=>{
                return(
               <div key={index} className="bg-white p-8 rounded-2xl  shadow-lg hover:-translate-y-2 transform transition duration-300 text-center">
               <img src={value.img} alt={value.title} className="w-16 h-16 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-[#0B2C4D] mb-2">{value.title}</h3>
               <p className="text-gray-600">{value.desc}</p>
               </div>
                );
            })}
        </div>

    );

}
export default Values;