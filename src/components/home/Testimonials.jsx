function Testimonials() {
  const reviews = [
    {
      name: "Ali Khan",
      review:
        "Excellent healthcare service. The doctors were very professional and caring.",
    },
    {
      name: "Sara Ahmed",
      review:
        "Highly recommended. Home nursing service was outstanding.",
    },
    {
      name: "John Smith",
      review:
        "Very friendly staff and quick response. Great experience.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-bold uppercase">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mt-3">
            What Our Patients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Happy Patient
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;