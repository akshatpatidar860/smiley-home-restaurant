import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md shadow-warm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 text-left"
          >
            <span className="text-2xl">🍽️</span>
            <div>
              <p
                className={`font-display text-lg font-bold leading-tight ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Smiley Home Restaurant
              </p>
              <p
                className={`text-xs font-body ${
                  scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                Mandsaur
              </p>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid="nav.link"
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  scrolled
                    ? "text-foreground"
                    : "text-white hover:text-amber-300"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+919981716485"
              data-ocid="nav.link"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber-600 ${
                scrolled ? "text-foreground" : "text-white hover:text-amber-300"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              +91 99817 16485
            </a>
            <a
              href="https://wa.me/919981716485"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.primary_button"
              className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className={`xl:hidden p-2 rounded-md ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden bg-card/95 backdrop-blur-md border-b border-border shadow-warm-lg"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  data-ocid="nav.link"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 px-3 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+919981716485"
                data-ocid="nav.link"
                className="flex items-center gap-2 py-2 px-3 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 99817 16485
              </a>
              <a
                href="https://wa.me/919981716485"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                className="flex items-center gap-2 justify-center rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors mt-2"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
