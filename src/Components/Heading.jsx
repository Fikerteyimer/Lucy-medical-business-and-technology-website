function Heading({title,className}){
    return(
        <>
        <h1 className={`font-bold text-blue-900 text-4xl my-7 py-5 text-center ${className}`}>{title}</h1>
        </>
    );

}
export default Heading;