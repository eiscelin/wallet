const education = [
  { title: "2 Year Education", desc: "Completed 2 years of education and developed knowledge, discipline, and practical learning experience." },
  { title: "Continuous Learning", desc: "Committed to improving skills and gaining more experience through practice and new opportunities." },
  { title: "Professional Growth", desc: "Focused on building a stronger career and developing valuable skills for future opportunities." },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="three-grid">
          {education.map((e) => (
            <div className="card mini-card reveal" key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
