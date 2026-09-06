export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="badge">Available for Opportunities</div>
            <h1>
              Hi, I'm <span className="gradient-text">Eis</span>
            </h1>
            <div className="hero-title">Labor</div>
            <p className="hero-description">
              Astig, hardworking, and motivated. I am passionate about developing
              my skills, taking on new challenges, and delivering my best work
              in every opportunity.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="profile-circle">E</div>
          </div>
        </div>
      </div>
    </section>
  );
}
