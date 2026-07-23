
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCut,
  FaStar,
  FaAward,
  FaUsers,
} from "react-icons/fa";

// Import hero image later:
// import heroImage from "../assets/hero.jpg";

function Home() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "5,000+",
      label: "Happy Clients",
    },
    {
      icon: <FaAward />,
      number: "10+",
      label: "Years Experience",
    },
    {
      icon: <FaStar />,
      number: "4.9★",
      label: "Average Rating",
    },
  ];

  const services = [
    {
      title: "Classic Haircut",
      price: "$35",
    },
    {
      title: "Skin Fade",
      price: "$45",
    },
    {
      title: "Beard Trim",
      price: "$20",
    },
  ];

  return (
    <>

      {/* HERO SECTION */}

      <section
        className="
        min-h-screen
        relative
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        "
      >
        {/* Background */}

        <div
          className="
          absolute
          inset-0
          bg-[url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c')]
          bg-cover
          bg-center
          "
        />

        {/* Overlay */}

        <div
          className="
          bg-white
          dark:bg-black
        "
        />

        {/* Content */}

        <div
          className="
          relative
          z-10
          max-w-4xl
          px-6
          "
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            text-5xl
            md:text-7xl
            font-extrabold
            mb-6
            "
          >
            Precision Cuts.
            <br />

            <span className="gold-text">
              Timeless Style.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
            text-zinc-300
            text-lg
            md:text-xl
            max-w-2xl
            mx-auto
            mb-10
            "
          >
            Premium barber services in
            Carlton, Victoria.
            Experience modern grooming,
            expert fades and luxury barbering.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className="
            flex
            flex-col
            md:flex-row
            gap-4
            justify-center
            "
          >
            <Link
              to="/contact"
              className="btn-primary"
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="btn-outline"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="section-padding bg-black">
        <div className="container-custom">

          <div className="grid md:grid-cols-3 gap-8">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                card-dark
                p-8
                text-center
                "
              >
                <div
                  className="
                  text-4xl
                  gold-text
                  flex
                  justify-center
                  mb-4
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold mb-2">
                  {item.number}
                </h3>

                <p className="text-zinc-400">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}

      <section className="section-padding bg-[#111111]">
        <div
          className="
          container-custom
          grid
          md:grid-cols-2
          gap-12
          items-center
          "
        >
          <div>
            <h2
              className="
              text-4xl
              font-bold
              gold-text
              mb-6
              "
            >
              About Carlton Barbers
            </h2>

            <p className="text-zinc-300 leading-8">
              At Carlton Barbers, we combine
              traditional craftsmanship with
              modern styling techniques to
              deliver a premium grooming
              experience.
            </p>

            <Link
              to="/about"
              className="
              inline-block
              mt-8
              btn-primary
              "
            >
              Learn More
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900"
              alt="Barber Shop"
              className="
              rounded-2xl
              shadow-2xl
              "
            />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}

      <section className="section-padding bg-black">
        <div className="container-custom">

          <div className="text-center mb-16">
            <h2
              className="
              text-4xl
              font-bold
              gold-text
              mb-4
              "
            >
              Featured Services
            </h2>

            <p className="text-zinc-400">
              Premium grooming tailored to
              your style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map(
              (service, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                  card-dark
                  p-8
                  text-center
                  "
                >
                  <FaCut
                    className="
                    text-4xl
                    gold-text
                    mx-auto
                    mb-5
                    "
                  />

                  <h3
                    className="
                    text-2xl
                    font-semibold
                    mb-4
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                    text-3xl
                    font-bold
                    gold-text
                    "
                  >
                    {service.price}
                  </p>
                </motion.div>
              )
            )}

          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-primary"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="section-padding bg-[#111111]">
        <div
          className="
          container-custom
          text-center
          "
        >
          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            gold-text
            mb-6
            "
          >
            Ready For Your Next Look?
          </h2>

          <p
            className="
            text-zinc-300
            max-w-2xl
            mx-auto
            mb-8
            "
          >
            Book your appointment today
            and experience premium barbering
            services at Carlton Barbers.
          </p>

          <Link
            to="/contact"
            className="btn-primary"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;