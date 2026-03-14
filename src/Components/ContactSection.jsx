import Heading from "./Heading";
import Paragraph from "./Paragraph";

function ContactSection() {
  const contacts = [
    {
      location: "Dessie Campus",
      city: "Dessie, Ethiopia",
      phone_num: ["0902552255", "0902552200", "0333112525", "0333116669"],
      email: "lucy@gmail.com",
    },
    {
      location: "Semera Campus",
      city: "Semera, Afar Region",
      phone_num: ["0902557755", "0902552255"],
      email: "lucy@gmail.com",
    },
  ];

  return (
    <div className="bg-blue-950 p-5 rounded-2xl shadow-md space-y-6 m-20">
      <Heading title="Contact Information" />

      <Paragraph className="text-white">
        Reach out to us for questions about admissions, programs, or general information.
      </Paragraph>
        <div className=" grid md:grid-cols-2 gap-6">
      {contacts.map((campus, index) => (
 
        <div key={index} className="space-y-2 text-white bg-blue-900 rounded-lg p-8">
          <h3 className="font-semibold text-lg ">{campus.location}</h3>
          <p>📍 {campus.city}</p>
          
          {campus.phone_num.map((phone, idx) => (
            <p key={idx}>
              📞 <a href={`tel:+251${phone}`} className="hover:underline">{phone}</a>
            </p>
          ))}

          {campus.email && <p>✉ <a href={`mailto:${campus.email}`} className="hover:underline">{campus.email}</a></p>}
        </div>
       
      ))}
    </div>
      <div className="text-white bg-blue-900 rounded-lg p-8">
        <h3 className="font-semibold text-lg" >Office Hours</h3>
        <p>Monday – Friday</p>
        <p>8:30 AM – 5:30 PM</p>
      </div>
    </div>
  );
}

export default ContactSection;