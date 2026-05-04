import Heading from "./Heading";

function Heros({ image, children, title }) {
  return (
    <div
      className="relative w-full min-h-90 mt-8 flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="absolute inset-6 border border-white/10 rounded-2xl"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">

        {title && (
          <Heading
            title={title}
            className="text-white mb-4"
          />
        )}
        {children}

      </div>
    </div>
  );
}

export default Heros;