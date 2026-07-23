import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033"
            alt="barber"
            className="rounded-xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            About Carlton Barbers
          </h2>

          <p className="text-zinc-300 leading-8">
            At Carlton Barbers, we combine classic barbering
            traditions with modern grooming techniques.

            Whether you're looking for a precision fade,
            a fresh haircut, or a luxury hot towel shave,
            our experienced team ensures every client
            leaves looking sharp and feeling confident.
          </p>

          <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;