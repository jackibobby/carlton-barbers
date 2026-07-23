import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function WhatsappButton() {
  const phoneNumber = "61400000000"; // Replace with actual business WhatsApp number

  const message =
    "Hello Carlton Barbers, I would like to book an appointment.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
      fixed
      bottom-6
      right-6
      z-50
      "
    >
      {/* Pulse Ring */}

      <span
        className="
        absolute
        inset-0
        rounded-full
        bg-green-500
        animate-ping
        opacity-30
        "
      />

      {/* Main Button */}

      <div
        className="
        relative
        w-16
        h-16
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-2xl
        border-4
        border-white
        "
      >
        <FaWhatsapp
          className="
          text-white
          text-3xl
          "
        />
      </div>

      {/* Tooltip */}

      <div
        className="
        hidden
        md:block
        absolute
        right-20
        top-1/2
        -translate-y-1/2
        bg-black
        text-white
        px-4
        py-2
        rounded-lg
        whitespace-nowrap
        opacity-0
        hover:opacity-100
        pointer-events-none
        "
      >
        Chat with us
      </div>
    </motion.a>
  );
}

export default WhatsappButton;