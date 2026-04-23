import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

function Vision({ title, text, Icon1, Icon2, Icon3, bgColor = "bg-blue-300" }) {
  const Icons = [Icon1, Icon2, Icon3];

  return (
    <div className="flex flex-col items-center text-center gap-6 m-10 p-6">

      <div className="flex flex-col items-center gap-4">

        <div className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor} text-white text-2xl shadow-md`}>
          {Icon1 && <Icon1 />}
        </div>

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

      <Subheading text={title} />

      <div className="max-w-md">
        <Paragraph>{text}</Paragraph>
      </div>

    </div>
  );
}

export default Vision;