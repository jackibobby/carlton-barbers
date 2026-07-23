function Booking() {
  return (
    <section
      id="booking"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-12">
          Book Appointment
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded bg-zinc-900"
          />

          <select className="w-full p-4 rounded bg-zinc-900">
            <option>Classic Haircut</option>
            <option>Skin Fade</option>
            <option>Beard Trim</option>
            <option>Hot Towel Shave</option>
          </select>

          <input
            type="date"
            className="w-full p-4 rounded bg-zinc-900"
          />

          <button
            className="w-full bg-yellow-500 text-black font-bold p-4 rounded"
          >
            Book Now
          </button>

        </form>

      </div>
    </section>
  );
}

export default Booking;