import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Horizontal({ className }) {
  return (
    <hr
      className={twMerge(
        clsx("border-t-4 border-blue-900 w-30 mx-auto", className)
      )}
    />
  );
}

export default Horizontal;