import LucyAtAglanceBody from "../Components/LucyAtAglanceBody";
import Paragraph from "./Paragraph";

function AdmissionBody() {
  return (
    <div>
      <LucyAtAglanceBody 
        title="Overview"
        showHorizontal={true}
        className="mt-30">

        <Paragraph>
          The Office of the College Registrar is responsible for overseeing all operational matters
          related to student intake, admission, enrollment, and graduation. It works closely with academic
          units to ensure effective coordination of recruitment, course registration, and scheduling, while
          also managing academic records and classroom allocations. Led by the College Registrar and a
          team of qualified professionals, the office develops and implements efficient systems for student
          information management, ensuring that all records are maintained securely and accurately. This
          includes processing admissions and registrations, preparing academic calendars, and providing
          essential services such as the issuance of transcripts and student identification cards.
        </Paragraph>

        <Paragraph>
          In addition to administrative tasks, the office plays a pivotal role in student orientation and
          engagement, preparing handbooks and catalogs to facilitate new students' transition to university
          life. It is committed to adhering to relevant laws and university policies, ensuring compliance in
          matters of admission, placement, and academic standards. By managing the integrity and confidentiality
          of student records and implementing technology to enhance service delivery, the Office of the University
          Registrar supports a smooth academic experience for all students while fostering a culture of transparency
          and accessibility within the university.
        </Paragraph>

      </LucyAtAglanceBody>
    </div>
  );
}

export default AdmissionBody;