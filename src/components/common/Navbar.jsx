import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-700 to-green-500 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-end gap-4 px-4 py-2 text-sm">
          <span>📞 012-345-789</span>
          <span>✉️ info@hokuhealth.com</span>
          <span>📍 2937 West Valley</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Hoku Health Care"
              className="h-12 md:h-16 lg:h-20 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold uppercase text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "hover:text-blue-700"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <a href="#" className="hover:text-blue-700">
                About
              </a>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "hover:text-blue-700"
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <a href="#" className="hover:text-blue-700">
                Available
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-700">
                Reviews
              </a>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "hover:text-blue-700"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden lg:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition">
            GET STARTED
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col">

              <li className="border-b">
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4"
                >
                  Home
                </NavLink>
              </li>

              <li className="border-b">
                <a href="#" className="block px-6 py-4">
                  About
                </a>
              </li>

              <li className="border-b">
                <NavLink
                  to="/services"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4"
                >
                  Services
                </NavLink>
              </li>

              <li className="border-b">
                <a href="#" className="block px-6 py-4">
                  Available
                </a>
              </li>

              <li className="border-b">
                <a href="#" className="block px-6 py-4">
                  Reviews
                </a>
              </li>

              <li className="border-b">
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4"
                >
                  Contact
                </NavLink>
              </li>

              <li className="p-4">
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg">
                  GET STARTED
                </button>
              </li>

            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;