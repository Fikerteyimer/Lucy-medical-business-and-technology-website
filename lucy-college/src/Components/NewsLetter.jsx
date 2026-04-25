import Button from "./Button";

function NewLetter() {
  return (
    <section className="mt-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 🔹 Left Content */}
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
            Newsletter
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
            Stay connected with Lucy College
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-md">
            Receive updates about programs, events, and opportunities directly
            in your inbox.
          </p>

          {/* Accent line */}
          <div className="w-16 h-1 bg-blue-600 mt-6"></div>
        </div>

        {/* 🔹 Right Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          <p className="text-gray-700 font-medium mb-4">
            Subscribe with your email
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 px-4 py-3 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button
              text="Subscribe"
              className="bg-blue-900 text-white py-3 hover:bg-blue-800 transition"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default NewLetter;