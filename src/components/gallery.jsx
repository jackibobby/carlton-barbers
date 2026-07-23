import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186",
  "https://images.unsplash.com/photo-1503951458645-643d53bfd90f",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
];

function Gallery() {
  return (
    <section id="gallery" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-16">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={`${image}?auto=format&fit=crop&w=800&q=80`}
                alt="gallery"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;