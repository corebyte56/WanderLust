import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/Banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      {/* Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "3rem 1.5rem", gap: "1.25rem" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.15, textShadow: "0 2px 12px rgba(0,0,0,0.4)", margin: 0 }}>
          Discover Your <br /> Next Adventure
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", maxWidth: "600px", textShadow: "0 1px 6px rgba(0,0,0,0.4)", margin: 0 }}>
          Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginTop: "0.5rem" }}>
          <button style={{ backgroundColor: "#06b6d4", color: "white", padding: "0.75rem 1.75rem", border: "none", cursor: "pointer", fontWeight: 600, letterSpacing: "0.05em", fontSize: "0.9rem" }}>
            EXPLORE NOW →
          </button>
          <button style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "white", padding: "0.75rem 1.75rem", border: "1px solid rgba(255,255,255,0.5)", cursor: "pointer", fontWeight: 600, letterSpacing: "0.05em", fontSize: "0.9rem", backdropFilter: "blur(4px)" }}>
            VIEW DESTINATION
          </button>
        </div>
      </div>

      {/* Search Bar — Desktop */}
      <div className="hidden md:flex" style={{ backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", width: "100%", alignItems: "stretch" }}>
        {[
          { label: "Location", sub: "Address, City or Zip" },
          { label: "Date/Duration", sub: "Anytime/3 Days" },
          { label: "Budget", sub: "$0-$3000" },
          { label: "People", sub: "5-10" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{ padding: "1rem 1.25rem" }}>
              <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 600 }}>{item.label}</p>
              <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.8 }}>{item.sub}</p>
            </div>
            {i < 3 && <Separator variant="tertiary" orientation="vertical" />}
          </div>
        ))}
        <button style={{ backgroundColor: "#06b6d4", color: "white", padding: "1rem 2rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.95rem", whiteSpace: "nowrap" }}>
          Search
        </button>
      </div>

      {/* Search Bar — Mobile */}
      <div className="md:hidden" style={{ backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", width: "100%", padding: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
          {[
            { label: "Location", sub: "Address, City or Zip" },
            { label: "Date/Duration", sub: "Anytime/3 Days" },
            { label: "Budget", sub: "$0-$3000" },
            { label: "People", sub: "5-10" },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "0.75rem" }}>
              <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 600 }}>{item.label}</p>
              <p style={{ margin: 0, fontSize: "0.7rem", opacity: 0.8 }}>{item.sub}</p>
            </div>
          ))}
        </div>
        <button style={{ backgroundColor: "#06b6d4", color: "white", width: "100%", padding: "0.85rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.95rem", borderRadius: "6px" }}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Banner;