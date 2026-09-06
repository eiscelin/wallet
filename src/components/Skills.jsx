const skills = [
  { icon: "🥋", title: "Karate", desc: "Discipline, focus, physical conditioning, and continuous training." },
  { icon: "💪", title: "Hardworking", desc: "Dedicated to completing tasks and consistently giving my best." },
  { icon: "⚡", title: "Adaptability", desc: "Ready to learn new skills and adjust to new environments." },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Skills &amp; Strengths</h2>
          <p className="section-description">
            A combination of practical skills, discipline, and a willingness
            to learn and improve.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="card skill-card reveal" key={s.title}>
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
