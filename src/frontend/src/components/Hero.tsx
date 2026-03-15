import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/assets/uploads/anim-1.jpg",
  "/assets/uploads/anim-2.jpg",
  "/assets/uploads/anim-3.jpg",
  "/assets/uploads/anim-4.jpg",
  "/assets/uploads/anim-5.jpg",
  "/assets/uploads/anim-6.jpg",
];

const DOTS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${10 + ((i * 7) % 80)}%`,
  left: `${5 + ((i * 9) % 90)}%`,
  size: 4 + (i % 4) * 2,
  delay: i * 0.3,
  floatClass: ["float-1", "float-2", "float-3"][i % 3],
}));

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((v) => (v + 1) % HERO_IMAGES.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[current]}
            alt="Restaurant"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

      {/* Floating Dots */}
      {DOTS.map((dot) => (
        <span
          key={dot.id}
          className={`absolute rounded-full bg-white/20 pointer-events-none ${dot.floatClass}`}
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      {/* Top-left logo */}
      <div className="absolute top-4 left-4 z-20">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/40 shadow-lg">
          <img
            src="/assets/uploads/image-1.png"
            alt="Smiley Home Restaurant Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block mb-5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-white">
            🌿 First Boho Café in Mandsaur
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-amber-200 font-medium mb-3"
        >
          100% Pure Vegetarian · Mandsaur, MP
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-base sm:text-lg mb-10 font-body"
        >
          The first Boho Café in Mandsaur — cozy, authentic, and unforgettable
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={scrollToMenu}
            className="rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 text-base transition-all hover:scale-105 shadow-lg"
          >
            View Menu
          </button>
          <a
            href="https://wa.me/919981716485"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.secondary_button"
            className="flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 text-base transition-all hover:scale-105 shadow-lg"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
