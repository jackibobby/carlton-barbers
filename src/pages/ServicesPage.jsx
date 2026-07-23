
import { motion } from "framer-motion";
import {
  FaCut,
  FaMagic,
  FaUserTie,
  FaCrown,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

function ServicesPage() {
  const services = [
    {
      icon: <FaCut />,
      title: "Classic Haircut",
      price: "$35",
      description:
        "Professional haircut tailored to your style and preference.",
    },
    {
      icon: <FaMagic />,
      title: "Skin Fade",
      price: "$45",
      description:
        "Modern fade with precision blending and sharp finishing.",
    },
    {
      icon: <FaUserTie />,
      title: "Beard Trim",
      price: "$20",
      description:
        "Detailed beard shaping and grooming for a clean look.",
    },
    {
      icon: <FaCrown />,
      title: "Hot Towel Shave",
      price: "$30",
      description:
        "Traditional hot towel shave with premium finishing.",
    },
    {
      icon: <FaCut />,
      title: "Kids Haircut",
      price: "$25",
      description:
        "Friendly and professional grooming services for children.",
    },
    {
      icon: <FaMagic />,
      title: "Hair Wash & Styling",
      price: "$20",
      description:
        "Premium wash and styling for a fresh appearance.",
    },
  ];

  const packages = [
    {
      name: "Silver Package",
      price: "$60",
      features: [
        "Classic Haircut",
        "Beard Trim",
        "Hair Styling",
      ],
    },
    {
      name: "Gold Package",
      price: "$85",
      featured: true,
      features: [
        "Skin Fade",
        "Hot Towel Shave",
        "Beard Trim",
        "Hair Styling",
      ],
    },
    {
      name: "Platinum Package",
      price: "$120",
      features: [
        "Premium Haircut",
        "Luxury Shave",
        "Facial Treatment",
        "Hair Styling",
      ],
    },
  ];

  return (
    <>

      {/* HERO */}

      <section
        className="
        pt-32
        pb-20
        bg-black
        text-center
        "
      >
        <div className="container-custom">

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
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
            md:text-6xl
            font-bold
            gold-text
            mb-6
            "
          >
            Our Services
          </motion.h1>

          <p
            className="
            max-w-3xl
            mx-auto
            text-zinc-300
            text-lg
            "
          >
            Premium barbering services designed
            to keep you looking sharp and confident.
          </p>

        </div>
      </section>

      {/* SERVICES GRID */}

      <section className="section-padding bg-[#111111]">

        <div className="container-custom">

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="
                card-dark
                p-8
                text-center
                "
              >
                <div
                  className="
                  text-5xl
                  gold-text
                  flex
                  justify-center
                  mb-6
                  "
                >
                  {service.icon}
                </div>

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
                  text-zinc-400
                  mb-6
                  "
                >
                  {service.description}
                </p>

                <div
                  className="
                  text-3xl
                  font-bold
                  gold-text
                  "
                >
                  {service.price}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* PACKAGES */}

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
              Luxury Packages
            </h2>

            <p className="text-zinc-400">
              Choose the experience that suits you.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className={`
                  card-dark
                  p-8
                  relative
                  ${
                    pkg.featured
                      ? "border-2 border-[#D4AF37]"
                      : ""
                  }
                `}
              >
                {pkg.featured && (
                  <div
                    className="
                    absolute
                    top-0
                    right-0
                    bg-[#D4AF37]
                    text-black
                    px-4
                    py-2
                    text-sm
                    font-bold
                    rounded-bl-lg
                    "
                  >
                    MOST POPULAR
                  </div>
                )}

                <h3
                  className="
                  text-3xl
                  font-bold
                  gold-text
                  mb-4
                  "
                >
                  {pkg.name}
                </h3>

                <div
                  className="
                  text-5xl
                  font-extrabold
                  mb-6
                  "
                >
                  {pkg.price}
                </div>

                <div className="space-y-4">

                  {pkg.features.map(
                    (feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="
                        flex
                        items-center
                        gap-3
                        "
                      >
                        <FaCheckCircle
                          className="
                          text-[#D4AF37]
                          "
                        />

                        <span>
                          {feature}
                        </span>
                      </div>
                    )
                  )}

                </div>

                <button
                  className="
                  btn-primary
                  w-full
                  mt-8
                  "
                >
                  Book Package
                </button>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURED OFFER */}

      <section className="section-padding bg-[#111111]">

        <div
          className="
          container-custom
          text-center
          "
        >
          <FaStar
            className="
            text-6xl
            gold-text
            mx-auto
            mb-6
            "
          />

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            gold-text
            mb-6
            "
          >
            Exclusive Weekly Offer
          </h2>

          <p
            className="
            max-w-2xl
            mx-auto
            text-zinc-300
            mb-8
            "
          >
            Book a Gold Package this week
            and receive a complimentary
            beard styling service.
          </p>

          <button className="btn-primary">
            Claim Offer
          </button>

        </div>
      </section>
    </>
  );
}

export default ServicesPage;