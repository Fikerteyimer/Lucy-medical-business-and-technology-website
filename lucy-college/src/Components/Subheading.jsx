import { twMerge } from "tailwind-merge";
import clsx from "clsx";
function Subheading({text,className,color}){
    return(
        <h2 
          className={twMerge(clsx("text-xl font-medium md:text-2xl text-blue-700 mb-3 py-5 text-center",className,color))}>
         {text}
        </h2>
    );
}
export default Subheading;