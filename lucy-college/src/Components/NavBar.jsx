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

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Lucy College Logo" className="w-14 h-14 object-cover" />

          <h1 className="text-blue-900 text-xl md:text-2xl font-bold">
            Lucy <span className="text-blue-500">College</span>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="relative group text-base font-medium py-4"
            >

              {/* MAIN LINK */}
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold flex items-center gap-1"
                    : "text-blue-900 hover:text-blue-700 transition flex items-center gap-1"
                }
              >
                {nav.name}

                {/* ARROW (^) */}
                {nav.submenu && (
                  <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                    ▼
                  </span>
                )}
              </NavLink>

              {/* DROPDOWN */}
              {nav.submenu && (
                <div
                  className="
                    absolute left-1/2 transform -translate-x-1/2
                    top-full mt-1
                    w-150 bg-white shadow-xl rounded-xl p-8
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition duration-200 z-50
                  "
                >

                  <div className="grid grid-cols-3 gap-6">

                    {nav.submenu.map((submenu, subIndex) => (
                      <div key={subIndex} className="px-2">

                        <h3 className="text-blue-700 font-semibold mb-3">
                          {submenu.title}
                        </h3>

                        <ul className="space-y-2">
                          {submenu.items.map((item, i) => (
                            <li key={i}>
                              <NavLink
                                to={item.path}
                                className="block text-gray-800 hover:text-blue-600 transition"
                              >
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>

                      </div>
                    ))}

                  </div>

                </div>
              )}

            </li>
          ))}

          {/* LOGIN */}
          <li>
            <NavLink to="/login">
              <Button text="Portal Login" />
            </NavLink>
          </li>

        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
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