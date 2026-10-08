import Reveal from "./Reveal";

const GROUPS = [
  { title: "Programming", color: "var(--navy)", tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Python"] },
  { title: "Cybersecurity", color: "var(--gold)", tags: ["Networking fundamentals", "Linux & Kali", "Vulnerability basics", "CTF challenges", "Nmap", "Wireshark", "VirusTotal"] },
  { title: "Tools", color: "#8A7C80", tags: ["Git & GitHub", "VS Code", "VirtualBox"] },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="section-num mono">skills</p>
          <h2>What I actually use</h2>
        </Reveal>
        <Reveal className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-col" key={g.title}>
              <h4><span className="sw" style={{ background: g.color }} />{g.title}</h4>
              <div className="skill-tags">
                {g.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
