const differentiators = [
  { icon: "🏭", text: "Fully Integrated Facility" },
  { icon: "🤖", text: "Digital Twin Enabled Factory" },
  { icon: "🌍", text: "Domestic & Global Supply" },
  { icon: "♻️", text: "Zero Waste Processing" },
  { icon: "📍", text: "15,000 sq.ft Kheda Unit" },
  { icon: "⭐", text: "B2B Grade Quality Output" },
];

export function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-card"
      data-ocid="about.section"
    >
      {/* Decorative diagonal accent */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(46,125,50,0.06) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(46,125,50,0.05) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span
              className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-5"
              style={{
                backgroundColor: "rgba(26,92,42,0.08)",
                color: "#1a5c2a",
                border: "1px solid rgba(26,92,42,0.2)",
              }}
            >
              Our Story
            </span>

            <h2
              className="font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0d2b12" }}
            >
              India's First{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #1a5c2a 0%, #4caf50 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Banana Biorefinery
              </span>
            </h2>

            {/* Pull quote */}
            <blockquote
              className="text-lg font-semibold leading-relaxed mb-6 pl-5 italic"
              style={{
                color: "#1a5c2a",
                borderLeft: "4px solid #4caf50",
              }}
            >
              "Turning agricultural waste into the building blocks of a
              circular, sustainable economy."
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              Green Nova Agro is India's pioneering banana biorefinery,
              dedicated to transforming agricultural waste into high-value
              sustainable materials. Founded with the vision of a circular
              economy, we have built a state-of-the-art facility in Kheda,
              Gujarat that converts every part of the banana pseudostem and leaf
              into premium commercial products.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Our commitment to zero-waste processing means that banana biomass
              — previously discarded as agricultural residue — is now the
              foundation of a thriving green economy. From vegan leather for
              global fashion houses to organic bio-stimulants for Indian
              farmers, we serve diverse domestic and international markets.
            </p>

            {/* Differentiators grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {differentiators.map((d) => (
                <div
                  key={d.text}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:shadow-md"
                  style={{
                    backgroundColor: "rgba(26,92,42,0.05)",
                    border: "1px solid rgba(26,92,42,0.1)",
                  }}
                >
                  <span className="text-xl flex-shrink-0" aria-hidden="true">
                    {d.icon}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#0d2b12" }}
                  >
                    {d.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Location badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,92,42,0.12) 0%, rgba(76,175,80,0.08) 100%)",
                color: "#1a5c2a",
                border: "1px solid rgba(26,92,42,0.2)",
              }}
            >
              <span aria-hidden="true">📍</span>
              Kheda, Gujarat, India
              <span
                className="w-2 h-2 rounded-full pulse-dot"
                style={{ backgroundColor: "#4caf50" }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Image gallery side */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="/assets/generated/factory-digital-twin.dim_900x600.jpg"
                alt="Green Nova Agro digital-twin enabled factory in Kheda, Gujarat"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ maxHeight: "280px" }}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(26,92,42,0.3) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                  style={{
                    backgroundColor: "rgba(15,53,24,0.9)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  Kheda, Gujarat — 15,000 sq.ft
                </span>
                <span
                  className="px-3 py-1.5 rounded-lg text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(76,175,80,0.2)",
                    color: "#a7d7a9",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(100,200,110,0.3)",
                  }}
                >
                  🤖 Digital Twin
                </span>
              </div>
            </div>

            {/* Secondary images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl shadow-md group">
                <img
                  src="/assets/generated/factory-interior.dim_800x500.jpg"
                  alt="Factory interior — banana stem processing line"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(26,92,42,0.25)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(15,53,24,0.9) 0%, transparent 100%)",
                  }}
                >
                  Processing Line
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-md group">
                <img
                  src="/assets/generated/banana-plantation.dim_800x500.jpg"
                  alt="Banana plantation — raw material source"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(26,92,42,0.25)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(15,53,24,0.9) 0%, transparent 100%)",
                  }}
                >
                  Banana Plantation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
