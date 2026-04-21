import Button from "./Button";
import Card from "./Card"; 
import Heading from "./Heading";
function CardGrid({ title, items,button,className,text,arrow}) {
  return (
    <div>
      <Heading title={title} />
    
      <div className="grid gap-7 md:grid-cols-3  px-5 md:px-20">
        {items.map((item, index) => (
          <Card
            key={index}
            school={item.school}
            description={item.description}
            image={item.image} 
            link={item.link}
            className={className}
            text={text}
            arrow={arrow}

           
          />
        ))}
         

      </div>
       {button && <div className="flex justify-center items-center mt-20 ">{button}</div>}
    </div>
  );
}

export default CardGrid;