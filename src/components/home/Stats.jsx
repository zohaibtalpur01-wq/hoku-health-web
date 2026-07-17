function Stats() {
  const stats = [
    { number: "15+", title: "Years Experience" },
    { number: "120+", title: "Expert Doctors" },
    { number: "5K+", title: "Happy Patients" },
    { number: "24/7", title: "Support" },
  ];

  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold">{item.number}</h2>
              <p className="mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;