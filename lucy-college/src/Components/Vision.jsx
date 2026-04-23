import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

function Vision({ title, text, Icon1, Icon2, Icon3, bgColor = "bg-blue-300" }) {
  const Icons = [Icon1, Icon2, Icon3];

  return (
    <div className="flex flex-col items-center gap-6 p-6">

      {/* ICONS */}
      <div className="flex flex-col items-center gap-4">

        {/* Main Icon */}
        <div className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor} text-white text-2xl shadow-md`}>
          {Icon1 && <Icon1 />}
        </div>

        {/* Side Icons */}
        <div className="flex gap-4">
          {Icons.slice(1).map((Icon, index) =>
            Icon ? (
              <div
                key={index}
                className={`w-14 h-14 flex items-center justify-center rounded-full ${bgColor} text-white text-xl shadow`}
              >
                <Icon />
              </div>
            ) : null
          )}
        </div>

      </div>

      {/* TITLE */}
      <Subheading text={title} />

      {/* TEXT */}
      <div className="max-w-xl text-center">
        <Paragraph className="text-gray-600 leading-relaxed">
          {text}
        </Paragraph>
      </div>

    </div>
  );
}

export default Vision;