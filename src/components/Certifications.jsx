const certifications = [
  { icon: "🎓", title: "Diploma", desc: "Completed educational requirements and earned a diploma." },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-description">Academic and professional achievements.</p>
        </div>
        <div className="three-grid">
          {certifications.map((c) => (
            <div className="card mini-card reveal" key={c.title}>
              <div className="skill-icon" style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
