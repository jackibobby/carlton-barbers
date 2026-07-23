
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCut,
} from "react-icons/fa";

function BookingPage() {
  const [selectedService, setSelectedService] =
    useState("");

  const services = [
    {
      name: "Classic Haircut",
      price: "$35",
    },
    {
      name: "Skin Fade",
      price: "$45",
    },
    {
      name: "Beard Trim",
      price: "$20",
    },
    {
      name: "Hot Towel Shave",
      price: "$30",
    },
    {
      name: "Silver Package",
      price: "$60",
    },
    {
      name: "Gold Package",
      price: "$85",
    },
    {
      name: "Platinum Package",
      price: "$120",
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
            className="
            text-5xl
            md:text-6xl
            font-bold
            gold-text
            mb-6
            "
          >
            Book Your Appointment
          </motion.h1>

          <p
            className="
            text-zinc-300
            max-w-2xl
            mx-auto
            "
          >
            Reserve your grooming session
            in just a few clicks.
          </p>
        </div>
      </section>

      {/* BOOKING FORM */}

      <section className="section-padding bg-[#111111]">
        <div className="container-custom max-w-5xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            card-dark
            p-8
            md:p-12
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              gold-text
              mb-10
              text-center
              "
            >
              Appointment Details
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              {/* FULL NAME */}

              <div>
                <label className="block mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <FaUser
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#D4AF37]
                    "
                  />

                  <input
                    type="text"
                    placeholder="John Smith"
                    className="pl-12"
                  />
                </div>
              </div>

              {/* PHONE */}

              <div>
                <label className="block mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <FaPhone
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#D4AF37]
                    "
                  />

                  <input
                    type="tel"
                    placeholder="+61..."
                    className="pl-12"
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div>
                <label className="block mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#D4AF37]
                    "
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="pl-12"
                  />
                </div>
              </div>

              {/* SERVICE */}

              <div>
                <label className="block mb-2">
                  Select Service
                </label>

                <div className="relative">
                  <FaCut
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#D4AF37]
                    z-10
                    "
                  />

                  <select
                    value={selectedService}
                    onChange={(e) =>
                      setSelectedService(
                        e.target.value
                      )
                    }
                    className="
                    pl-12
                    "
                  >
                    <option value="">
                      Choose a Service
                    </option>

                    {services.map(
                      (service, index) => (
                        <option
                          key={index}
                          value={service.name}
                        >
                          {service.name} (
                          {service.price})
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              {/* DATE */}

              <div>
                <label className="block mb-2">
                  Appointment Date
                </label>

                <div className="relative">
                  <FaCalendarAlt
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#D4AF37]
                    "
                  />

                  <input
                    type="date"
                    className="pl-12"
                  />
                </div>
              </div>

              {/* TIME */}

              <div>
                <label className="block mb-2">
                  Preferred Time
                </label>

                <div className="relative">
                  <FaClock
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#D4AF37]
                    "
                  />

                  <input
                    type="time"
                    className="pl-12"
                  />
                </div>
              </div>

              {/* NOTES */}

              <div className="md:col-span-2">
                <label className="block mb-2">
                  Additional Notes
                </label>

                <textarea
                  rows="5"
                  placeholder="Any special requests..."
                />
              </div>

              {/* BUTTON */}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="
                  btn-primary
                  w-full
                  "
                >
                  Book Appointment
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </section>

      {/* INFO SECTION */}

      <section className="section-padding bg-black">
        <div className="container-custom">

          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            "
          >
            <div className="card-dark p-8 text-center">
              <h3 className="gold-text text-2xl mb-4">
                Address
              </h3>

              <p>
                114 Elgin St,
                Carlton VIC 3053,
                Australia
              </p>
            </div>

            <div className="card-dark p-8 text-center">
              <h3 className="gold-text text-2xl mb-4">
                Hours
              </h3>

              <p>
                Mon–Fri: 9AM–7PM
                <br />
                Sat: 8AM–6PM
                <br />
                Sun: 10AM–4PM
              </p>
            </div>

            <div className="card-dark p-8 text-center">
              <h3 className="gold-text text-2xl mb-4">
                Contact
              </h3>

              <p>
                basilchidera8@gmail.com
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default BookingPage;