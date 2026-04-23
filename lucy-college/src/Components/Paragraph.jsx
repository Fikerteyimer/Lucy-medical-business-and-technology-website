import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Paragraph({ children, className }) {
  return (
    <p
      className={twMerge(
        clsx(
          "text-gray-700   text-lg leading-relaxed text-left",
          className
        )
      )}
    >
      {children}
    </p>
  );
}

export default Paragraph;