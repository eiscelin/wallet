const items = [
  {
    date: "Experience",
    title: "Tumaya",
    subtitle: "Professional Experience",
    desc: "Gained practical experience, developed discipline, and learned the importance of responsibility and completing assigned tasks.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">My Experience</h2>
          <p className="section-description">
            A summary of my professional and practical background.
          </p>
        </div>
        <div className="timeline">
          {items.map((item) => (
            <div className="timeline-item reveal" key={item.title}>
              <div className="timeline-dot"></div>
              <div className="card timeline-card">
                <div className="timeline-date">{item.date}</div>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
