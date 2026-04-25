import Subheading from "./Subheading";
import Paragraph from "./Paragraph";
import Horizontal from "./Horizontal";

function LucyAtAglanceBody({
  logo,
  title,
  quote,
  children,
  showHorizontal=false,
  className = "",
}) {
  return (
    <div className={`px-6 md:px-20 mt-10 space-y-6 ${className}`}>
      
      {(logo || title || quote) && (
        <div className="flex items-start gap-6 my-6">
          
          {logo && (
            <img
              src={logo}
              alt="logo"
              className="w-28 h-28 object-cover"
            />
          )}

          {logo && <div className="w-0.5 h-20 bg-blue-700 mt-1" />}

          <div className="leading-snug">
            {title && (
              <Subheading
                className="font-bold mb-1 text-left"
                text={title}
              />
            )}
            {showHorizontal &&(
              <Horizontal className="border-red-500"/>
            )

            }

            {quote && (
              <Paragraph className="text-sm italic text-gray-600">
                “{quote}”
              </Paragraph>
            )}
          </div>
        </div>
      )}

      
      <div className="space-y-4 leading-snug text-justify">
        {children}
      </div>
    </div>
  );
}

export default LucyAtAglanceBody;