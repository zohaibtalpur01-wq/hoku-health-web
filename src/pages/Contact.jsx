import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-blue-900">
              Contact Us
            </h1>

            <p className="text-gray-600 mt-4">
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-xl p-4"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border rounded-xl p-4"
                ></textarea>

                <button
                  className="bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Info */}

            <div className="space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                📍 Karachi, Pakistan
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                📞 +92 300 1234567
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                ✉ info@hokuhealth.com
              </div>

              <div className="bg-white rounded-2xl shadow-lg h-72 flex items-center justify-center text-gray-500">
                Google Map
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;