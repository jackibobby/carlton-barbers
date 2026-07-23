import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update theme
  const toggleTheme = () => {
    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";

    setTheme(newTheme);

    localStorage.setItem(
      "theme",
      newTheme
    );

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="
      fixed
      bottom-6
      left-6
      z-50
      w-14
      h-14
      rounded-full
      bg-[#D4AF37]
      text-black
      shadow-xl
      flex
      items-center
      justify-center
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FaSun size={22} />
      ) : (
        <FaMoon size={22} />
      )}
    </motion.button>
  );
}

export default ThemeToggle;