import Reveal from "./Reveal";

const svg = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

const SERVICES = [
  {
    title: "Responsive websites",
    text: "Landing pages, portfolios and small business sites that load fast and hold up on every screen size.",
    icon: <svg {...svg}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  },
  {
    title: "Interface polish",
    text: "Clean layout, readable type and thoughtful motion that make a simple site feel considered.",
    icon: <svg {...svg}><path d="M12 3l2.4 5.2L20 9l-4 4 1 5.6-5-2.8-5 2.8 1-5.6-4-4 5.6-.8z" /></svg>,
  },
  {
    title: "Security-minded builds",
    text: "Safe defaults from the start: careful input handling, tidy dependencies and HTTPS-ready deployment.",
    icon: <svg {...svg}><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="section-num mono">services</p>
          <h2>What I can build for you</h2>
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <Reveal key={s.title} className="svc-card">
              <div className="svc-ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
