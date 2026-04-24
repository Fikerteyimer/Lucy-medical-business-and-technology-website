function FeatureItem({ icon, title, description}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
        
      <div className="flex justify-center items-center bg-blue-100 rounded-full w-16 h-16">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 text-sm max-w-xs">
        {description}
      </p>

    </div>
  );
}

export default FeatureItem;