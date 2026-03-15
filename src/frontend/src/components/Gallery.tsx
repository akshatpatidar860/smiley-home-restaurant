import { motion } from "motion/react";

const GALLERY_PHOTOS = [
  {
    src: "/assets/uploads/gallery-photo-1.jpg",
    alt: "Smiley Restaurant Interior with Guests",
  },
  {
    src: "/assets/uploads/gallery-photo-2.jpg",
    alt: "Smiley Entrance at Night",
  },
  {
    src: "/assets/uploads/gallery-photo-3.jpg",
    alt: "Pizza with Salad and Drinks",
  },
  { src: "/assets/uploads/gallery-photo-4.jpg", alt: "Pasta with Meatballs" },
  { src: "/assets/uploads/gallery-photo-5.jpg", alt: "Full Food Spread" },
  {
    src: "/assets/uploads/gallery-photo-6.jpg",
    alt: "Outdoor Courtyard with Colorful Lights",
  },
  {
    src: "/assets/uploads/gallery-photo-7.jpg",
    alt: "Smiley Entrance Daytime",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            📸 Our Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Real photos from Smiley Home Restaurant, Mandsaur
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover block"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-base">
            Follow us on{" "}
            <a
              href="https://instagram.com/smiley_home_mandsaur_"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="gallery.link"
              className="text-amber-700 font-semibold hover:underline"
            >
              @smiley_home_mandsaur_
            </a>{" "}
            to see the latest photos!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
