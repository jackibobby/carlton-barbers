import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience"
    },
    {
      number: "5000+",
      title: "Happy Clients"
    },
    {
      number: "4.9★",
      title: "Average Rating"
    },
    {
      number: "100%",
      title: "Customer Satisfaction"
    }
  ];

  return (
    <section className="bg-zinc-950 py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.2
            }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-yellow-500">
              {stat.number}
            </h2>

            <p className="mt-3 text-zinc-300">
              {stat.title}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Stats;