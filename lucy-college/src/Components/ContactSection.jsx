import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

/* =========================
   CONTACT INFO FORM
========================= */
function ContactInfo() {
  const fields = [
    { placeholder: "First Name", type: "text" },
    { placeholder: "Last Name", type: "text" },
    { placeholder: "Email Address", type: "email" },
    { placeholder: "Phone Number", type: "tel" },
    { placeholder: "Subject", type: "text" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">

      <div>
        <Subheading text="Send Us a Message" />
        <Paragraph className="text-gray-500 mt-2">
          We usually respond within 24 hours.
        </Paragraph>
      </div>

      {/* INPUT FLOW (no form grid, just smooth vertical flow) */}
      <div className="space-y-4">
        {fields.map((f, i) => (
          <input
            key={i}
            type={f.type}
            placeholder={f.placeholder}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
            focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        ))}

        <textarea
          rows="5"
          placeholder="Write your message..."
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
        />
      </div>

      <Button
        text="Send Message"
        className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold
        hover:bg-indigo-700 transition shadow-md"
      />
    </div>
  );
}

/* =========================
   CONTACT DETAILS
========================= */
function ContactSection() {
  const info = [
    {
      icon: FiClock,
      title: "Office Hours",
      lines: ["Monday – Friday", "8:30 AM – 5:30 PM"],
    },
    {
      icon: FiMail,
      title: "Email",
      lines: ["lucy@gmail.com"],
    },
    {
      icon: FiPhone,
      title: "Call Us",
      phones: {
        "Dessie Campus": ["0902552255", "0902552200", "0333112525", "0333116669"],
        "Semera Campus": ["0902557755", "0902552255"],
      },
    },
  ];

  return (
    <div className="space-y-6">

      <div className="mb-6">
        <Subheading text="Get in Touch" />
        <Paragraph className="text-gray-500 mt-2">
          We’re here anytime you need help or information.
        </Paragraph>
      </div>

      {info.map((block, i) => (
        <div
          key={i}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6
          hover:shadow-lg transition space-y-3"
        >

          <div className="flex items-center gap-3 text-indigo-600 font-semibold">
            <block.icon size={20} />
            {block.title}
          </div>

          {/* TEXT BLOCKS */}
          {block.lines && (
            <div className="text-gray-600 space-y-1">
              {block.lines.map((l, idx) => (
                <Paragraph key={idx}>{l}</Paragraph>
              ))}
            </div>
          )}

          {/* PHONE BLOCK */}
          {block.phones && (
            <div className="space-y-4">
              {Object.entries(block.phones).map(([campus, nums], idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-800 mb-2">{campus}</p>

                  <div className="flex flex-wrap gap-2">
                    {nums.map((n, i) => (
                      <a
                        key={i}
                        href={`tel:+251${n}`}
                        className="text-sm px-3 py-1 rounded-full bg-indigo-50 text-indigo-700
                        hover:bg-indigo-100 transition"
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
  );
}

/* =========================
   MAIN LAYOUT (NO GRID FEEL)
========================= */
export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-3">
            We’d love to hear from you — anytime, anywhere.
          </p>
        </div>

        {/* MAIN FLEX LAYOUT (NOT GRID) */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT */}
          <div className="flex-1">
            <ContactInfo />
          </div>

          {/* RIGHT */}
          <div className="flex-1">
            <ContactSection />
          </div>

        </div>

      </div>
    </section>
  );
}