import Card from "./Card"; 
import Heading from "./Heading";

function CardGrid({ title, items }) {
  return (
    <div>
      <Heading title={title}/>
      <div className="grid gap-6 md:grid-cols-3 px-30">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.school}
            description={item.description}
            image={item.image} 
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;