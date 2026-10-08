import Reveal from "./Reveal";

const CERTS = [
  { year: "2026", name: "Web Development Certification", issuer: "Sindh Board of Technical Education" },
  { year: "2026", name: "Web Development Certification", issuer: "Learning Resource Network" },
];

export default function Academy() {
  return (
    <section className="section" id="academy">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="section-num mono">academy</p>
          <h2>Formal check-ins along the way</h2>
        </Reveal>
        <Reveal className="cert-list">
          {CERTS.map((c) => (
            <div className="cert-row" key={c.issuer}>
              <span className="cert-year mono">{c.year}</span>
              <span className="cert-name">{c.name}</span>
              <span className="cert-issuer">{c.issuer}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
