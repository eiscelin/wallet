export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">A little about myself.</h2>
          <p className="section-description">
            Get to know my background, personality, and professional journey.
          </p>
        </div>

        <div className="about-grid">
          <div className="card about-text reveal">
            <h3>Hello, I'm Eis.</h3>
            <p>
              I am a hardworking individual with a strong interest in personal
              growth, professional development, and continuous learning.
            </p>
            <p>
              My personality can be described simply as <strong>Astig</strong> —
              confident, determined, and always ready to face new challenges.
              I believe that dedication, discipline, and consistency are
              important for achieving meaningful results.
            </p>
            <p>
              I am currently looking for opportunities where I can apply my
              skills, gain experience, and continue improving professionally.
            </p>
          </div>

          <div className="card reveal">
            <div className="info-list">
              <div className="info-item"><span>Name</span><span>Eis</span></div>
              <div className="info-item"><span>Profession</span><span>Labor</span></div>
              <div className="info-item"><span>Location</span><span>[YOUR LOCATION]</span></div>
              <div className="info-item"><span>Email</span><span>eds@gmail.com</span></div>
              <div className="info-item"><span>Status</span><span>Available</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
