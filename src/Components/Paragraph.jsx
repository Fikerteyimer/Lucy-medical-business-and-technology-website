function Paragraph({ children, className }) {
  return (
    <p className={`text-gray-700 text-md
     leading-relaxed mb-6  ${className}`}>
      {children}
    </p>
  );
}

export default Paragraph;