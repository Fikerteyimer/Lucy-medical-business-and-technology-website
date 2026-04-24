import Heading from './Heading';
import Horizontal from './Horizontal';
import Paragraph from './Paragraph';

export default function VisionHero({ text, title }) {
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
        flex items-center justify-start
        mt-6 md:mt-8 md:ml-50 animate-fadeRight
      ">
        <div className="flex flex-col  md:items-center justify-center ml-6 md-ml-16 text-white text-3xl font-bold  ">
        <Heading title={title} className="text-white md:text-5xl font-bold my-0 py-0 " />
        <Heading title={text} className="text-white md:text-5xl font-bold my-0 py-0" />
        <Horizontal className="border-red-400 mt-5  "/>
        </div>
      </div>

    </div>
    <style>
        {`
          @keyframes fadeRight {
         from { opacity: 0; transform: translateX(50px); }
         to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeRight {
        animation: fadeRight 1s ease forwards;
         }
        `}
      </style>
    </>
    
  );
}