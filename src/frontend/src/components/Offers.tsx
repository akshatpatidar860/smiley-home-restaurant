import { motion } from "motion/react";

const OFFERS = [
  {
    icon: "🍕",
    badge: "Catering",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200",
    title: "Party Orders",
    subtitle: "₹3,999 onward",
    desc: "Customized party platters and bulk catering for all events in Mandsaur. Starting at ₹3,999 per event.",
  },
  {
    icon: "🍽️",
    badge: "Best Deal",
    badgeColor: "bg-green-100 text-green-700",
    borderColor: "border-green-200",
    title: "Free Unlimited Food",
    subtitle: "Only ₹299 per person",
    desc: "Eat as much as you want — unlimited food for just ₹299 only! A full meal experience at the most affordable price in Mandsaur.",
  },
  {
    icon: "🎉",
    badge: "Daily Surprise",
    badgeColor: "bg-amber-100 text-amber-700",
    borderColor: "border-amber-200",
    title: "Everyday New Offers",
    subtitle: "Fresh deals every day!",
    desc: "We bring new offers and discounts every single day. Visit us or call to know today's special deal. Don't miss out!",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Special Offers
          </h2>
          <p className="text-muted-foreground text-lg">
            Exclusive deals just for our valued customers in Mandsaur
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`offers.item.${i + 1}`}
              className={`bg-card border-2 ${offer.borderColor} rounded-3xl p-7 shadow-xs hover:shadow-warm transition-all hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{offer.icon}</span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${offer.badgeColor}`}
                >
                  {offer.badge}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                {offer.title}
              </h3>
              <p className="text-amber-700 font-semibold mb-3">
                {offer.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+919981716485"
            data-ocid="offers.primary_button"
            className="inline-flex items-center gap-2 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3.5 text-base transition-all hover:scale-105 shadow-warm"
          >
            📞 Call to Know Today's Offer: +91 99817 16485
          </a>
        </div>
      </div>
    </section>
  );
}
