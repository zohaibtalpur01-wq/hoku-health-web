import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-700 to-green-500 text-white">
        <div className="max-w-7xl mx-auto flex justify-end gap-8 px-6 py-3 text-sm">
          <span>📞 012-345-789</span>
          <span>✉️ www.hokuhealth.com</span>
          <span>📍 2937 West Valley</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Hoku Health Care"
              className="h-20 w-auto"
            />
          </div>

          {/* Navigation */}
          <ul className="flex gap-8 font-semibold uppercase">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                About
              </a>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                Available
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700">
                Reviews
              </a>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Button */}
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition">
            GET STARTED
          </button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;