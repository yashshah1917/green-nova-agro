const metrics = [
  {
    icon: "🌿",
    value: "1,000",
    unit: "kg/day",
    label: "Banana Fiber",
    color: "#2e7d32",
  },
  {
    icon: "💧",
    value: "500",
    unit: "L/day",
    label: "Bio-Stimulant",
    color: "#1565c0",
  },
  {
    icon: "👜",
    value: "300",
    unit: "m²/day",
    label: "Vegan Leather",
    color: "#4a148c",
  },
  {
    icon: "📄",
    value: "1,000",
    unit: "kg/day",
    label: "Banana Paper",
    color: "#5d4037",
  },
  {
    icon: "🍃",
    value: "8,000",
    unit: "pcs/day",
    label: "Leaf Plates",
    color: "#2e7d32",
  },
  {
    icon: "♻️",
    value: "10,000",
    unit: "kg/day",
    label: "Compost",
    color: "#558b2f",
  },
  {
    icon: "🏭",
    value: "15,000",
    unit: "sq.ft",
    label: "Facility Area",
    color: "#00695c",
  },
];

export function Capacity() {
  return (
    <section
      id="capacity"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a1f0c 0%, #0f3518 40%, #0a2a0d 100%)",
      }}
      data-ocid="capacity.section"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Large leaf silhouette */}
        <svg
          className="absolute -right-32 top-0 opacity-5"
          width="600"
          height="700"
          viewBox="0 0 600 700"
          fill="none"
          aria-hidden="true"
        >
          <ellipse
            cx="300"
            cy="350"
            rx="220"
            ry="100"
            fill="#4caf50"
            transform="rotate(-30 300 350)"
          />
          <line
            x1="300"
            y1="80"
            x2="300"
            y2="620"
            stroke="#66bb6a"
            strokeWidth="4"
          />
          {[120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520].map((y) => (
            <line
              key={y}
              x1="300"
              y1={y}
              x2={y % 80 === 0 ? 460 : 140}
              y2={y + 25}
              stroke="#66bb6a"
              strokeWidth="2"
              opacity="0.6"
            />
          ))}
        </svg>
        {/* small leaf left */}
        <svg
          className="absolute -left-16 bottom-20 opacity-5"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          aria-hidden="true"
        >
          <ellipse
            cx="150"
            cy="150"
            rx="110"
            ry="48"
            fill="#81c784"
            transform="rotate(25 150 150)"
          />
          <line
            x1="150"
            y1="50"
            x2="150"
            y2="250"
            stroke="#a5d6a7"
            strokeWidth="3"
          />
        </svg>
        {/* Horizontal divider lines */}
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(100,200,110,0.07), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(100,200,110,0.07), transparent)",
          }}
        />
      </div>

      <div className="container-max relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{
              backgroundColor: "rgba(100,200,110,0.15)",
              color: "#81c784",
              border: "1px solid rgba(100,200,110,0.25)",
            }}
          >
            Daily Output
          </span>
          <h2
            className="font-bold text-white leading-tight mt-2 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Production{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a7d7a9 0%, #66bb6a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Capacity
            </span>
          </h2>
          <p style={{ color: "#6aaa6e" }} className="max-w-xl mx-auto">
            Our Kheda facility delivers consistently at scale — every single day
          </p>
        </div>

        {/* Metric grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-14">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="relative rounded-2xl p-6 text-center overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(100,200,110,0.15)]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(100,200,110,0.15)",
                backdropFilter: "blur(8px)",
              }}
              data-ocid={`capacity.item.${i + 1}`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(100,200,110,0.08) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-10 group-hover:w-full h-0.5 transition-all duration-500 rounded-full"
                style={{ backgroundColor: "#4caf50", opacity: 0.6 }}
                aria-hidden="true"
              />
              <div className="text-4xl mb-4 relative" aria-hidden="true">
                {m.icon}
              </div>
              <p
                className="font-black leading-none mb-1 relative"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  background:
                    "linear-gradient(135deg, #e8f5e9 0%, #a7d7a9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {m.value}
              </p>
              <p
                className="text-xs font-medium mt-1 relative"
                style={{ color: "#6aaa6e" }}
              >
                {m.unit}
              </p>
              <p className="text-sm font-bold mt-2 relative text-white">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Facility banner */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,92,42,0.9) 0%, rgba(15,53,24,0.95) 100%)",
            border: "1px solid rgba(100,200,110,0.2)",
          }}
        >
          {/* Decorative right accent */}
          <div
            className="absolute top-0 right-0 bottom-0 w-1 opacity-60"
            style={{
              background:
                "linear-gradient(180deg, transparent, #4caf50, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              aria-hidden="true"
            >
              🏭
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">
                  Kheda Integrated Biorefinery
                </h3>
                <span
                  className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-bold rounded-full"
                  style={{
                    backgroundColor: "rgba(100,200,110,0.2)",
                    color: "#a7d7a9",
                  }}
                >
                  Digital Twin Enabled
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#a7d7a9" }}
              >
                Our integrated biorefinery in Kheda, Gujarat spans{" "}
                <strong className="text-white">15,000 sq.ft</strong> and is
                equipped with{" "}
                <strong className="text-white">digital twin technology</strong>{" "}
                for real-time monitoring and process optimization. Every stage
                of the banana biomass — from pseudostem to leaf — is utilized in
                a true zero-waste production model, delivering consistent
                B2B-grade output for domestic and global supply chains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
