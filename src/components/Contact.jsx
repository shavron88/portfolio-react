import Reveal from "./Reveal";
import MagnetLink from "./MagnetLink";

const EMAIL = "shavron88@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/faryalumar88";
const GITHUB = "https://github.com/SHAVRON88";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-lead">
          <p className="section-num mono">contact</p>
          <h2>Have something worth building?</h2>
          <p>I'm happy to talk about small web projects, freelance-sized work, or just trade notes on security. Email is the fastest way to reach me.</p>
          <div className="contact-actions">
            <MagnetLink href={`mailto:${EMAIL}`} className="btn-primary">Email me</MagnetLink>
            <MagnetLink href={LINKEDIN} className="btn-ghost" target="_blank" rel="noopener noreferrer">LinkedIn</MagnetLink>
          </div>
        </Reveal>

        <Reveal className="contact-list">
          <div className="contact-item"><span className="k">email</span><a className="v" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
          <div className="contact-item"><span className="k">location</span><span className="v">Karachi, Pakistan</span></div>
          <div className="contact-item"><span className="k">github</span><a className="v" href={GITHUB} target="_blank" rel="noopener noreferrer">github.com/SHAVRON88</a></div>
          <div className="contact-item"><span className="k">linkedin</span><a className="v" href={LINKEDIN} target="_blank" rel="noopener noreferrer">faryalumar88</a></div>
        </Reveal>
      </div>
    </section>
  );
}
