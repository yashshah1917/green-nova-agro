import { useEffect, useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Capacity", href: "#capacity" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(26,92,42,0.15)"
          : "1px solid rgba(26,92,42,0.08)",
      }}
    >
      {/* Top green accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, #1a5c2a 0%, #4caf50 50%, #1a5c2a 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max px-4 sm:px-6">
        <div className="navbar-height flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 flex-shrink-0"
            data-ocid="nav.logo_link"
          >
            <img
              src="/assets/logo.jpg"
              alt="Green Nova Agro"
              className="h-[116px] w-auto object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (
                  e.currentTarget.nextElementSibling as HTMLElement
                ).style.display = "block";
              }}
            />
            <span
              className="hidden text-xl font-bold"
              style={{ color: "#1a5c2a" }}
            >
              Green Nova Agro
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="relative text-sm font-semibold transition-colors duration-200 py-1 nav-link-underline"
                style={{
                  color: activeLink === link.href ? "#1a5c2a" : "#374151",
                }}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="relative overflow-hidden px-6 py-2.5 text-sm font-bold rounded-xl text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1a5c2a 0%, #2e7d32 100%)",
              }}
              data-ocid="nav.contact_button"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md transition-colors duration-200"
            style={{ color: "#1a5c2a" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-ocid="nav.hamburger_button"
          >
            <div
              className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid rgba(26,92,42,0.1)",
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(12px)",
          }}
          data-ocid="nav.mobile_menu"
        >
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="block py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-green-50"
                style={{ color: "#0d2b12" }}
                data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="w-full mt-3 px-5 py-3 text-sm font-bold rounded-xl text-white"
              style={{
                background: "linear-gradient(135deg, #1a5c2a 0%, #2e7d32 100%)",
              }}
              data-ocid="nav.mobile_contact_button"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
