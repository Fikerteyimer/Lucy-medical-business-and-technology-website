import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

function Cards({
  text,
  description,
  Icon,
  bgcolor,
  color = "text-gray-800",
  Iconcolor = "text-blue-700",
  Subcolor
}) {
  return (
    
    <div
      className={twMerge(
        clsx(
          "flex flex-col shadow-md p-4 text-left md:text-center rounded-xl hover:shadow-lg transition-transform duration-300 hover:scale-100 mt-20",
          bgcolor
        )
      )}
    >
       
      {Icon && (
        <div className="flex justify-center mb-4">
          <Icon className={clsx("text-4xl", Iconcolor)} />
        </div>
      )}

      <Subheading text={text} color={Subcolor} className={clsx("text-sm font-semibold mb-2 text-center")} />
     

      <Paragraph className={color} children={description} />
      
        
    
      
    </div>
  );
}

export default Cards;