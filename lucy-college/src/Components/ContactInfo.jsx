import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

/* =========================
   CONTACT FORM
========================= */
function ContactInfo() {
  const fields = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Subject",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">

      <div>
        <Subheading text="Send Message" />
        <Paragraph className="text-gray-500 text-sm mt-1">
          We reply within 24 hours.
        </Paragraph>
      </div>

      <div className="space-y-2">
        {fields.map((f, i) => (
          <input
            key={i}
            placeholder={f}
            className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200
            focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 outline-none text-sm transition"
          />
        ))}

        <textarea
          rows="3"
          placeholder="Message"
          className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200
          focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 outline-none
          text-sm resize-none transition"
        />
      </div>

      <Button
        text="Send Message"
        className="w-full py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium
        hover:bg-indigo-700 transition shadow-sm hover:shadow-md"
      />
    </div>
  );
}

/* =========================
   NEW CONTACT INFO (IMPROVED)
========================= */
function ContactSection() {
  const info = [
    {
      icon: FiClock,
      title: "Office Hours",
      items: ["Monday – Friday", "8:30 AM – 5:30 PM"],
    },
    {
      icon: FiMail,
      title: "Email",
      items: ["lucy@gmail.com"],
    },
    {
      icon: FiPhone,
      title: "Call Us",
      phones: {
        "Dessie Campus": ["0902552255", "0902552200"],
        "Semera Campus": ["0902557755", "0902552255"],
      },
    },
  ];

  return (
    <div className="space-y-4">

      <div>
        <Subheading text="Contact Info" />
        <Paragraph className="text-gray-500 text-sm mt-1">
          Reach us anytime.
        </Paragraph>
      </div>

      {/* CLEAN INFO STACK */}
      <div className="space-y-3">

        {info.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 p-5
            flex flex-col gap-3 shadow-sm hover:shadow-md transition"
          >

            {/* HEADER */}
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
              <item.icon className="text-indigo-500" />
              {item.title}
            </div>

            {/* SIMPLE TEXT ITEMS */}
            {item.items && (
              <div className="text-gray-600 text-sm space-y-1">
                {item.items.map((t, idx) => (
                  <Paragraph key={idx}>{t}</Paragraph>
                ))}
              </div>
            )}

            {/* PHONE GROUP */}
            {item.phones && (
              <div className="space-y-3">

                {Object.entries(item.phones).map(([campus, nums]) => (
                  <div key={campus} className="space-y-2">

                    <p className="text-gray-700 font-medium text-sm">
                      {campus}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {nums.map((n, idx) => (
                        <a
                          key={idx}
                          href={`tel:+251${n}`}
                          className="px-3 py-1 text-xs rounded-full
                          bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition"
                        >
                          {n}
                        </a>
                      ))}
                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

/* =========================
   MAIN PAGE
========================= */
export default function ContactPage() {
  return (
    <section className="min-h-screen bg-blue-950 py-12 px-4">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          Contact Us
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          We’re here to help anytime
        </p>
      </div>

      {/* LAYOUT */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">

        <div className="flex-1">
          <ContactInfo />
        </div>

       

      </div>

    </section>
  );
}