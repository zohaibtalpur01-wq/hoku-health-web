import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Services() {
  const services = [
    {
      icon: "🏥",
      title: "Home Health Care",
      desc: "Professional nursing services at your home.",
    },
    {
      icon: "❤️",
      title: "Palliative Care",
      desc: "Compassionate care for chronic illness patients.",
    },
    {
      icon: "🕊️",
      title: "Hospice Care",
      desc: "Comfort and support for patients and families.",
    },
    {
      icon: "🩺",
      title: "Medical Consultation",
      desc: "Experienced doctors available for consultation.",
    },
    {
      icon: "💊",
      title: "Medicine Support",
      desc: "Medicine management and patient guidance.",
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      desc: "24/7 emergency healthcare services.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-900">
              Our Services
            </h1>

            <p className="text-gray-600 mt-4">
              Professional healthcare services for every patient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-5">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600">
                  {service.desc}
                </p>

                <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                  Learn More
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;