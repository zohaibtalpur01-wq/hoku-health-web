import doctor from "../../assets/doctor.png";

function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* Left Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light italic">
              We take
            </h3>

            <h1 className="mt-2 font-extrabold leading-none text-4xl sm:text-6xl lg:text-7xl">
              CARE
              <br />
              <span className="text-blue-700">OF YOUR</span>
              <br />
              HEALTH
            </h1>

            <h2 className="mt-6 text-2xl sm:text-3xl font-bold">
              OUR SPECIALIST
            </h2>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base sm:text-lg">
              <li>• Child Specialist</li>
              <li>• Gynecologist</li>
              <li>• Dental Specialist</li>
              <li>• Dermatologist</li>
            </ul>

            <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-lg transition">
              GET STARTED
            </button>

          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">

              <img
                src={doctor}
                alt="Doctor"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />

              <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-lime-400 to-blue-700 rounded-b-3xl"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;