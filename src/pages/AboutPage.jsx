
import { motion } from "framer-motion";
import {
  FaAward,
  FaCut,
  FaStar,
  FaUsers,
} from "react-icons/fa";

function AboutPage() {
  const features = [
    {
      icon: <FaCut />,
      title: "Expert Barbering",
      description:
        "Skilled barbers delivering precision cuts and modern grooming services.",
    },
    {
      icon: <FaAward />,
      title: "Premium Experience",
      description:
        "Luxury atmosphere designed to make every visit memorable.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Focused",
      description:
        "Every client receives personalized attention and service.",
    },
    {
      icon: <FaStar />,
      title: "Trusted Quality",
      description:
        "Consistent excellence that keeps clients coming back.",
    },
  ];

  const teamMembers = [
    {
      name: "Senior Barber",
      role: "Fade Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      name: "Master Barber",
      role: "Classic Cuts",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    },
    {
      name: "Style Expert",
      role: "Beard Grooming",
      image:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500",
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
            About Carlton Barbers
          </motion.h1>

          <p
            className="
            max-w-3xl
            mx-auto
            text-zinc-300
            text-lg
            "
          >
            Precision Cuts. Timeless Style.
            Delivering premium grooming
            experiences in Carlton, Australia.
          </p>

        </div>
      </section>

      {/* STORY */}

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
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900"
              alt="Barber Shop"
              className="
              rounded-2xl
              shadow-2xl
              "
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2
              className="
              text-4xl
              font-bold
              gold-text
              mb-6
              "
            >
              Our Story
            </h2>

            <p
              className="
              text-zinc-300
              leading-8
              mb-6
              "
            >
              Carlton Barbers was founded
              with a commitment to combining
              classic barber traditions and
              modern grooming trends.
            </p>

            <p
              className="
              text-zinc-300
              leading-8
              "
            >
              From precision fades and
              sharp beard trims to luxury
              grooming experiences,
              our mission is to help every
              client look and feel their best.
            </p>
          </motion.div>

        </div>
      </section>

      {/* MISSION & VISION */}

      <section className="section-padding bg-black">

        <div className="container-custom">

          <div
            className="
            grid
            md:grid-cols-2
            gap-8
            "
          >
            <div className="card-dark p-8">
              <h3
                className="
                text-3xl
                font-bold
                gold-text
                mb-4
                "
              >
                Our Mission
              </h3>

              <p className="text-zinc-300 leading-8">
                To provide premium barbering
                services that exceed client
                expectations through skill,
                professionalism, and care.
              </p>
            </div>

            <div className="card-dark p-8">
              <h3
                className="
                text-3xl
                font-bold
                gold-text
                mb-4
                "
              >
                Our Vision
              </h3>

              <p className="text-zinc-300 leading-8">
                To become one of Australia's
                most trusted and respected
                barber brands known for
                excellence and innovation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="section-padding bg-[#111111]">

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
              Why Choose Us
            </h2>

            <p className="text-zinc-400">
              Experience barbering at its finest.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {features.map((item, index) => (
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
                  text-4xl
                  gold-text
                  mb-5
                  flex
                  justify-center
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                  text-xl
                  font-semibold
                  mb-4
                  "
                >
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* TEAM */}

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
              Meet Our Team
            </h2>

            <p className="text-zinc-400">
              Skilled professionals dedicated
              to exceptional grooming.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                card-dark
                overflow-hidden
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-full
                  h-80
                  object-cover
                  "
                />

                <div className="p-6 text-center">

                  <h3
                    className="
                    text-2xl
                    font-semibold
                    "
                  >
                    {member.name}
                  </h3>

                  <p className="gold-text mt-2">
                    {member.role}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default AboutPage;