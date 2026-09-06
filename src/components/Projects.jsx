const projects = [
  {
    icon: "🏫",
    title: "School Project",
    desc: "A project completed as part of my school experience and learning journey.",
    tags: ["Education", "Project", "Learning"],
  },
  {
    icon: "🥋",
    title: "Karate Development",
    desc: "Personal training and skill development focused on discipline, strength, focus, and continuous improvement.",
    tags: ["Karate", "Discipline"],
  },
  {
    icon: "🚀",
    title: "Future Project",
    desc: "This section can be updated with another professional, personal, or client project.",
    tags: ["Coming Soon", "Portfolio"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projects I've Worked On</h2>
          <p className="section-description">
            Selected projects and activities from my experience.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="card project-card reveal" key={p.title}>
              <div className="project-image">{p.icon}</div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
