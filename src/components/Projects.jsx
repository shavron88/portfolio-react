import Reveal from "./Reveal";
import { useTilt } from "../hooks";
import walid from "../assets/walid.png";
import kframe from "../assets/kframe.png";

const FEATURED = [
  {
    title: "Waleed Traders",
    image: walid,
    alt: "Waleed Traders landing page showing Solar, Real Estate, ElectroFix and Supply Chain sections",
    tags: ["React", "UI Design", "Deployment"],
    text: "A landing hub for a multi-division business — solar, real estate, electronics repair and supply chain — built as a single clean entry point into four very different services, each with its own color identity but one consistent layout language.",
    url: "https://waleed-1tse.vercel.app",
  },
  {
    title: "K-Frame",
    image: kframe,
    alt: "K-Frame welcome screen with an open booth button",
    tags: ["React", "Framer Motion", "Vite"],
    text: "A lightweight, photo-booth-style web app with a clean welcome flow and a soft, friendly visual identity — built to be fast, responsive, and simple enough that the interface never gets in the way of the moment.",
    url: "https://k-frame.vercel.app",
  },
];

function Media({ src, alt }) {
  const ref = useTilt(4);
  return (
    <div className="project-media tilt" ref={ref}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="section-num mono">selected work</p>
          <h2>A few things I've shipped</h2>
        </Reveal>

        {FEATURED.map((p, i) => (
          <Reveal key={p.title} className={`project${i % 2 ? " flip" : ""}`}>
            <Media src={p.image} alt={p.alt} />
            <div className="project-copy">
              <div className="project-tag-row">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="project-links">
                <a href={p.url} target="_blank" rel="noopener noreferrer">View live site</a>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal className="minor-projects">
          <div className="minor-card">
            <h4>Audiora</h4>
            <p>A web app exploring an interactive audio-driven interface, built with a modern React frontend as a study in motion and sound-reactive design.</p>
            <a href="https://audiora-2.vercel.app" target="_blank" rel="noopener noreferrer">audiora-2.vercel.app</a>
          </div>
          <div className="minor-card">
            <h4>Sentinel X</h4>
            <p>A concept for an AI-assisted security monitoring system — exploring how computer vision and Python could plug into existing setups for real-time threat detection.</p>
            <span className="mono" style={{ color: "var(--ink-faint)", fontSize: "12.5px" }}>Concept project — Python, computer vision</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
