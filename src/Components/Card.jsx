import { Link } from "react-router-dom";

function Card({ title, description, image, link }) {
  return (
    <div className="shadow-xl border-white bg-white p-8 rounded-lg  hover:shadow-2xl hover: transition-transform duration-300 hover:scale-105 ">
      
       <h2 className="text-xl font-semibold mb-2 text-blue-500">{title}</h2>
       {image && <img src={image}
       alt={title} 
       className="w-full h-32 object-cover mb-2 rounded" />}
       <p className="text-gray-700 mb-2 ">{description}</p>
       <Link
        to={link}
        className="inline-flex items-center text-blue-500 group"
      >
        Learn More
      <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:ml-12">
      →
       </span>
</Link>
    </div>
  );
}

export default Card;