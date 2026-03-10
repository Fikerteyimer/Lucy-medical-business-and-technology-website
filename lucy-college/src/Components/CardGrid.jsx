import Card from "./Card"; 

function CardGrid({ title, items }) {
  return (
    <div>
      <h1 className="font-bold text-blue-900 text-3xl my-7 py-5 text-center">{title}</h1>
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