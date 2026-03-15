import { motion } from "motion/react";

const EXPERIENCES = [
  {
    icon: "🌿",
    title: "Open Air Rooftop Dining",
    desc: "Enjoy your meal under the open sky at our rooftop restaurant. Fresh air, beautiful ambiance, and delicious food — perfect for relaxed evenings with family and friends.",
    tags: ["Open Air", "Rooftop", "Evening Dining"],
  },
  {
    icon: "🏮",
    title: "Indoor Theme Dining",
    desc: "Immerse yourself in our beautifully themed indoor spaces. Boho-inspired décor, soft lighting, and a cozy atmosphere that makes every meal feel special.",
    tags: ["Boho Décor", "AC Seating", "Theme Lighting"],
  },
  {
    icon: "🎂",
    title: "Private Celebration Dining",
    desc: "Make your special moments unforgettable with our private dining setups. Perfect for birthdays, anniversaries, and surprise parties with personalized decoration.",
    tags: ["Birthday", "Anniversary", "Private Setup"],
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

export default function DiningExperiences() {
  return (
    <section id="dining" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-700 font-semibold text-sm tracking-widest uppercase mb-3 block">
            ✦ Dining Experiences
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Every Visit, A New Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our unique dining spaces — from open rooftop to cozy boho
            interiors
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`dining.item.${i + 1}`}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-xs hover:shadow-warm-lg transition-all hover:-translate-y-1"
            >
              <PhotoComingSoon className="h-48 w-full rounded-none" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{exp.icon}</span>
                  <h4 className="font-display text-lg font-bold text-foreground leading-tight">
                    {exp.title}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/919981716485?text=Hi!%20I'd%20like%20to%20book%20a%20dining%20experience%20at%20Smiley%20Home%20Restaurant."
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="dining.primary_button"
            className="inline-flex items-center gap-2 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3.5 text-base transition-all hover:scale-105 shadow-warm"
          >
            📅 Book a Dining Experience
          </a>
        </div>
      </div>
    </section>
  );
}
