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
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-green-600 font-bold uppercase">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-blue-900 mt-3">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-yellow-500 mt-2">
                ⭐⭐⭐⭐⭐
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;