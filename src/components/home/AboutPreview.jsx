import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";

function AboutPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="grid grid-cols-2 gap-5">

          <img
            src={about1}
            alt="About 1"
            className="w-full h-64 object-contain bg-white rounded-3xl shadow-xl p-2"
          />

          <img
            src={about2}
            alt="About 2"
            className="w-full h-64 object-contain bg-white rounded-3xl shadow-xl mt-10 p-2"
          />

          <img
            src={about3}
            alt="About 3"
            className="w-full h-64 object-contain bg-white rounded-3xl shadow-xl -mt-10 p-2"
          />

          <img
            src={about4}
            alt="About 4"
            className="w-full h-64 object-contain bg-white rounded-3xl shadow-xl p-2"
          />

        </div>

        {/* Right Side */}
        <div>
          <p className="text-green-600 font-bold uppercase tracking-widest">
            ABOUT US
          </p>

          <h2 className="text-5xl font-bold text-blue-900 mt-4 leading-tight">
            Nourishing Lives,
            <br />
            One Home At A Time
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Hoku Health Care provides professional home healthcare
            services with experienced doctors, qualified nurses,
            physiotherapists and caregivers.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            We are committed to delivering quality healthcare
            directly to your home with compassion, trust,
            professionalism and safety.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-5 rounded-2xl shadow-md">
              ✅ 24/7 Home Care
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md">
              ✅ Professional Doctors
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md">
              ✅ Qualified Nurses
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md">
              ✅ Patient Safety
            </div>
          </div>

          <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default AboutPreview;