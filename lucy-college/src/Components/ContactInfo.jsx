import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

const contactFields = [
  { placeholder: "First name", name: "first-name", type: "text", id: "first-name" },
  { placeholder: "Last name", name: "last-name", type: "text", id: "last-name" },
  { placeholder: "Email", name: "email", type: "email", id: "email" },
  { placeholder: "Phone number", name: "phone", type: "tel", id: "phone" },
  { placeholder: "Subject", name: "subject", type: "text", id: "subject" },
];

function ContactInfo() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 ">
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-blue-100">
        <Subheading text="Get in Touch" className="md:text-left" />
        <Paragraph className="text-gray-600 mt-2 mb-6 text-center md:text-left ">
          Do you have a question, complaint, or need help? Feel free to contact us.
        </Paragraph>

        <form className="space-y-6">

        
          <div className="grid md:grid-cols-2 gap-4">
            {contactFields.slice(0, 2).map((field) => (
              <input
                key={field.id}
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300
                transition placeholder-gray-400"
              />
            ))}
          </div>

      
          <div className="grid md:grid-cols-2 gap-4">
            {contactFields.slice(2, 4).map((field) => (
              <input
                key={field.id}
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300
                transition placeholder-gray-400"
              />
            ))}
          </div>

       
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300
            transition placeholder-gray-400"
          />

         
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300
            transition placeholder-gray-400 resize-none"
          ></textarea>

          <div className="text-center">
            <Button
              text="Send Message"
              className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold
              hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            />
          </div>

        </form>
      </div>
    </section>
  );
}

export default ContactInfo;