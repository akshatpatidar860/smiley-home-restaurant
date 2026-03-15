import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const SOCIAL_ACCOUNTS = [
  {
    platform: "Instagram",
    handle: "@smiley_home_mandsaur_",
    href: "https://instagram.com/smiley_home_mandsaur_",
    icon: SiInstagram,
    color: "from-purple-500 to-pink-500",
    textColor: "text-pink-600",
    desc: "Daily food photos, decor setups, and behind-the-scenes moments. Follow us to never miss an update!",
    cta: "Follow on Instagram",
  },
  {
    platform: "Facebook",
    handle: "Smiley Home Restaurant",
    href: "https://www.facebook.com/share/17BCyQKC2H/",
    icon: SiFacebook,
    color: "from-blue-600 to-blue-400",
    textColor: "text-blue-600",
    desc: "Event updates, special offers, and community posts. Like our page for the latest news and deals!",
    cta: "Like on Facebook",
  },
  {
    platform: "WhatsApp",
    handle: "+91 99817 16485",
    href: "https://wa.me/919981716485",
    icon: SiWhatsapp,
    color: "from-green-500 to-green-400",
    textColor: "text-green-600",
    desc: "Chat with us directly for orders, reservations, and decoration bookings. We respond instantly!",
    cta: "Chat on WhatsApp",
  },
];

export default function SocialMedia() {
  return (
    <section id="social" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-700 font-semibold text-sm tracking-widest uppercase mb-3 block">
            ✦ Stay Connected
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Follow Us on Social Media
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with our latest offers, events, and food photos
          </p>
        </motion.div>

        {/* Social platform cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {SOCIAL_ACCOUNTS.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`social.item.${i + 1}`}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-xs hover:shadow-warm-lg transition-all hover:-translate-y-1"
              >
                {/* Gradient header */}
                <div
                  className={`bg-gradient-to-br ${social.color} p-6 flex flex-col items-center gap-3`}
                >
                  <Icon className="h-10 w-10 text-white" />
                  <p className="text-white font-bold text-lg">
                    {social.platform}
                  </p>
                  <p className="text-white/80 text-sm text-center">
                    {social.handle}
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {social.desc}
                  </p>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`social.link.${i + 1}`}
                    className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 font-semibold text-sm transition-all hover:scale-[1.02] ${social.textColor} border-current`}
                  >
                    <Icon className="h-4 w-4" />
                    {social.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
