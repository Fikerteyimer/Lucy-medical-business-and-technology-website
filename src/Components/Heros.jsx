import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
function Heros({ title, children, Image, text }) {
  return (
    <div
      className="relative h-80 w-full mt-20 flex items-center justify-center bg-cover bg-center"
 
    >
    
      <div className="absolute inset-0 bg-blue-900/80"></div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-2xl">
        <Heading
          title={title}
          className="md:text-4xl text-white mb-4"
        />

        <Paragraph className="text-white mb-6">
          {children}
        </Paragraph>

        {text && <Button text={text} />}
      </div>
    </div>
  );
}

export default Heros;
 