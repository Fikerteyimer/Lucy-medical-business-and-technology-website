import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const contactFields = [
  { placeholder: "First name", name: "first-name", type: "text", id: "first-name" },
  { placeholder: "Last name", name: "last-name", type: "text", id: "last-name" },
  { placeholder: "Email", name: "email", type: "email", id: "email" },
  { placeholder: "Phone number", name: "phone", type: "tel", id: "phone" },
  { placeholder: "Subject", name: "subject", type: "text", id: "subject" },
];

function ContactInfo() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-1/2  m-20">

      <Heading title="Get in touch  " />

      <Paragraph className="text-gray-600 mt-2 mb-6">
        Do you have a question, complaint, or need help?
        Feel free to contact us.
      </Paragraph>

      <form className="space-y-5">

        <div className="grid md:grid-cols-2 gap-4">
          {contactFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              name={field.name}
              id={field.id}
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-200 rounded-lg bg-blue-50 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          ))}
        </div>

        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Write your message..."
          className="w-full p-3 border border-gray-200 rounded-lg bg-blue-50 
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        ></textarea>

        <Button text="Send Message" className="px-8 py-3" />

      </form>
    </div>
  );
}

export default ContactInfo;