import { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { navLinks } from "../data";

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">

      <div className="flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Lucy College Logo" className="w-14 h-14 object-cover" />

          <h1 className="text-blue-900 text-xl md:text-2xl font-bold">
            Lucy <span className="text-blue-500">College</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((nav, index) => (
            <li key={index} className="text-base font-medium">
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold"
                    : "text-blue-900 hover:text-blue-700 transition"
                }
              >
                {nav.name}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink to="/contact">
              <Button text="Contact Us" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/login">
              <Button text="Portal Login" />
            </NavLink>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">

          <ul className="flex flex-col items-center gap-6 py-6">

            {navLinks.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 font-bold"
                      : "text-blue-900 hover:text-blue-700"
                  }
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}

            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <Button text="Contact Us" />
            </NavLink>

            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <Button text="Portal Login" />
            </NavLink>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default NavBar;