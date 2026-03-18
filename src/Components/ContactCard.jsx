// ContactCard.jsx
function ContactCard({ icon: Icon, title, children }) {
  return (
    <div className="flex flex-col items-center bg-white border rounded-xl p-6 shadow-md transition hover:scale-105 text-center">
      {Icon && <Icon className="text-4xl mb-3" />}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
}
export default ContactCard;