import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";
import ContactCard from "./ContactCard";

function ContactSection() {
  const contacts = {
    phones: [
      { label: "Dessie Campus", numbers: ["0902552255", "0902552200", "0333112525", "0333116669"] },
      { label: "Semera Campus", numbers: ["0902557755", "0902552255"] },
    ],
    emails: ["lucy@gmail.com"],
    officeHours: {
      days: "Monday – Friday",
      time: "8:30 AM – 5:30 PM",
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <Subheading text="Get Connected"/>
      <Paragraph className="text-center">
        We're here to help! Reach out for admissions, programs, or general inquiries.
      </Paragraph>

      <div className="grid md:grid-cols-3 gap-6">
        <ContactCard icon={FiClock} title="Office Hours">
          <Paragraph>{contacts.officeHours.days}</Paragraph>
          <Paragraph>{contacts.officeHours.time}</Paragraph>
        </ContactCard>

        <ContactCard icon={FiMail} title="Email">
          {contacts.emails.map((email, idx) => (
            <a key={idx} href={`mailto:${email}`} className="text-gray-700 hover:text-blue-600 hover:underline block">
              {email}
            </a>
          ))}
        </ContactCard>

        <ContactCard icon={FiPhone} title="Call Us">
          {contacts.phones.map((campus, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-semibold text-gray-800">{campus.label}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-1">
                {campus.numbers.map((num, id) => (
                  <a key={id} href={`tel:+251${num}`} className="bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm hover:bg-red-200 transition">
                    {num}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </ContactCard>
      </div>
    </section>
  );
}

export default ContactSection;