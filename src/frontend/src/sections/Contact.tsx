import { useState } from "react";

const interestOptions = [
  { value: "", label: "Select your interest" },
  { value: "product-inquiry", label: "Product Inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "bulk-order", label: "Bulk Order" },
  { value: "general", label: "General Inquiry" },
];

interface FormState {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f0fff4 0%, #e8f5e9 50%, #f0fff4 100%)",
      }}
      data-ocid="contact.section"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(46,125,50,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "3%",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(46,125,50,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

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
            Work With Us
          </span>
          <h2
            className="font-bold leading-tight mt-2 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0d2b12" }}
          >
            Let's Build{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1a5c2a 0%, #4caf50 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Together
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Reach out for product inquiries, partnerships, or bulk orders. We
            respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form panel */}
          <div
            className="lg:col-span-3 rounded-3xl p-8 shadow-lg"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(26,92,42,0.1)",
            }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-12 text-center"
                data-ocid="contact.success_state"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner"
                  style={{
                    background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
                  }}
                >
                  ✅
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0d2b12" }}
                >
                  Message Sent!
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  type="button"
                  className="mt-8 px-8 py-3 rounded-xl text-sm font-bold text-white transition-smooth hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a5c2a 0%, #2e7d32 100%)",
                  }}
                  onClick={() => setSubmitted(false)}
                  data-ocid="contact.reset_button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#0d2b12" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="contact-input w-full px-4 py-3 text-sm rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200"
                      data-ocid="contact.name_input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#0d2b12" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="contact-input w-full px-4 py-3 text-sm rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200"
                      data-ocid="contact.email_input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0d2b12" }}
                  >
                    Company / Organisation
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="contact-input w-full px-4 py-3 text-sm rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200"
                    data-ocid="contact.company_input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-interest"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0d2b12" }}
                  >
                    Area of Interest *
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 text-sm rounded-xl border bg-background text-foreground focus:outline-none transition-all duration-200"
                    data-ocid="contact.interest_select"
                  >
                    {interestOptions.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.value === ""}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0d2b12" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="contact-input w-full px-4 py-3 text-sm rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 resize-none"
                    data-ocid="contact.message_textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl font-bold text-sm text-white transition-smooth hover:opacity-90 hover:shadow-lg disabled:opacity-60"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a5c2a 0%, #2e7d32 100%)",
                  }}
                  data-ocid="contact.submit_button"
                >
                  {submitting ? "Sending..." : "Send Inquiry →"}
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div
            className="lg:col-span-2 space-y-5"
            data-ocid="contact.info_panel"
          >
            {/* Contact info card */}
            <div
              className="rounded-3xl p-6"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(26,92,42,0.1)",
                boxShadow: "0 4px 20px rgba(26,92,42,0.06)",
              }}
            >
              <h3
                className="font-bold text-base mb-5"
                style={{ color: "#0d2b12" }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    title: "Address",
                    value: "Kheda, Gujarat, India",
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    value: "sale@greennovaagro.com",
                    href: "mailto:sale@greennovaagro.com",
                  },
                  {
                    icon: "🌍",
                    title: "Markets Served",
                    value: "Domestic & International",
                  },
                  {
                    icon: "⏱️",
                    title: "Response Time",
                    value: "Within 24 hours",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wide mb-0.5"
                        style={{ color: "#1a5c2a" }}
                      >
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why GNA card */}
            <div
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0f3518 0%, #1a5c2a 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle, #81c784 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span>🌱</span> Why Green Nova Agro?
              </h3>
              <ul className="space-y-3">
                {[
                  "Zero-waste biorefinery model",
                  "Digital twin enabled facility",
                  "Consistent B2B-grade supply",
                  "Kheda, Gujarat production base",
                  "Global & domestic export capability",
                ].map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "#a7d7a9" }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                      style={{
                        backgroundColor: "rgba(76,175,80,0.3)",
                        color: "#a7d7a9",
                      }}
                    >
                      ✓
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
