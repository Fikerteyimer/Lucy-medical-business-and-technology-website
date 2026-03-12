import Button from "./Button";
import Heading from "./Heading";
import logo from '../assets/logo.jpg'

function NewLetter(){
    return(
        <div className="flex justify-between items-center bg-blue-900 w-full mt-32 py-10 px-12 rounded-tl-[150px] rounded-br-[150px]">

          <div className="max-w-lg space-y-3">

            <h1 className="text-4xl font-extrabold leading-tight text-white">
              Subscribe to our newsletter!
            </h1>

            <p className="text-lg text-gray-200">
              Get blog articles, updates, and special offers directly in your inbox.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-15 shadow-2xl flex flex-col gap-4">

            <input 
              type="email" 
              placeholder="Enter your Email"
              className=" border border-gray-300 px-10 py-3 rounded-md w-full"
            />

           <Button text="Subscribe " className="py-3 px-10"/>

          </div>

        </div>
    );
}

export default NewLetter;