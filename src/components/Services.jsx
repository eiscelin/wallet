const services = [
  { num: "01", title: "Coaching", desc: "Providing coaching, guidance, motivation, and support to help individuals improve their skills and reach their goals.", link: "#contact" },
  { num: "02", title: "Skill Guidance", desc: "Sharing practical knowledge, discipline, and personal development techniques based on experience.", link: "#contact" },
  { num: "03", title: "Personal Development", desc: "Helping encourage focus, discipline, confidence, and continuous improvement.", link: "#contact" },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">My Services</h2>
          <p className="section-description">
            Services and professional support I can provide.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="card service-card reveal" key={s.num}>
              <div className="service-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href={s.link} className="btn btn-outline" style={{ display: "inline-flex", padding: "8px 20px", fontSize: "0.85rem" }}>
                {s.title === "Coaching" ? "Contact Me" : s.title === "Skill Guidance" ? "Learn More" : "Get in Touch"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
