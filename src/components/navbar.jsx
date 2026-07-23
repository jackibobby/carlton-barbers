import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

<Logo />

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300
      ${
        scrolled
          ? "bg-black/95 nav-shadow backdrop-blur-md"
          : "bg-transparent"
      }
      `}
    >
      <div className="container-custom">

        <div
          className="
          h-20
          flex
          items-center
          justify-between
          "
        >


         

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative
                  font-medium
                  transition
                  duration-300
                  hover:text-[#D4AF37]
                  ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-white"
                  }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              className="
              btn-primary
              "
            >
              Book Now
            </button>

          </nav>

          {/* Mobile Button */}

          <button
            to="/booking"
            className="
            md:hidden
            text-white
            text-2xl
            "
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            md:hidden
            bg-black
            border-t
            border-zinc-800
            "
          >
            <div
              className="
              flex
              flex-col
              p-6
              gap-6
              "
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={({ isActive }) =>
                    `
                    text-lg
                    ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white"
                    }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <button
                className="
                btn-primary
                w-full
                "
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </header>
  );
}

export default Navbar;