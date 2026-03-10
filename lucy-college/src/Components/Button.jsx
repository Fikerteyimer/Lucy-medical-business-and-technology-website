function Button({text,onClick}){
    return(
        <button onClick={onClick}className="bg-blue-900 hover:bg-blue-500 text-white px-6 py-1.5 rounded-5xl transition duration-300">
            {text}
        </button>
    );

}
export default Button;