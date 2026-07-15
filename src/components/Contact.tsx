import './styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-heading">
          Let's work<br />together.
        </h2>

        <div className="contact-email-wrap">
          <a
            className="contact-email"
            href="mailto:chineswarali@gmail.com"
          >
            chineswarali@gmail.com →
          </a>
        </div>

        <div className="contact-divider" />

        <div className="contact-footer">
          <div className="contact-socials">
            <a
              className="contact-social-link"
              href="https://github.com/swaralichine"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="contact-social-link"
              href="https://www.linkedin.com/in/swaralichine"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <span className="contact-copy">SC © 2026</span>

          <a
            className="contact-url"
            href="https://www.linkedin.com/in/swaralichine"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/swaralichine
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
