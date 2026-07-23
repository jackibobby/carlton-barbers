import { motion } from "framer-motion";
import {
  FaCut,
  FaUserTie,
  FaMagic,
  FaCrown
} from "react-icons/fa";

const services = [
  {
    title: "Classic Haircut",
    price: "$35",
    icon: <FaCut />
  },
  {
    title: "Skin Fade",
    price: "$45",
    icon: <FaMagic />
  },
  {
    title: "Beard Trim",
    price: "$20",
    icon: <FaUserTie />
  },
  {
    title: "Hot Towel Shave",
    price: "$30",
    icon: <FaCrown />
  }
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-black px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10
              }}
              className="bg-zinc-900 p-8 rounded-xl text-center border border-zinc-800"
            >
              <div className="text-yellow-500 text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-yellow-500 text-2xl font-bold">
                {service.price}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;