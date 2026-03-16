import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";

function Card({ title, description, image, link }) {
  return (
    <div className="flex flex-col  h-full shadow-xl bg-white p-5 md:p-8 rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover mb-2 rounded"
          />
        )}
        <Paragraph>{description}</Paragraph>
       
      </div>


      <div className="mt-auto">
        {link&&
        <Link
          to={link}
          className="inline-flex items-center text-blue-700 group font-medium"
        >
          Learn More
          <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>}
        
      </div>
    </div>
  );
}

export default Card;