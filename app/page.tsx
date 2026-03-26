export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      background: "#0a0a0a",
      color: "white",
      padding: "20px"
    }}>
      
      <h1 style={{fontSize: "40px", color: "#1877f2"}}>
        Dreams R Construction
      </h1>

      <p>Calgary • Residential & Commercial</p>

      <hr />

      <h2>Our Services</h2>

      <ul>
        <li>Drywall Taping & Mudding</li>
        <li>Caulking (Windows & Bathrooms)</li>
        <li>Cleaning Services</li>
        <li>Landscaping</li>
        <li>Snow Removal</li>
      </ul>

      <hr />

      <h2>Get a Free Estimate</h2>

      <a 
        href="https://wa.me/16474518582"
        style={{
          background: "#25D366",
          padding: "15px 20px",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none",
          display: "inline-block",
          marginTop: "10px"
        }}
      >
        💬 Chat on WhatsApp
      </a>

    </main>
  );
}
