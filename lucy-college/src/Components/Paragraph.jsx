function Paragraph({ children, className }) {
  return (
    <p className={`text-gray-700 text-md
     leading-relaxed mb-6 text-left md:text-center max-w-4xl mx-auto ${className}`}>
      {children}
    </p>
  );
}
export default Paragraph;