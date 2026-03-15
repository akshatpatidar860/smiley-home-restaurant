import { motion } from "motion/react";

const FEATURES = [
  { icon: "🎂", title: "Celebrations", sub: "Birthdays & Anniversaries" },
  { icon: "🌿", title: "100% Veg", sub: "Pure Vegetarian" },
  { icon: "✨", title: "Boho Ambiance", sub: "Unique Atmosphere" },
];

function PhotoComingSoon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-amber-50 border-2 border-dashed border-amber-300 flex flex-col items-center justify-center gap-2 rounded-2xl ${className}`}
    >
      <span className="text-4xl">📸</span>
      <p className="text-amber-700 font-semibold text-sm">Photos Coming Soon</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-amber-700 font-semibold text-sm tracking-widest uppercase mb-3 block">
              ✦ Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Café Born from <span className="text-gradient">Passion</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Welcome to Smiley Home Restaurant – the first Boho Cafe in
              Mandsaur.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We created this cafe to bring a cozy bohemian vibe where people
              can relax, celebrate, and enjoy delicious food. Our cafe is
              perfect for birthdays, anniversaries, surprise celebrations, and
              romantic dinners. Every corner of our space is designed to create
              memorable experiences.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="flex items-center gap-2 bg-card border border-border rounded-2xl px-4 py-3 shadow-xs"
                >
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {f.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919981716485"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.primary_button"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 transition-all hover:scale-105 shadow-warm"
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

          {/* Right: Photo Coming Soon */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border-4 border-amber-200 shadow-warm-lg h-80 lg:h-[480px]">
              <PhotoComingSoon className="h-full w-full rounded-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl shadow-warm px-5 py-4">
              <p className="font-display text-3xl font-bold text-amber-700">
                🌿
              </p>
              <p className="font-semibold text-foreground text-sm">Pure Veg</p>
              <p className="text-xs text-muted-foreground">
                First Boho Experience in Mandsaur
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
