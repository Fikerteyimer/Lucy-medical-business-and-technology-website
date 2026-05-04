import Cards from "../Components/Cards";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function CardsGrid({ data, gap }) {
  return (
    <div className={twMerge(clsx("grid grid-cols-1 md:grid-cols-3 gap-6", gap))}>
      {data.map((item, index) => (
        <Cards
          key={index}
          text={item.text}
          description={item.description}
          Icon={item.Icon}
          bgcolor={item.bgcolor}
          color={item.color}
          Subcolor={item.Subcolor}
          Iconcolor={item.Iconcolor}
        />
      ))}
    </div>
  );
}

export default CardsGrid;