import { useState } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  badge: string;
  useCases: string[];
  sustainability: string;
  accent: string;
}

const products: Product[] = [
  {
    id: "paper",
    name: "Banana Paper",
    image: "/assets/generated/product-banana-paper.dim_600x500.jpg",
    description:
      "Eco-friendly paper made from banana pseudostem pulp. Ideal for packaging, stationery, and specialty printing.",
    badge: "1,000 kg/day",
    accent: "#5d4037",
    useCases: [
      "Premium packaging",
      "Artisan stationery",
      "Specialty printing",
      "Handmade notebooks",
    ],
    sustainability:
      "Uses zero-waste banana stem fibers, reducing agricultural waste and deforestation. 100% biodegradable and chemical-free processing.",
  },
  {
    id: "fiber",
    name: "Banana Fiber",
    image: "/assets/generated/product-banana-fiber.dim_600x500.jpg",
    description:
      "High-tensile natural fiber for textiles, composites, and rope applications.",
    badge: "1,000 kg/day",
    accent: "#2e7d32",
    useCases: [
      "Technical textiles",
      "Composite materials",
      "Ropes & twine",
      "Geotextiles",
    ],
    sustainability:
      "Naturally strong and lightweight — reduces dependence on synthetic fibers. Fully compostable end-of-life cycle.",
  },
  {
    id: "leather",
    name: "Vegan Leather",
    image: "/assets/generated/product-vegan-leather.dim_600x500.jpg",
    description:
      "Premium plant-based leather alternative for fashion, accessories, and upholstery.",
    badge: "300 m²/day",
    accent: "#6a1b9a",
    useCases: [
      "Fashion accessories",
      "Bags & wallets",
      "Upholstery",
      "Shoe manufacturing",
    ],
    sustainability:
      "Zero animal cruelty. Carbon footprint 80% lower than conventional leather. Water-resistant and durable finish.",
  },
  {
    id: "biostimulant",
    name: "Bio-Stimulant",
    image: "/assets/generated/product-bio-stimulant.dim_600x500.jpg",
    description:
      "Natural crop growth enhancer derived from banana stem extract. Boosts yield and soil health.",
    badge: "500 L/day",
    accent: "#1565c0",
    useCases: [
      "Crop yield enhancement",
      "Soil microbiome support",
      "Organic farming",
      "Horticulture",
    ],
    sustainability:
      "100% organic. Replaces chemical fertilizers, improving long-term soil fertility and reducing groundwater contamination.",
  },
  {
    id: "leafplates",
    name: "Leaf Plates",
    image: "/assets/generated/product-leaf-plates.dim_600x500.jpg",
    description:
      "Biodegradable single-use plates from banana leaves. Zero plastic, 100% compostable.",
    badge: "8,000 pcs/day",
    accent: "#2e7d32",
    useCases: [
      "Food service & catering",
      "Events & weddings",
      "Restaurant ware",
      "Export markets",
    ],
    sustainability:
      "Replaces single-use plastic plates. Composts in 30 days. No chemicals, binders, or coatings — pure leaf.",
  },
  {
    id: "compost",
    name: "Banana Compost",
    image: "/assets/generated/product-banana-compost.dim_600x500.jpg",
    description:
      "Premium organic compost from banana processing waste — pseudostem pulp and leaf biomass converted into nutrient-rich soil amendment.",
    badge: "10,000 kg/day",
    accent: "#558b2f",
    useCases: [
      "Soil enrichment",
      "Organic farming",
      "Horticulture & nurseries",
      "Large-scale agriculture",
    ],
    sustainability:
      "Diverts 100% of banana processing residues from landfill. Enriches soil with natural micronutrients, reducing need for synthetic fertilizers.",
  },
];

export function Products() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="products"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#f7fbf7" }}
      data-ocid="products.section"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(46,125,50,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(46,125,50,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="container-max relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{
              backgroundColor: "rgba(26,92,42,0.08)",
              color: "#1a5c2a",
              border: "1px solid rgba(26,92,42,0.2)",
            }}
          >
            What We Make
          </span>
          <h2
            className="font-bold leading-tight mt-2 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0d2b12" }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1a5c2a 0%, #4caf50 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Products
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Six premium sustainable materials — all derived from the same banana
            plant
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product, i) => (
            <button
              key={product.id}
              type="button"
              className="group w-full text-left rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              style={{
                background: "#ffffff",
                border:
                  hovered === product.id
                    ? `2px solid ${product.accent}`
                    : "2px solid transparent",
                boxShadow:
                  hovered === product.id
                    ? `0 20px 60px ${product.accent}22, 0 4px 20px rgba(0,0,0,0.08)`
                    : "0 4px 20px rgba(0,0,0,0.06)",
              }}
              onClick={() => setSelected(product)}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(product)}
              data-ocid={`products.item.${i + 1}`}
            >
              {/* Image with diagonal clip overlay */}
              <div
                className="relative overflow-hidden"
                style={{ height: "220px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${product.accent}55 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                {/* Diagonal cut at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: "40px",
                    background: "#ffffff",
                    clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
                  }}
                  aria-hidden="true"
                />
                {/* Badge */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white shadow-sm"
                  style={{ backgroundColor: product.accent }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-2">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#0d2b12" }}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <div
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: product.accent }}
                >
                  <span>View Details</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="w-0 group-hover:w-full h-0.5 transition-all duration-500"
                style={{ backgroundColor: product.accent }}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setSelected(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelected(null);
          }}
          data-ocid="products.dialog"
          role="presentation"
        >
          <div
            className="bg-card rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            style={{ border: `2px solid ${selected.accent}33` }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div
              className="relative overflow-hidden"
              style={{ height: "220px" }}
            >
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${selected.accent}44 0%, transparent 60%)`,
                }}
                aria-hidden="true"
              />
              <button
                type="button"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg font-bold"
                onClick={() => setSelected(null)}
                aria-label="Close dialog"
                data-ocid="products.close_button"
              >
                ✕
              </button>
              <span
                className="absolute bottom-4 left-4 px-3 py-1.5 text-xs font-bold rounded-full text-white shadow"
                style={{ backgroundColor: selected.accent }}
              >
                {selected.badge}
              </span>
            </div>
            <div className="p-7">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "#0d2b12" }}
              >
                {selected.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {selected.description}
              </p>
              <div className="mb-5">
                <h4
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: selected.accent }}
                >
                  Use Cases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.useCases.map((uc) => (
                    <span
                      key={uc}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: `${selected.accent}14`,
                        color: selected.accent,
                        border: `1px solid ${selected.accent}33`,
                      }}
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: selected.accent }}
                >
                  Sustainability Impact
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selected.sustainability}
                </p>
              </div>
              <button
                type="button"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-smooth hover:opacity-90 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${selected.accent} 0%, ${selected.accent}cc 100%)`,
                }}
                onClick={() => {
                  setSelected(null);
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="products.confirm_button"
              >
                Inquire About This Product
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
