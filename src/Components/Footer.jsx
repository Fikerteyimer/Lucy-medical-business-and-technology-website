import { Link } from "react-router-dom";
import { navLinks } from "../data";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white w-full pt-16 pb-8 mt-30">
      
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-4 gap-12">
        
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Lucy College</h2>
          <p className="text-gray-200 text-sm">
            Lucy Medical Business and Technology College provides quality
            education in healthcare, business, and technology fields to
            prepare students for successful careers.
          </p>
        </div>

        
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-300 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

       
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Courses</h3>

          <Link to="/courses/nursing" className="hover:text-gray-300">
            Nursing
          </Link>
          <Link to="/courses/pharmacy" className="hover:text-gray-300">
            Pharmacy
          </Link>
          <Link to="/courses/midwifery" className="hover:text-gray-300">
            Midwifery
          </Link>
          <Link to="/courses/it" className="hover:text-gray-300">
            Information Technology
          </Link>
        </div>

       
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>

          <p>📍 Dessie, Ethiopia</p>
          <p>📍 Semera, Ethiopia</p>
          <p>📞 +251 90 255 2255</p>
          <p>✉ info@lucycollege.edu</p>
          <p>Fax 0333112525</p>
        </div>

      </div>

     
      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Lucy College. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
