function Appointment() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 to-green-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">
            Book an Appointment
          </h2>

          <p className="text-white mt-4">
            Fill out the form below and our team will contact you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-xl p-4"
            />

            <input
              type="date"
              className="border rounded-xl p-4"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="md:col-span-2 border rounded-xl p-4"
            ></textarea>

            <button
              className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold"
            >
              Book Appointment
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Appointment;