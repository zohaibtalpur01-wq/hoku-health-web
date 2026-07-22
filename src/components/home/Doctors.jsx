import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";

function Doctors() {
  const doctors = [
    {
      image: about1,
      name: "Dr. John Smith",
      specialty: "Cardiologist",
    },
    {
      image: about2,
      name: "Dr. Sarah Ali",
      specialty: "Gynecologist",
    },
    {
      image: about3,
      name: "Dr. David Lee",
      specialty: "Dermatologist",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-bold uppercase">
            Our Doctors
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mt-3">
            Meet Our Specialists
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {doctor.name}
                </h3>

                <p className="text-green-600 mt-2">
                  {doctor.specialty}
                </p>

                <button className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Doctors;