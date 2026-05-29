import { useEffect, useRef } from "react";

const stats = [
  { value: "1,000 kg", label: "Fiber / Day", icon: "🌿" },
  { value: "500 L", label: "Bio-Stimulant / Day", icon: "💧" },
  { value: "300 m²", label: "Vegan Leather / Day", icon: "👜" },
  { value: "1,000 kg", label: "Paper / Day", icon: "📄" },
  { value: "8,000", label: "Leaf Plates / Day", icon: "🍃" },
  { value: "10,000 kg", label: "Compost / Day", icon: "♻️" },
];

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const leafRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = leafRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.003;
      el.style.transform = `translateY(${Math.sin(t) * 18}px) rotate(${Math.sin(t * 0.7) * 6}deg)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/hero-banana-plantation-aerial.dim_1600x900.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-ocid="hero.section"
    >
      {/* Layered overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,30,10,0.85) 0%, rgba(10,50,20,0.7) 50%, rgba(20,80,30,0.6) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(26,92,42,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating decorative leaf SVG */}
      <div
        ref={leafRef}
        className="absolute right-8 top-24 pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ opacity: 0.18 }}
      >
        <svg
          width="340"
          height="340"
          viewBox="0 0 340 340"
          fill="none"
          aria-hidden="true"
        >
          <ellipse
            cx="170"
            cy="170"
            rx="130"
            ry="60"
            fill="#4caf50"
            transform="rotate(-35 170 170)"
          />
          <line
            x1="170"
            y1="50"
            x2="170"
            y2="290"
            stroke="#81c784"
            strokeWidth="3"
          />
          {[60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260].map((y, i) => (
            <line
              key={y}
              x1="170"
              y1={y}
              x2={i % 2 === 0 ? 240 : 100}
              y2={y + 18}
              stroke="#81c784"
              strokeWidth="1.5"
              opacity="0.7"
            />
          ))}
        </svg>
      </div>

      {/* Floating leaf bottom-left */}
      <div
        className="absolute left-4 bottom-32 pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ opacity: 0.13, transform: "rotate(20deg)" }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="80"
            ry="35"
            fill="#2e7d32"
            transform="rotate(20 100 100)"
          />
          <line
            x1="100"
            y1="30"
            x2="100"
            y2="170"
            stroke="#66bb6a"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "1px",
            height: "140%",
            background:
              "linear-gradient(180deg, transparent, rgba(167,215,169,0.15), transparent)",
            transform: "rotate(-20deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "30%",
            width: "1px",
            height: "140%",
            background:
              "linear-gradient(180deg, transparent, rgba(167,215,169,0.1), transparent)",
            transform: "rotate(-15deg)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-fade-in" style={{ animationDelay: "0ms" }}>
            <span
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest rounded-full mb-8 uppercase"
              style={{
                backgroundColor: "rgba(26,92,42,0.7)",
                color: "#a7d7a9",
                border: "1px solid rgba(100,200,110,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-green-400 pulse-dot"
                aria-hidden="true"
              />
              India's Premier Banana Biorefinery — Kheda, Gujarat
            </span>
          </div>

          {/* Headline */}
          <div className="hero-fade-in" style={{ animationDelay: "120ms" }}>
            <h1
              className="font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              Making{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a7d7a9 0%, #66bb6a 40%, #2e7d32 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sustainable
              </span>
              <br />
              Future
            </h1>
          </div>

          {/* Subheading */}
          <div className="hero-fade-in" style={{ animationDelay: "240ms" }}>
            <p
              className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(200,230,201,0.9)" }}
            >
              Transforming banana biomass into{" "}
              <em
                style={{
                  color: "#a7d7a9",
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                premium sustainable materials
              </em>{" "}
              for global markets
            </p>
          </div>

          {/* CTAs */}
          <div
            className="hero-fade-in flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: "360ms" }}
          >
            <button
              type="button"
              onClick={() => scrollTo("#products")}
              className="relative px-8 py-4 rounded-xl font-bold text-sm overflow-hidden group"
              style={{ backgroundColor: "white", color: "#1a5c2a" }}
              data-ocid="hero.explore_button"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                  →
                </span>
              </span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #f0fff4, #d7f0da)",
                }}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 rounded-xl font-bold text-sm border-2 text-white hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: "rgba(167,215,169,0.6)" }}
              data-ocid="hero.contact_button"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,25,8,0.97) 0%, rgba(10,45,15,0.97) 50%, rgba(5,25,8,0.97) 100%)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(100,200,110,0.2)",
        }}
        data-ocid="hero.stats_bar"
      >
        <div className="container-max px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="py-5 px-4 text-center relative group"
                style={{
                  borderLeft:
                    i > 0 ? "1px solid rgba(100,200,110,0.12)" : undefined,
                }}
              >
                <div className="text-lg mb-1" aria-hidden="true">
                  {stat.icon}
                </div>
                <p
                  className="text-xl font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #c8e6c9 0%, #81c784 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[10px] font-medium mt-1 uppercase tracking-wider"
                  style={{ color: "#5a9c5e" }}
                >
                  {stat.label}
                </p>
                {/* hover accent */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: "#4caf50" }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
