import { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { navLinks } from "../data";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 py-2">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-11 h-11 rounded-full object-cover" />
          <h1 className="text-blue-900 text-xl font-bold">
            Lucy <span className="text-blue-500">College</span>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((nav, index) => {

            const count = nav.submenu?.length || 0;

            // ✅ dynamic width
            const widthClass =
              count <= 1 ? "w-[260px]" :
              count === 2 ? "w-[420px]" :
              "w-[520px]";

            const gridCols = count <= 1 ? "grid-cols-1" : "grid-cols-2";

            return (
              <li key={index} className="relative group">

                <NavLink
                  to={nav.path}
                  className="text-blue-900 hover:text-blue-600 flex items-center gap-1 py-4"
                >
                  {nav.name}
                  {nav.submenu && (
                    <span className="text-xs group-hover:rotate-180 transition">
                      ▼
                    </span>
                  )}
                </NavLink>

                {/* MEGA MENU */}
                {nav.submenu && (
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 top-full
                      ${widthClass}
                      max-h-[420px] overflow-y-auto
                      bg-white shadow-2xl rounded-2xl p-5
                      opacity-0 invisible pointer-events-none
                      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                      transition-all duration-200
                    `}
                  >

                    <div className={`grid ${gridCols} gap-4`}>

                      {nav.submenu.map((submenu, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 hover:bg-blue-50 rounded-xl p-4 transition"
                        >

                          <h3 className="text-blue-800 font-semibold mb-3 border-b pb-2">
                            {submenu.title}
                          </h3>

                          <div className="space-y-2">

                            {submenu.items.map((item, j) => (
                              <NavLink
                                key={j}
                                to={item.path}
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition py-1"
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
            );
          })}

          {/* LOGIN */}
          <NavLink to="/login">
            <Button text="Portal Login" />
          </NavLink>

        </ul>

        {/* MOBILE */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-blue-900 text-3xl"
        >
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 transition ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl z-50 transform transition ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >

        <div className="p-6">

          <div className="flex items-center gap-3 mb-8">
            <img src={logo} className="w-10 h-10 rounded-full" />
            <h1 className="text-blue-900 font-bold text-lg">
              Lucy <span className="text-blue-500">College</span>
            </h1>
          </div>

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
                      className="text-blue-900"
                    >
                      ▼
                    </button>
                  )}

                </div>

                {nav.submenu && openSubmenu === index && (
                  <div className="mt-3 ml-2 space-y-3 max-h-60 overflow-y-auto">

                    {nav.submenu.map((submenu, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-xl">

                        <p className="text-blue-700 font-semibold text-sm mb-2">
                          {submenu.title}
                        </p>

                        <div className="space-y-1">

                          {submenu.items.map((item, j) => (
                            <NavLink
                              key={j}
                              to={item.path}
                              onClick={() => setMenuOpen(false)}
                              className="block text-sm text-gray-700 hover:text-blue-600"
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