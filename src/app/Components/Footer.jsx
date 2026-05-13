import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111", color: "#fff", padding: "3rem 0 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Top Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", paddingBottom: "2.5rem" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0 0 0.5rem", color: "#fff" }}>
              Wanderlast
            </h1>
            <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
              Your gateway to extraordinary travel experiences around the world.
            </p>

            {/* Newsletter */}
            <div style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", color: "#fff", marginBottom: "0.4rem" }}>
                NEWSLETTER
              </p>
              <p style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "0.75rem" }}>
                Subscribe for exclusive travel deals and inspiration.
              </p>
              <div style={{ display: "flex", alignItems: "center", backgroundColor: "#222", border: "1px solid #333", overflow: "hidden" }}>
                <input
                  type="email"
                  placeholder="Enter email"
                  style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", padding: "0.65rem 1rem", fontSize: "0.9rem" }}
                />
                <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "0.65rem 1rem", fontSize: "1.1rem" }}>
                  ↗
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", color: "#fff", marginBottom: "1rem" }}>
              QUICK LINKS
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {["Home", "Destinations", "My Bookings", "My Profile"].map((item) => (
                <Link key={item} href="/" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.9rem" }}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", color: "#fff", marginBottom: "1rem" }}>
              SUPPORT
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {["Help Center", "Terms of Service", "Privacy Policy"].map((item) => (
                <Link key={item} href="/" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.9rem" }}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", color: "#fff", marginBottom: "1rem" }}>
              CONTACT US
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0 }}>786 901 1622</p>
              <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0 }}>info@wandarland.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid #333", padding: "1.25rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#666", fontSize: "0.85rem", margin: 0 }}>
            © 2026 Wanderlust. All rights reserved.
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {/* X (Twitter) */}
            <a href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: "1.1rem" }}>
              𝕏
            </a>
            {/* LinkedIn */}
            <a href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: "1.1rem" }}>
              in
            </a>
            {/* Instagram */}
            <a href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: "1.1rem" }}>
              ◎
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;