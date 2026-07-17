function ServicesPreview() {
  const services = [
    {
      icon: "🏥",
      title: "Home Health Care",
      desc: "Professional home nursing and patient care services.",
    },
    {
      icon: "❤️",
      title: "Palliative Care",
      desc: "Compassionate care to improve quality of life.",
    },
    {
      icon: "🕊️",
      title: "Hospice Care",
      desc: "Comfortable and respectful end-of-life care.",
    },
    {
      icon: "🩺",
      title: "Medical Checkup",
      desc: "Regular health monitoring and consultations.",
    },
    {
      icon: "💊",
      title: "Medicine Support",
      desc: "Medication management by trained professionals.",
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      desc: "24/7 emergency healthcare assistance at home.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-bold uppercase">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Healthcare Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide professional healthcare services with experienced doctors,
            nurses and caregivers for patients of every age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.desc}
              </p>

              <button className="mt-8 text-blue-700 font-bold hover:text-green-600">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;