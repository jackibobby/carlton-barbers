
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function ContactPage() {
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
            Contact Us
          </motion.h1>

          <p
            className="
            text-zinc-300
            max-w-3xl
            mx-auto
            text-lg
            "
          >
            We'd love to hear from you.
            Reach out to book an appointment
            or ask any questions.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="section-padding bg-[#111111]">
        <div
          className="
          container-custom
          grid
          lg:grid-cols-2
          gap-12
          "
        >
          {/* CONTACT FORM */}

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
            className="
            card-dark
            p-8
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              gold-text
              mb-8
              "
            >
              Send Us A Message
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              />

              <button
                type="submit"
                className="
                btn-primary
                w-full
                "
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* CONTACT DETAILS */}

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
            <div
              className="
              card-dark
              p-8
              mb-8
              "
            >
              <h2
                className="
                text-3xl
                font-bold
                gold-text
                mb-8
                "
              >
                Visit Us
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <FaMapMarkerAlt
                    className="
                    text-[#D4AF37]
                    text-xl
                    mt-1
                    "
                  />

                  <div>
                    <h3 className="font-semibold">
                      Address
                    </h3>

                    <p className="text-zinc-400">
                      114 Elgin St,
                      Carlton VIC 3053,
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope
                    className="
                    text-[#D4AF37]
                    text-xl
                    mt-1
                    "
                  />

                  <div>
                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className="text-zinc-400">
                      basilchidera8@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhoneAlt
                    className="
                    text-[#D4AF37]
                    text-xl
                    mt-1
                    "
                  />

                  <div>
                    <h3 className="font-semibold">
                      Phone
                    </h3>

                    <p className="text-zinc-400">
                      +61 XXX XXX XXX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HOURS */}

            <div
              className="
              card-dark
              p-8
              "
            >
              <h2
                className="
                text-3xl
                font-bold
                gold-text
                mb-8
                "
              >
                Opening Hours
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <FaClock
                    className="
                    text-[#D4AF37]
                    mt-1
                    "
                  />
                  <span>
                    Monday - Friday:
                    9:00 AM - 7:00 PM
                  </span>
                </div>

                <div className="flex gap-4">
                  <FaClock
                    className="
                    text-[#D4AF37]
                    mt-1
                    "
                  />
                  <span>
                    Saturday:
                    8:00 AM - 6:00 PM
                  </span>
                </div>

                <div className="flex gap-4">
                  <FaClock
                    className="
                    text-[#D4AF37]
                    mt-1
                    "
                  />
                  <span>
                    Sunday:
                    10:00 AM - 4:00 PM
                  </span>
                </div>
              </div>

              {/* SOCIALS */}

              <div className="mt-10">
                <h3
                  className="
                  text-xl
                  font-semibold
                  mb-4
                  "
                >
                  Follow Us
                </h3>

                <div className="flex gap-4 text-xl">
                  <a
                    href="#"
                    className="
                    hover:text-[#D4AF37]
                    transition
                    "
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="
                    hover:text-[#D4AF37]
                    transition
                    "
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    className="
                    hover:text-[#D4AF37]
                    transition
                    "
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP */}

      <section className="bg-black">
        <div className="container-custom py-10">
          <div
            className="
            overflow-hidden
            rounded-2xl
            border
            border-zinc-800
            "
          >
            <iframe
              title="Carlton Barbers Location"
              src="https://maps.google.com/maps?q=114%20Elgin%20St%20Carlton%20VIC%203053&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;