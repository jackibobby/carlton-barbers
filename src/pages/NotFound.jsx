
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

function NotFound() {
  return (
    <>
      <section
        className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        px-6
        "
      >
        <div
          className="
          text-center
          max-w-3xl
          mx-auto
          "
        >
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            text-8xl
            md:text-[180px]
            font-extrabold
            gold-text
            leading-none
            "
          >
            404
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
            text-3xl
            md:text-5xl
            font-bold
            mb-6
            "
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
            text-zinc-400
            text-lg
            mb-10
            "
          >
            Sorry, the page you're looking for
            doesn't exist or may have been moved.
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
              to="/"
              className="
              btn-primary
              inline-flex
              items-center
              justify-center
              gap-2
              "
            >
              <FaHome />
              Back Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="
              btn-outline
              inline-flex
              items-center
              justify-center
              gap-2
              "
            >
              <FaArrowLeft />
              Go Back
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default NotFound;