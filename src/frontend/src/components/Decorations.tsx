import { motion } from "motion/react";

const DECORATION_PACKAGES = [
  {
    icon: "🎂",
    title: "Birthday Decoration",
    desc: "Make birthdays magical with balloons, banners, personalized messages, and themed setups. Perfect surprise arrangements for your loved ones.",
    tags: ["Balloons", "Banners", "Themed", "Surprise Setup"],
    price: "Starting ₹499",
    color: "border-pink-200 hover:border-pink-400",
  },
  {
    icon: "💑",
    title: "Anniversary / Romantic Décor",
    desc: "Roses, candles, fairy lights, and personalized setups for the most romantic evening. Let us create a magical atmosphere for your special day.",
    tags: ["Rose Petals", "Candle Light", "Fairy Lights", "Personalized"],
    price: "Starting ₹699",
    color: "border-red-200 hover:border-red-400",
  },
  {
    icon: "🌹",
    title: "Proposal Setup",
    desc: "Plan the perfect proposal with our romantic setup — rose arch, message boards, candles, and a setting that ensures a YES!",
    tags: ["Rose Arch", "Message Board", "Exclusive Setup"],
    price: "Starting ₹999",
    color: "border-rose-200 hover:border-rose-400",
  },
  {
    icon: "🎊",
    title: "Party & Event Décor",
    desc: "Full event decoration for kitty parties, reunions, farewell parties, and special occasions. We handle everything from setup to cleanup.",
    tags: ["Full Décor", "Theme Lighting", "Table Setup"],
    price: "Starting ₹1,499",
    color: "border-purple-200 hover:border-purple-400",
  },
  {
    icon: "👶",
    title: "Baby Shower & Gender Reveal",
    desc: "Celebrate the arrival of new life with cute, pastel-themed decorations, balloon installations, and heartwarming setups.",
    tags: ["Pastel Theme", "Balloon Setup", "Photo Backdrop"],
    price: "Starting ₹799",
    color: "border-blue-200 hover:border-blue-400",
  },
  {
    icon: "🏆",
    title: "Custom Themed Décor",
    desc: "Have a specific theme in mind? We'll bring your vision to life — Bollywood, Royal, Rustic Boho, Floral, or anything you imagine!",
    tags: ["Custom Theme", "Any Occasion", "Fully Personalized"],
    price: "Price on Request",
    color: "border-amber-200 hover:border-amber-400",
  },
];

function PhotoComingSoon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-amber-50 border-2 border-dashed border-amber-300 flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <span className="text-3xl">📸</span>
      <p className="text-amber-600 font-semibold text-xs">Photos Coming Soon</p>
    </div>
  );
}

export default function Decorations() {
  return (
    <section id="decorations" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-700 font-semibold text-sm tracking-widest uppercase mb-3 block">
            ✦ Decoration Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Make Every Moment Special
          </h2>
          <p className="text-muted-foreground text-lg">
            Beautiful decorations for every occasion — birthdays, anniversaries,
            proposals &amp; more
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {DECORATION_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`decorations.item.${i + 1}`}
              className={`bg-card border-2 ${pkg.color} rounded-3xl overflow-hidden shadow-xs hover:shadow-warm-lg transition-all hover:-translate-y-1`}
            >
              <PhotoComingSoon className="h-44 w-full rounded-none" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{pkg.icon}</span>
                    <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                      {pkg.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {pkg.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700 font-bold text-base">
                    {pkg.price}
                  </span>
                  <a
                    href={`https://wa.me/919981716485?text=Hi!%20I'd%20like%20to%20book%20${encodeURIComponent(pkg.title)}%20at%20Smiley%20Home%20Restaurant.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`decorations.primary_button.${i + 1}`}
                    className="text-sm bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919981716485?text=Hi!%20I'd%20like%20to%20enquire%20about%20decoration%20packages%20at%20Smiley%20Home%20Restaurant."
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="decorations.primary_button"
            className="inline-flex items-center gap-2 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3.5 text-base transition-all hover:scale-105 shadow-warm"
          >
            🎀 Enquire About Decorations
          </a>
        </div>
      </div>
    </section>
  );
}
