import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-lime-400">HOKU</span>
              <br />
              HEALTH CARE
            </h2>

            <p className="mt-4 text-gray-300">
              Providing trusted home healthcare services with qualified doctors,
              nurses and caregivers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="hover:text-lime-400">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/services" className="hover:text-lime-400">
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="hover:text-lime-400">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Home Nursing</li>
              <li>Palliative Care</li>
              <li>Hospice Care</li>
              <li>Elderly Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="mb-3">📍 Karachi, Pakistan</p>
            <p className="mb-3">📞 +92 300 1234567</p>
            <p>✉️ info@hokuhealth.com</p>
          </div>

        </div>

        <hr className="my-10 border-blue-700" />

        <p className="text-center text-gray-400">
          © 2026 Hoku Health Care. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;