function Stats() {
  const stats = [
    { number: "15+", title: "Years Experience" },
    { number: "120+", title: "Expert Doctors" },
    { number: "5K+", title: "Happy Patients" },
    { number: "24/7", title: "Support" },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-blue-800 rounded-2xl py-6 shadow-lg"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-sm sm:text-base">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;