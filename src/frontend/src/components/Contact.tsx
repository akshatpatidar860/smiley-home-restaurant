import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi! My name is ${name}.\nPhone: ${phone}\nMessage: ${message}`,
    );
    window.open(`https://wa.me/919981716485?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            📍 Find Us & Contact
          </h2>
          <p className="text-muted-foreground text-lg">
            Visit us in Mandsaur or reach out — we're always happy to hear from
            you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value:
                    "New Collector Road, Opposite D-Mart, Mandsaur, Madhya Pradesh 458001",
                  href: undefined,
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+91 99817 16485",
                  href: "tel:+919981716485",
                },
                {
                  icon: "💬",
                  label: "WhatsApp",
                  value: "Order on WhatsApp",
                  href: "https://wa.me/919981716485",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "smileyhomerestaurant@gmail.com",
                  href: "mailto:smileyhomerestaurant@gmail.com",
                },
                {
                  icon: "📸",
                  label: "Instagram",
                  value: "@smiley_home_mandsaur_",
                  href: "https://instagram.com/smiley_home_mandsaur_",
                },
                {
                  icon: "🕐",
                  label: "Hours",
                  value: "Mon-Sun: 11:00 AM – 11:00 PM",
                  href: undefined,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-2xl p-4 shadow-xs"
                >
                  <p className="text-lg mb-1">{item.icon}</p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      data-ocid="contact.link"
                      className="text-sm font-medium text-amber-700 hover:text-amber-800 break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground break-words">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-xs">
              <h3 className="font-display text-xl font-bold text-foreground mb-5">
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="contact-phone"
                    data-ocid="contact.input"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    placeholder="Your message or order details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="rounded-xl resize-none"
                  />
                </div>
                <button
                  type="button"
                  data-ocid="contact.submit_button"
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold py-3 transition-all hover:scale-[1.02] shadow-sm"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border-2 border-border shadow-warm-lg h-[500px] lg:h-auto"
          >
            <iframe
              title="Smiley Home Restaurant Location"
              src="https://maps.google.com/maps?q=Smiley+Home+Restaurant+New+Collector+Road+Mandsaur+Madhya+Pradesh&output=embed&z=17"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
