import { Link } from "react-router-dom";
import { navLinks } from "../data";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white w-full pt-16 pb-8 mt-30">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= ABOUT ================= */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Lucy College</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Lucy Medical Business and Technology College provides quality
              education in healthcare, business, and technology fields to
              prepare students for successful careers.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-200 hover:text-white transition text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ================= COURSES ================= */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Courses</h3>

            <Link to="/courses/nursing" className="text-gray-200 hover:text-white text-sm">
              Nursing
            </Link>
            <Link to="/courses/pharmacy" className="text-gray-200 hover:text-white text-sm">
              Pharmacy
            </Link>
            <Link to="/courses/midwifery" className="text-gray-200 hover:text-white text-sm">
              Midwifery
            </Link>
            <Link to="/courses/it" className="text-gray-200 hover:text-white text-sm">
              Information Technology
            </Link>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Contact</h3>

            <p className="text-gray-200 text-sm">📍 Dessie, Ethiopia</p>
            <p className="text-gray-200 text-sm">📍 Semera, Ethiopia</p>
            <p className="text-gray-200 text-sm">📞 +251 90 255 2255</p>
            <p className="text-gray-200 text-sm">✉ info@lucycollege.edu</p>
            <p className="text-gray-200 text-sm">Fax 0333112525</p>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Lucy College. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;