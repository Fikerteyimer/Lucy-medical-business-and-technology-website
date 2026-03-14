import Button from "./Button";

function NewLetter() {
  return (
    <section className="mt-32 px-6">
      
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-900 to-blue-800 
      rounded-3xl shadow-2xl px-12 py-20 flex flex-col md:flex-row 
      items-center justify-between gap-10">

        {/* Left text */}
        <div className="max-w-lg space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Subscribe to our Newsletter
          </h1>

          <p className="text-blue-100 text-lg">
            Get blog articles, college updates, and special offers directly
            in your inbox.
          </p>
        </div>

       
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row gap-4 w-full md:w-auto">

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-5 py-3 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          <Button text="Subscribe" className="px-8 py-3 whitespace-nowrap" />
        </div>

      </div>

    </section>
  );
}

export default NewLetter;