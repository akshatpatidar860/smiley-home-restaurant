import { motion } from "motion/react";

const SECOND_HOME_LOGO = "/assets/Fainal second home logo .PNG";

const BRANCHES = [
  {
    name: "Second Home Mandsaur",
    city: "Mandsaur",
    icon: "🏠",
    address: "Near Collectorate, Mandsaur, Madhya Pradesh 458001",
    phone: "+91 99817 16485",
    phoneHref: "tel:+919981716485",
    whatsapp: "https://wa.me/919981716485",
    mapLink:
      "https://maps.google.com/?q=Second+Home+Restaurant+Mandsaur+Madhya+Pradesh",
    hours: "Mon–Sun: 11:00 AM – 11:00 PM",
    features: [
      "Rajasthani Cuisine",
      "Dal Baati Churma",
      "Rajasthani Thali",
      "Rooftop Dining",
      "Celebration Setup",
      "Authentic Flavours",
    ],
    mapEmbed:
      "https://maps.google.com/maps?q=Second+Home+Restaurant+Mandsaur+Madhya+Pradesh&output=embed&z=15",
  },
  {
    name: "Second Home Neemuch",
    city: "Neemuch",
    icon: "🌿",
    address: "Neemuch, Madhya Pradesh 458441",
    phone: "+91 99817 16485",
    phoneHref: "tel:+919981716485",
    whatsapp: "https://wa.me/919981716485",
    mapLink:
      "https://maps.google.com/?q=Second+Home+Neemuch+Madhya+Pradesh+458441",
    hours: "Mon–Sun: 11:00 AM – 11:00 PM",
    features: [
      "Rajasthani Cuisine",
      "Dal Baati Churma",
      "Rajasthani Thali",
      "Dine In",
      "Takeaway",
      "Authentic Flavours",
    ],
    mapEmbed:
      "https://maps.google.com/maps?q=Second+Home+Neemuch+Madhya+Pradesh+458441&output=embed&z=15",
  },
];

function PhotoComingSoon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-amber-50 border-2 border-dashed border-amber-300 flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <span className="text-3xl">📸</span>
      <p className="text-amber-700 font-semibold text-sm">Photos Coming Soon</p>
    </div>
  );
}

export default function Branches() {
  return (
    <section id="branches" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-700 font-semibold text-sm tracking-widest uppercase mb-3 block">
            ✦ Our Locations
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Our Branches
          </h2>
          {/* Second Home Logo */}
          <div className="flex justify-center mt-4 mb-2">
            <img
              src={SECOND_HOME_LOGO}
              alt="Second Home Logo"
              className="h-20 object-contain"
            />
          </div>
          <p className="text-muted-foreground text-lg">
            Authentic Rajasthani cuisine at our branches in Mandsaur and
            Neemuch, Madhya Pradesh
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {BRANCHES.map((branch, i) => (
            <motion.div
              key={branch.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              data-ocid={`branches.item.${i + 1}`}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
            >
              {/* Branch photo placeholder */}
              <PhotoComingSoon className="h-52 w-full rounded-none" />

              <div className="p-6">
                {/* Logo + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={SECOND_HOME_LOGO}
                    alt="Second Home Logo"
                    className="h-10 object-contain"
                  />
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {branch.city}, MP
                    </p>
                  </div>
                </div>

                {/* Info grid */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">📍</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <a
                      href={branch.phoneHref}
                      data-ocid={`branches.link.${i + 1}`}
                      className="text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🕐</span>
                    <p className="text-sm text-muted-foreground">
                      {branch.hours}
                    </p>
                  </div>
                </div>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {branch.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Map embed */}
                <div className="rounded-2xl overflow-hidden border border-border h-44 mb-5">
                  <iframe
                    title={`${branch.city} Location`}
                    src={branch.mapEmbed}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={branch.phoneHref}
                    data-ocid={`branches.primary_button.${i + 1}`}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2.5 text-sm transition-all"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href={branch.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`branches.secondary_button.${i + 1}`}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 text-sm transition-all"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`branches.map_link.${i + 1}`}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold py-2.5 text-sm transition-all"
                  >
                    🗺️ Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
