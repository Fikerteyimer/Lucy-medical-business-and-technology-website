import Button from "./Button";

function NewLetter() {
  return (
    <section className="mt-32 px-6 md:px-20">
      
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* 🔹 Left Side */}
        <div className="p-10 md:p-14 flex flex-col justify-center bg-blue-900 text-white">
          
          <p className="text-sm uppercase tracking-widest text-blue-200 mb-4">
            Newsletter
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Stay connected with Lucy College
          </h2>

          <p className="mt-5 text-blue-100 text-base md:text-lg max-w-md">
            Receive updates about programs, events, admissions, and academic
            opportunities directly in your inbox.
          </p>

          {/* Accent line */}
          <div className="w-20 h-1 bg-white mt-8 rounded-full"></div>
        </div>

        {/* 🔹 Right Side */}
        <div className="p-10 md:p-14 flex flex-col justify-center bg-white">

          <p className="text-gray-800 font-semibold mb-6 text-lg">
            Subscribe to our newsletter
          </p>

          <div className="space-y-5">

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-200 px-5 py-4 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />

            <Button
              text="Subscribe"
              className="w-full bg-blue-900 text-white py-4 rounded-xl 
              hover:bg-blue-800 transition font-medium"
            />

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default NewLetter;