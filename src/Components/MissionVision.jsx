import Paragraph from "./Paragraph";

function MissionVision({ title, text, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center my-20 mx-30 gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <h2 className="text-3xl text-blue-900 font-bold">{title}</h2>
      <Paragraph children={text} />
    </div>
  );
}

export default MissionVision;