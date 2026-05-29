const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #061a09 0%, #0f3518 50%, #061a09 100%)",
      }}
    >
      {/* Wave top divider */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "60px", display: "block" }}
          aria-hidden="true"
        >
          <path
            d="M0,0 C240,60 480,0 720,40 C960,80 1200,20 1440,50 L1440,0 Z"
            fill="#e8f5e9"
          />
        </svg>
      </div>

      {/* Decorative leaf pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        aria-hidden="true"
      >
        <svg
          className="absolute right-0 top-0"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <ellipse
            cx="200"
            cy="200"
            rx="160"
            ry="70"
            fill="#4caf50"
            transform="rotate(-30 200 200)"
          />
          <line
            x1="200"
            y1="60"
            x2="200"
            y2="340"
            stroke="#81c784"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="container-max px-4 sm:px-6 pt-20 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <img
                src="/assets/logo.jpg"
                alt="Green Nova Agro"
                className="h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p
              className="text-2xl font-black mb-2 tracking-tight"
              style={{
                background: "linear-gradient(135deg, #a7d7a9 0%, #66bb6a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Green Nova Agro
            </p>
            <p
              className="text-sm font-semibold mb-4 italic"
              style={{ color: "#81c784" }}
            >
              Making Sustainable Future
            </p>
            <p
              className="text-sm leading-relaxed max-w-sm mb-5"
              style={{ color: "#6aaa6e" }}
            >
              India's premier banana biorefinery, transforming agricultural
              biomass into premium sustainable materials for global markets.
            </p>
            {/* Social proof mini strip */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Zero Waste", icon: "♻️" },
                { label: "Digital Twin", icon: "🤖" },
                { label: "B2B Ready", icon: "🌍" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(100,200,110,0.15)",
                    color: "#81c784",
                    border: "1px solid rgba(100,200,110,0.2)",
                  }}
                >
                  <span>{tag.icon}</span> {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "#81c784" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {["Products", "About", "Capacity", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(`#${item.toLowerCase()}`);
                    }}
                    className="text-sm transition-colors duration-200 hover:text-white flex items-center gap-2 group"
                    style={{ color: "#6aaa6e" }}
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px bg-green-400 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "#81c784" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <span className="text-sm" style={{ color: "#6aaa6e" }}>
                  Kheda, Gujarat, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">✉️</span>
                <a
                  href="mailto:sale@greennovaagro.com"
                  className="text-sm hover:text-white transition-colors duration-200"
                  style={{ color: "#6aaa6e" }}
                >
                  sale@greennovaagro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">🌍</span>
                <span className="text-sm" style={{ color: "#6aaa6e" }}>
                  Domestic & International
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(100,200,110,0.25), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#4a7c4e" }}>
            © {currentYear} Green Nova Agro. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-white transition-colors duration-200"
            style={{ color: "#4a7c4e" }}
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
