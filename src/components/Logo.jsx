import { Link } from "react-router-dom";
import { FaCut } from "react-icons/fa";

function Logo({
  size = "md",
  showTagline = true,
  centered = false,
}) {
  const sizes = {
    sm: {
      icon: "text-xl",
      title: "text-xl",
      subtitle: "text-[10px]",
    },
    md: {
      icon: "text-2xl",
      title: "text-2xl",
      subtitle: "text-xs",
    },
    lg: {
      icon: "text-4xl",
      title: "text-4xl",
      subtitle: "text-sm",
    },
  };

  const currentSize = sizes[size];

  return (
    <Link
      to="/"
      className={`
        inline-flex
        items-center
        gap-3
        transition-all
        duration-300
        hover:scale-105
        ${centered ? "justify-center" : ""}
      `}
    >
      {/* Logo Mark */}

      <div
        className="
        w-12
        h-12
        rounded-full
        border-2
        border-[#D4AF37]
        flex
        items-center
        justify-center
        bg-black
        shadow-lg
        "
      >
        <FaCut
          className={`
          ${currentSize.icon}
          text-[#D4AF37]
          `}
        />
      </div>

      {/* Logo Text */}

      <div>
        <h1
          className={`
          ${currentSize.title}
          font-bold
          tracking-wider
          leading-none
          `}
        >
          <span className="text-white">
            Carlton
          </span>{" "}
          <span className="text-[#D4AF37]">
            Barbers
          </span>
        </h1>

        {showTagline && (
          <p
            className={`
            ${currentSize.subtitle}
            text-zinc-400
            tracking-[3px]
            uppercase
            mt-1
            `}
          >
            Precision • Style • Luxury
          </p>
        )}
      </div>
    </Link>
  );
}

export default Logo;