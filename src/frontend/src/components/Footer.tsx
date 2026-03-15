import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Dining", href: "#dining" },
  { label: "Menu", href: "#menu" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Branches", href: "#branches" },
  { label: "Decorations", href: "#decorations" },
  { label: "Social", href: "#social" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ background: "oklch(0.18 0.04 55)" }}
      className="text-white py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl">🍽️</span>
            <h2 className="font-display text-2xl font-bold text-white">
              Smiley Home Restaurant
            </h2>
          </div>
          <p className="text-white/70 text-sm mb-1">
            The first Boho Café in Mandsaur
          </p>
          <p className="text-white/60 text-xs">
            100% Pure Vegetarian · Neemuch &amp; Mandsaur, MP
          </p>
          <a
            href="tel:+919981716485"
            data-ocid="footer.link"
            className="inline-block mt-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
          >
            📞 +91 99817 16485
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mb-10">
          <a
            href="https://instagram.com/smiley_home_mandsaur_"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <SiInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/share/17BCyQKC2H/"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <SiFacebook className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/919981716485"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-green-600 transition-colors"
            aria-label="WhatsApp"
          >
            <SiWhatsapp className="h-5 w-5" />
          </a>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-10">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid="footer.link"
              onClick={() => handleNavClick(link.href)}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {year} Smiley Home Restaurant, Mandsaur. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
