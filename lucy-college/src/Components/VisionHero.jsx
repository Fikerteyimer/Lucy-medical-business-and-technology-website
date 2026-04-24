import Heading from './Heading';
import Paragraph from './Paragraph';

export default function VisionHero({ text }) {
  return (
    <>
    <div className="bg-gray-100 h-70 mt-20 pt-2 px-4 sm:px-6 md:px-12 lg:px-20">
      
      <Paragraph className="text-sm text-gray-400">
        Mission-and-vision
      </Paragraph>

      <div className="
        bg-linear-to-r from-blue-900 to-blue-800 
        w-full
        min-h-45 sm:min-h-55 md:min-h-60
        flex items-center justify-center
        mt-6 md:mt-8 md:ml-50 animate-fadeUp
      ">
        <Heading title={text} className="text-white text-5xl font-bold" />
      </div>

    </div>
    <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease forwards;
          }
        `}
      </style>
    </>
    
  );
}