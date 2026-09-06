export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Interested in working with me or have an opportunity to discuss?
            Feel free to contact me.
          </p>
        </div>
        <div className="contact-grid">
          <div className="card contact-info reveal">
            <a href="mailto:eds@gmail.com"><strong>Email</strong> eds@gmail.com</a>
            <a href="#"><strong>LinkedIn</strong> [YOUR LINKEDIN]</a>
            <a href="https://github.com/eiscelin"><strong>GitHub</strong> eiscelin</a>
            <a href="#"><strong>Location</strong> [YOUR LOCATION]</a>
          </div>
          <form className="card contact-form reveal" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
