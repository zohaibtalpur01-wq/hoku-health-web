import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-700 to-green-500 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-end gap-4 px-4 py-2 text-sm">
          <span>📞 012-345-789</span>
          <span>✉️ www.hokuhealth.com</span>
          <span>📍 2937 West Valley</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo */}
          <img
            src={logo}
            alt="Hoku Health Care"
            className="h-14 md:h-20 w-auto"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold uppercase">
            <li>
              <NavLink to="/" className="hover:text-blue-700">
                Home
              </NavLink>
            </li>

            <li>
              <a href="#" className="hover:text-blue-700">
                About
              </a>
            </li>

            <li>
              <NavLink to="/services" className="hover:text-blue-700">
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
              <NavLink to="/contact" className="hover:text-blue-700">
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            GET STARTED
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col text-center font-semibold uppercase">
              <li className="py-3 border-b">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>

              <li className="py-3 border-b">
                <a href="#">About</a>
              </li>

              <li className="py-3 border-b">
                <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                  Services
                </NavLink>
              </li>

              <li className="py-3 border-b">
                <a href="#">Available</a>
              </li>

              <li className="py-3 border-b">
                <a href="#">Reviews</a>
              </li>

              <li className="py-3 border-b">
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </NavLink>
              </li>

              <li className="p-4">
                <button className="w-full bg-blue-700 text-white py-3 rounded-lg">
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