import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] =
    useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop / documentHeight) * 100;

      setScrollProgress(
        Math.min(progress, 100)
      );
    };

    window.addEventListener(
      "scroll",
      updateScrollProgress
    );

    updateScrollProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );
    };
  }, []);

  return (
    <>
      {/* Progress Bar */}

      <motion.div
        className="
        fixed
        top-0
        left-0
        h-[4px]
        z-[9999]
        bg-[#D4AF37]
        shadow-[0_0_15px_#D4AF37]
        "
        style={{
          width: `${scrollProgress}%`,
        }}
        initial={{
          width: 0,
        }}
      />

      {/* Optional Percentage Indicator */}

      <div
        className="
        fixed
        top-4
        right-4
        z-[9998]
        hidden
        md:flex
        items-center
        justify-center
        text-xs
        font-semibold
        bg-black/80
        text-[#D4AF37]
        px-3
        py-2
        rounded-full
        border
        border-[#D4AF37]
        backdrop-blur-sm
        "
      >
        {Math.round(scrollProgress)}%
      </div>
    </>
  );
}

export default ScrollProgress;