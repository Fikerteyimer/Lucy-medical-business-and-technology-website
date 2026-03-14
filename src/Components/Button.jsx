import { twMerge } from "tailwind-merge";
import clsx from "clsx";
function Button({text,onClick,className}){
    return(
        <button onClick={onClick}
        className={twMerge(clsx("bg-blue-900  hover:bg-blue-500 text-white px-6 py-1.5 rounded-2xl transition duration-300",className))}>
            {text}
        </button>
    );

}
export default Button;