import { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { navLinks } from "../data";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">

      {/* ================= TOP BAR ================= */}
      <div className="flex justify-between items-center px-6 py-3">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full object-cover" />
          <h1 className="text-blue-900 text-xl font-bold">
            Lucy <span className="text-blue-500">College</span>
          </h1>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((nav, index) => (
            <li key={index} className="relative">

              {/* MAIN LINK */}
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === index ? null : index)
                }
                className="text-blue-900 hover:text-blue-600 flex items-center gap-1"
              >
                {nav.name}
                {nav.submenu && <span className="text-xs">▼</span>}
              </button>

              {/* ================= CLICK-BASED MEGA MENU ================= */}
              {nav.submenu && activeMenu === index && (
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full mt-2
                    w-[540px] bg-white shadow-2xl rounded-2xl p-6
                    z-50
                  "
                >

                  <div className="grid grid-cols-2 gap-4">

                    {nav.submenu.map((submenu, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-4">

                        {/* TITLE */}
                        <h3 className="text-blue-800 font-semibold mb-3 border-b pb-2">
                          {submenu.title}
                        </h3>

                        {/* ITEMS */}
                        <div className="space-y-2">

                          {submenu.items.map((item, j) => (
                            <NavLink
                              key={j}
                              to={item.path}
                              onClick={() => setActiveMenu(null)}
                              className="
                                flex items-center gap-2 text-sm text-gray-700
                                hover:text-blue-600 hover:translate-x-1 transition py-1
                              "
                            >
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                              {item.name}
                            </NavLink>
                          ))}

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              )}

            </li>
          ))}

          {/* LOGIN */}
          <NavLink to="/login">
            <Button text="Portal Login" />
          </NavLink>

        </ul>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-blue-900 text-3xl"
        >
          ☰
        </button>

      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-150 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-[290px] bg-white shadow-2xl z-50 transform transition-transform duration-200
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="p-6">

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} className="w-10 h-10 rounded-full" />
            <h1 className="text-blue-900 font-bold text-lg">
              Lucy <span className="text-blue-500">College</span>
            </h1>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-4">

            {navLinks.map((nav, index) => (
              <div key={index} className="border-b pb-2">

                <div className="flex justify-between items-center">

                  <NavLink
                    to={nav.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-blue-900 font-medium"
                  >
                    {nav.name}
                  </NavLink>

                  {nav.submenu && (
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="text-blue-900 text-sm"
                    >
                      ▼
                    </button>
                  )}

                </div>

                {/* MOBILE SUBMENU */}
                {nav.submenu && openSubmenu === index && (
                  <div className="mt-3 ml-2 space-y-3">

                    {nav.submenu.map((submenu, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-3">

                        <p className="text-blue-700 font-semibold text-sm mb-2">
                          {submenu.title}
                        </p>

                        <div className="space-y-1">

                          {submenu.items.map((item, j) => (
                            <NavLink
                              key={j}
                              to={item.path}
                              onClick={() => setMenuOpen(false)}
                              className="block text-sm text-gray-700 hover:text-blue-600 py-1"
                            >
                              • {item.name}
                            </NavLink>
                          ))}

                        </div>

                      </div>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>

          {/* LOGIN */}
          <div className="mt-6">
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <Button text="Portal Login" />
            </NavLink>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default NavBar;