import { twMerge } from "tailwind-merge";
import clsx from "clsx";
function Subheading({text,className}){
    return(
        <h2 
          className={twMerge(clsx("text-2xl font-medium md:text-3xl text-blue-900 my-6 py-5 text-center",className))}>
            {text}
        </h2>
    );
}
export default Subheading;