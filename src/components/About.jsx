import { useEffect, useState } from "react";
import { useInView } from "../hooks";
import Reveal from "./Reveal";
import aboutPhoto from "../assets/about.jpg";

const LINES = [
  <><span className="p">$</span> whoami</>,
  "f.umar",
  "\u00a0",
  <><span className="p">$</span> cat focus.txt</>,
  { c: true, text: "frontend development" },
  { c: true, text: "web security fundamentals" },
  "\u00a0",
  <><span className="p">$</span> status</>,
  <>open to small projects<span className="cursor2" /></>,
];

function Terminal() {
  const [ref, seen] = useInView(0.3);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!seen) return undefined;
    const timers = LINES.map((_, i) => setTimeout(() => setShown(i + 1), i * 220));
    return () => timers.forEach(clearTimeout);
  }, [seen]);

  return (
    <div className="term-panel">
      <div className="term-head"><span className="r" /><span className="y" /><span className="g" /></div>
      <div className="term-body" ref={ref}>
        {LINES.map((line, i) => {
          const green = line && line.c;
          return (
            <div key={i} className={`tline${green ? " c" : ""}${i < shown ? " show" : ""}`}>
              {green ? line.text : line}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="about-photo torn">
              <img src={aboutPhoto} alt="Portrait in a navy blazer" />
            </div>
            <Terminal />
          </Reveal>

          <Reveal className="about-copy">
            <p className="section-num mono">about</p>
            <h2 className="lead">I'm a frontend developer — let's build something real.</h2>
            <p>
              I'm a developer in Karachi with a real habit of shipping small projects instead of just reading about them. I'm most comfortable in <strong>React, JavaScript and Python</strong>, and I use every new build as a reason to learn something I didn't know the last time.
            </p>
            <p>
              On the security side, I spend time in <strong>Kali Linux</strong>, working through CTF challenges and getting familiar with tools like Nmap, Wireshark and VirusTotal — less about credentials right now, more about understanding how the systems I build could be broken, so I can build them better.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
