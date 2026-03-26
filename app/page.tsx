export default function Home() {
  const services = [
    {
      title: "Drywall Taping & Mudding",
      desc: "Smooth finishes for new builds, repairs, patchwork, and renovation projects.",
      icon: "🧱",
    },
    {
      title: "Caulking",
      desc: "Clean sealing for windows, bathrooms, kitchens, doors, and exterior joints.",
      icon: "🔧",
    },
    {
      title: "Cleaning Services",
      desc: "Move-out, deep cleaning, residential, and commercial cleaning done right.",
      icon: "✨",
    },
    {
      title: "Landscaping",
      desc: "Yard cleanups, lawn care, trimming, and exterior property improvement.",
      icon: "🌿",
    },
    {
      title: "Snow Removal",
      desc: "Fast seasonal snow clearing for homes, sidewalks, driveways, and small businesses.",
      icon: "❄️",
    },
    {
      title: "General Exterior Help",
      desc: "Reliable labor support for property maintenance and finishing work.",
      icon: "🏠",
    },
  ];

  const projects = [
    "Bathroom recaulking",
    "Drywall patch & smooth finish",
    "Move-out deep cleaning",
    "Exterior property cleanup",
  ];

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, #1d4ed8 0%, #0b1220 35%, #050816 100%)",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily:
          "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 20px 80px",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            padding: "10px 0 30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #2563eb 45%, #0f172a 100%)",
                display: "grid",
                placeItems: "center",
                fontWeight: 800,
                fontSize: "20px",
                boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
              }}
            >
              DRC
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "18px" }}>
                Dreams R Construction
              </div>
              <div style={{ color: "#bfdbfe", fontSize: "13px" }}>
                Calgary • Residential & Commercial
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/16474518582?text=Hi%20Dreams%20R%20Construction%2C%20I%20want%20a%20free%20estimate."
              style={{
                textDecoration: "none",
                background: "#25D366",
                color: "white",
                padding: "12px 18px",
                borderRadius: "999px",
                fontWeight: 700,
                boxShadow: "0 10px 25px rgba(37,211,102,0.28)",
              }}
            >
              WhatsApp
            </a>
            <a
              href="#services"
              style={{
                textDecoration: "none",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                padding: "12px 18px",
                borderRadius: "999px",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              Our Services
            </a>
          </div>
        </nav>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            alignItems: "center",
            padding: "30px 0 50px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(96,165,250,0.16)",
                color: "#bfdbfe",
                fontSize: "13px",
                fontWeight: 700,
                border: "1px solid rgba(96,165,250,0.25)",
                marginBottom: "18px",
              }}
            >
              Premium Finishing • Fast Quotes • Reliable Service
            </div>

            <h1
              style={{
                fontSize: "clamp(38px, 6vw, 72px)",
                lineHeight: 1,
                margin: "0 0 18px",
                fontWeight: 900,
                letterSpacing: "-2px",
              }}
            >
              Premium work.
              <br />
              Clean finish.
              <br />
              <span style={{ color: "#60a5fa" }}>Built to impress.</span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#dbeafe",
                maxWidth: "640px",
                margin: "0 0 28px",
              }}
            >
              Dreams R Construction delivers quality drywall taping, caulking,
              cleaning, landscaping, and seasonal exterior work in Calgary.
              Clean details, professional communication, and free estimates.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "26px",
              }}
            >
              <a
                href="https://wa.me/16474518582?text=Hi%20Dreams%20R%20Construction%2C%20I%20need%20a%20free%20estimate."
                style={{
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #2563eb, #60a5fa)",
                  color: "white",
                  padding: "15px 22px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  boxShadow: "0 16px 35px rgba(37,99,235,0.35)",
                }}
              >
                Get Free Estimate
              </a>

              <a
                href="#quote"
                style={{
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.06)",
                  color: "white",
                  padding: "15px 22px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Request Quote
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {["Calgary", "Residential", "Commercial", "Free Estimates"].map(
                (item) => (
                  <span
                    key={item}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#e5f0ff",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "28px",
                padding: "28px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  borderRadius: "24px",
                  padding: "26px",
                  minHeight: "360px",
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(15,23,42,0.9))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                      color: "#93c5fd",
                      fontWeight: 800,
                      marginBottom: "16px",
                    }}
                  >
                    Featured Services
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "12px",
                    }}
                  >
                    {[
                      "Drywall Taping",
                      "Caulking",
                      "Cleaning",
                      "Landscaping",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          borderRadius: "16px",
                          padding: "14px 16px",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontWeight: 700,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "24px",
                    background: "rgba(96,165,250,0.14)",
                    borderRadius: "18px",
                    padding: "18px",
                    border: "1px solid rgba(96,165,250,0.2)",
                  }}
                >
                  <div style={{ fontSize: "14px", color: "#bfdbfe" }}>
                    Need a fast quote?
                  </div>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: 900,
                      marginTop: "4px",
                    }}
                  >
                    Message us today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "10px",
            marginBottom: "70px",
          }}
        >
          {[
            ["Fast Response", "Quick communication and estimate support."],
            ["Professional Finish", "Clean, detail-focused workmanship."],
            ["Flexible Jobs", "Small repairs or bigger property work."],
            ["Local Service", "Serving Calgary and surrounding area."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "22px",
                padding: "22px",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "18px", marginBottom: "8px" }}>
                {title}
              </div>
              <div style={{ color: "#cbd5e1", lineHeight: 1.6 }}>{text}</div>
            </div>
          ))}
        </section>

        <section id="services" style={{ marginBottom: "80px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "end",
              marginBottom: "24px",
            }}
          >
            <div>
              <div
                style={{
                  color: "#93c5fd",
                  fontSize: "13px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "1.4px",
                  marginBottom: "10px",
                }}
              >
                Our Services
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 46px)",
                  margin: 0,
                  fontWeight: 900,
                }}
              >
                Built for homes and businesses
              </h2>
            </div>
            <p
              style={{
                maxWidth: "520px",
                color: "#cbd5e1",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              We focus on quality work, clean results, and dependable service across
              interior finishing and property care.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "14px" }}>
                  {service.icon}
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "21px",
                    fontWeight: 800,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.7 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            marginBottom: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "28px",
              padding: "28px",
            }}
          >
            <div
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                marginBottom: "10px",
              }}
            >
              Our Work
            </div>
            <h2 style={{ marginTop: 0, fontSize: "34px", fontWeight: 900 }}>
              Clean projects. Strong first impression.
            </h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
              Add your real project photos later for an even better premium look.
              For now, use these project highlights as placeholders.
            </p>

            <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
              {projects.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(37,99,235,0.18), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "28px",
              padding: "28px",
            }}
          >
            <div
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                marginBottom: "10px",
              }}
            >
              Why Choose Us
            </div>
            <h2 style={{ marginTop: 0, fontSize: "34px", fontWeight: 900 }}>
              Quality service with a premium feel
            </h2>
            <ul style={{ paddingLeft: "20px", color: "#dbeafe", lineHeight: 1.9 }}>
              <li>Free estimates</li>
              <li>Clean and professional finish</li>
              <li>Residential and commercial support</li>
              <li>Reliable communication</li>
              <li>Local Calgary service</li>
            </ul>
          </div>
        </section>

        <section
          id="quote"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(255,255,255,0.05))",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "30px",
            padding: "34px",
            marginBottom: "70px",
            boxShadow: "0 25px 55px rgba(0,0,0,0.22)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "#93c5fd",
                  fontSize: "13px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "1.4px",
                  marginBottom: "10px",
                }}
              >
                Free Estimate
              </div>
              <h2
                style={{
                  margin: "0 0 12px",
                  fontSize: "clamp(30px, 4vw, 46px)",
                  fontWeight: 900,
                }}
              >
                Ready to start your project?
              </h2>
              <p style={{ color: "#dbeafe", lineHeight: 1.7, margin: 0 }}>
                Contact Dreams R Construction today for a fast quote and dependable
                service.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              <a
                href="https://wa.me/16474518582?text=Hi%20Dreams%20R%20Construction%2C%20I%20want%20a%20quote."
                style={{
                  textDecoration: "none",
                  background: "#25D366",
                  color: "white",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  fontWeight: 900,
                  textAlign: "center",
                  boxShadow: "0 14px 30px rgba(37,211,102,0.28)",
                }}
              >
                💬 Request on WhatsApp
              </a>

              <a
                href="tel:+16474518582"
                style={{
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.07)",
                  color: "white",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  fontWeight: 800,
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                📞 Call 647-451-8582
              </a>
            </div>
          </div>
        </section>

        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "26px",
            display: "flex",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
            color: "#cbd5e1",
          }}
        >
          <div>
            <div style={{ fontWeight: 800, color: "white" }}>
              Dreams R Construction
            </div>
            <div>Calgary, Alberta</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div>Residential & Commercial</div>
            <div>Free Estimates Available</div>
          </div>
        </footer>
      </section>

      <a
        href="https://wa.me/16474518582?text=Hi%20Dreams%20R%20Construction%2C%20I%20want%20a%20free%20estimate."
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          background: "#25D366",
          color: "white",
          textDecoration: "none",
          padding: "15px 18px",
          borderRadius: "999px",
          fontWeight: 900,
          boxShadow: "0 18px 30px rgba(37,211,102,0.35)",
          zIndex: 1000,
        }}
      >
        💬 WhatsApp
      </a>
    </main>
  );
}
