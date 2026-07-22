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
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Our Specialists
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Meet our experienced healthcare professionals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {specialists.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

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