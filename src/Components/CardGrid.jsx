import Button from "./Button";
import Card from "./Card"; 
import Heading from "./Heading";
function CardGrid({ title, items,button,className}) {
  return (
    <div>
      <Heading title={title} />
    
      <div className="grid gap-7 md:grid-cols-3  px-10 md:px-30">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.school}
            description={item.description}
            image={item.image} 
            link={item.link}
            className={className}
            
           
          />
        ))}
         

      </div>
       {button && <div className="flex justify-center items-center mt-20 ">{button}</div>}
    </div>
  );
}

export default CardGrid;