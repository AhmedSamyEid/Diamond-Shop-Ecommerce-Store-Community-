import { useState } from "react";
import { NavLink } from "react-router";
import { FaXmark } from "react-icons/fa6"; 
import { FaHome, FaHeart, FaShoppingCart, FaInfoCircle, FaPhone, FaBars } from "react-icons/fa";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { icon: <FaHome />, name: "Home", path: "/" },
    { icon: <FaHeart />, name: "Favourite", path: "/favourite" },
    { icon: <FaShoppingCart />, name: "Cart", path: "/cart" },
    { icon: <FaInfoCircle />, name: "About Us", path: "/aboutus" },
    { icon: <FaPhone />, name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
        <div className="container m-auto flex justify-between items-center px-6 py-4">
    
          <div>
            <img className="w-[150px]" src="/images/logo.png" alt="Logo" />
          </div>
    
          <ul className="hidden lg:flex list-none items-center gap-10">
            {navLink.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold flex items-center gap-3"
                      : "text-gray-600 hover:text-black flex items-center gap-3"
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

        
          <div
            className="block lg:hidden text-2xl cursor-pointer text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </div>
        </div>

        
        {menuOpen && (
          <ul className="flex flex-col items-center ml-70 bg-white py-4 shadow-md gap-6 lg:hidden">
            {navLink.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold flex items-center gap-3"
                      : "text-gray-600 hover:text-black flex items-center gap-3"
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}
