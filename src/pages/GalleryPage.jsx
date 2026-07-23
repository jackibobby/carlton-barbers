import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const categories = [
    "all",
    "haircuts",
    "fades",
    "beards",
    "shop",
  ];

  const galleryImages = [
    {
      id: 1,
      category: "haircuts",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900",
      title: "Classic Haircut",
    },
    {
      id: 2,
      category: "fades",
      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=900",
      title: "Skin Fade",
    },
    {
      id: 3,
      category: "beards",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900",
      title: "Beard Grooming",
    },
    {
      id: 4,
      category: "shop",
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900",
      title: "Barber Shop",
    },
    {
      id: 5,
      category: "haircuts",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900",
      title: "Modern Style",
    },
    {
      id: 6,
      category: "fades",
      image:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900",
      title: "Premium Fade",
    },
    {
      id: 7,
      category: "beards",
      image:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=900",
      title: "Luxury Beard Trim",
    },
    {
      id: 8,
      category: "shop",
      image:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900",
      title: "Luxury Interior",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (item) =>
            item.category === activeCategory
        );

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
            Gallery
          </motion.h1>

          <p
            className="
            text-zinc-300
            max-w-3xl
            mx-auto
            text-lg
            "
          >
            Explore our craftsmanship,
            premium styles and luxury
            barbering experience.
          </p>

        </div>
      </section>

      {/* FILTER BUTTONS */}

      <section className="bg-[#111111] py-8">

        <div className="container-custom">

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-4
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                  ${
                    activeCategory === category
                      ? "bg-[#D4AF37] text-black"
                      : "bg-black text-white border border-zinc-700"
                  }
                `}
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1)}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY GRID */}

      <section className="section-padding bg-black">

        <div className="container-custom">

          <motion.div
            layout
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            "
          >
            <AnimatePresence>

              {filteredImages.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                  overflow-hidden
                  rounded-2xl
                  card-dark
                  group
                  cursor-pointer
                  "
                >
                  <div className="relative">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      w-full
                      h-80
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                      "
                    />

                    <div
                      className="
                      absolute
                      inset-0
                      bg-black/70
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-300
                      flex
                      items-center
                      justify-center
                      "
                    >
                      <div className="text-center">

                        <h3
                          className="
                          text-xl
                          font-bold
                          gold-text
                          "
                        >
                          {item.title}
                        </h3>

                        <p className="text-zinc-300 mt-2">
                          Click to view
                        </p>

                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}

            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* CTA */}

      <section className="section-padding bg-[#111111]">

        <div
          className="
          container-custom
          text-center
          "
        >
          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            gold-text
            mb-6
            "
          >
            Ready For A Fresh Look?
          </h2>

          <p
            className="
            text-zinc-300
            max-w-2xl
            mx-auto
            mb-8
            "
          >
            Join thousands of satisfied
            clients and experience premium
            barbering at Carlton Barbers.
          </p>

          <button className="btn-primary">
            Book Appointment
          </button>

        </div>
      </section>
    </>
  );
}

export default GalleryPage;