import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black footer-border">

      {/* Main Footer */}
      <div className="container-custom py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <Logo size="lg" />

            <div className="flex gap-4 mt-6 text-xl">

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

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold gold-text mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#D4AF37]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D4AF37]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#D4AF37]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#D4AF37]"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}

          <div>
            <h3 className="text-xl font-semibold gold-text mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-zinc-400">

              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="mt-1 text-[#D4AF37]" />
                <span>
                  114 Elgin St,
                  Carlton VIC 3053,
                  Australia
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-[#D4AF37]" />
                <span>
                  basilchidera8@gmail.com
                </span>
              </div>

            </div>
          </div>

          {/* Opening Hours */}

          <div>
            <h3 className="text-xl font-semibold gold-text mb-5">
              Opening Hours
            </h3>

            <div className="space-y-3 text-zinc-400">

              <div className="flex gap-3 items-center">
                <FaClock className="text-[#D4AF37]" />
                <span>
                  Mon - Fri:
                  9:00 AM - 7:00 PM
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <FaClock className="text-[#D4AF37]" />
                <span>
                  Saturday:
                  8:00 AM - 6:00 PM
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <FaClock className="text-[#D4AF37]" />
                <span>
                  Sunday:
                  10:00 AM - 4:00 PM
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Newsletter Section */}

      <div className="border-t border-zinc-800">

        <div className="container-custom py-10">

          <div className="text-center max-w-xl mx-auto">

            <h3 className="text-2xl font-bold gold-text mb-4">
              Stay Updated
            </h3>

            <p className="text-zinc-400 mb-6">
              Subscribe to receive grooming tips,
              offers, and updates from Carlton Barbers.
            </p>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button className="btn-primary">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-zinc-800">

        <div
          className="
          container-custom
          py-6
          text-center
          text-zinc-500
          "
        >
          © {currentYear} Carlton Barbers.
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;
