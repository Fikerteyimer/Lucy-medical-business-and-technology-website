import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Heading({ title, className }) {
  return (
    <h1
      className={twMerge(
        clsx(
          "font-bold text-blue-900 text-3xl md:text-4xl my-6 py-5 text-center",
          className
        )
      )}
    >
      {title}
    </h1>
  );
}

export default Heading;