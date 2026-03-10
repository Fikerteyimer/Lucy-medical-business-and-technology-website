import logo from '../assets/logo.jpg';
import { NavLink } from "react-router-dom";
import Button from './Button';

const NavBar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admission", path: "/admission" },
    { name: "News and Events", path: "/news" },
    { name: "Campus Life", path: "/campus" }
  ];

  return (
    <nav className='p-4 fixed w-full top-0 left-0 bg-white z-10 flex justify-between items-center h-18 shadow-xl'>
      
    
      <div className='flex items-center gap-3'>
        <img src={logo} className='w-16 h-16 object-cover' />
        <div>
          <h1 className='text-blue-900 text-2xl font-bold'>
            Lucy <span className='text-blue-500'>College</span>
          </h1>
        </div>
      </div>

     
      <ul className="flex items-center gap-10">
        {navLinks.map((nav, index) => (
          <li key={index} className='text-blue-900 text-base font-medium'>
            <NavLink 
              to={nav.path} 
              className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold" : "text-blue-900 hover:text-blue-700"
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

    </nav>
  );
}

export default NavBar;