function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Visit Us
            </h3>

            <p>
              114 Elgin St, Carlton VIC 3053,
              Australia
            </p>

            <p className="mt-4">
              basilchidera8@gmail.com
            </p>

            <p className="mt-4">
              Mon-Fri: 9AM - 7PM
            </p>

            <p>
              Sat: 8AM - 6PM
            </p>

            <p>
              Sun: 10AM - 4PM
            </p>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps?q=114+Elgin+Street+Carlton+VIC+3053&output=embed"
            className="w-full h-80 rounded-xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Contact;