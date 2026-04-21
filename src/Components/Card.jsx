import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Paragraph from "./Paragraph";

function Card({ school, title, description, image, className,text,arrow }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/courses/${encodeURIComponent(school)}`);
    
  }

  return (
    <div className="flex flex-col shadow-md bg-white p-5 md:p-7 rounded-lg hover:shadow-md transition-transform duration-300 hover:scale-105">
      
      <div className="mb-4">
        {image && (
          <img
            src={image}
            alt={title}
            className={twMerge(
              clsx("w-full h-35 object-cover mb-2 rounded", className)
            )}
          />
        )}

        <h2 className="text-xl font-semibold mb-2 text-blue-700 text-center">
          {school}
        </h2>

        <Paragraph>{description}</Paragraph>
      </div>

      <div className="mt-auto">
        {text&&
        <button
          onClick={handleClick}
          className="inline-flex items-center text-blue-700 font-medium group"
        >
          {text}
          {arrow&&
          <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
            {arrow}
          </span>
        }
        </button>
        }
      </div>

    </div>
  );
}

export default Card;