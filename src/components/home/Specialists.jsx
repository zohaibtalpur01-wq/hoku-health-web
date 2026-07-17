const specialists = [
  {
    name: "Child Specialist",
    icon: "👶",
    description: "Expert care for children's health and wellness.",
  },
  {
    name: "Gynecologist",
    icon: "👩‍⚕️",
    description: "Specialized healthcare for women.",
  },
  {
    name: "Dental Specialist",
    icon: "🦷",
    description: "Complete dental care and oral hygiene.",
  },
  {
    name: "Dermatologist",
    icon: "🩺",
    description: "Professional skin care treatments.",
  },
];

function Specialists() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Specialists
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Meet our experienced healthcare professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-6xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold mb-3">
                {item.name}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Specialists;