import CardGrid from "./CardGrid";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function WhyLucy() {
  const features = [
    {
      school: "Modern Classrooms",
      description:
        "State-of-the-art classrooms equipped with modern teaching tools for interactive learning.",
    },
    {
      school: "Laboratories",
      description:
        "Well-equipped medical, computer, and science labs for practical and hands-on training.",
    },
    {
      school: "Libraries",
      description:
        "Extensive library resources to support research and learning across health, business, and technology.",
    },
    {
      school: "Practical Training Centers",
      description:
        "Dedicated centers where students gain real-world experience and career readiness.",
    },
    {
      school: "Experienced Instructors",
      description:
        "Qualified faculty committed to mentoring and guiding students for academic and professional success.",
    },
    {
      school: "Industry Partnerships",
      description:
        "Collaborations with local and international organizations for internships, workshops, and exposure.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <Heading title="Why Choose Lucy College?" />
      <Paragraph
        children="Lucy Medical, Business and Technology College offers a unique blend of practical training, academic excellence, and student-centered learning to prepare graduates for successful careers and societal contribution."
      />

      <div className="">
        <CardGrid items={features}/>
        
      </div>
    </section>
  );
}

export default WhyLucy;