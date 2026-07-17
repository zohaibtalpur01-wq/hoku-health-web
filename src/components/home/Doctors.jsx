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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-green-600 font-bold uppercase">
            Our Doctors
          </p>

          <h2 className="text-5xl font-bold text-blue-900 mt-3">
            Meet Our Specialists
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {doctor.name}
                </h3>

                <p className="text-green-600 mt-2">
                  {doctor.specialty}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Doctors;