import doctor from "../../assets/doctor.png";

function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-5xl font-light italic mb-2">
              We take
            </h3>

            <h1 className="text-7xl font-extrabold leading-none">
              CARE
              <br />
              <span className="text-blue-700">OF YOUR</span>
              <br />
              HEALTH
            </h1>

            <h2 className="mt-8 text-3xl font-bold">
              OUR SPECIALIST
            </h2>

            <ul className="grid grid-cols-2 gap-3 mt-6 text-lg">
              <li>• Child Specialist</li>
              <li>• Gynecologist</li>
              <li>• Dental Specialist</li>
              <li>• Dermatologist</li>
            </ul>

            <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg shadow-lg transition">
              GET STARTED
            </button>
          </div>

          {/* Right Side */}
          <div className="relative">
            <img
              src={doctor}
              alt="Doctor"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-lime-400 to-blue-700 rounded-b-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;