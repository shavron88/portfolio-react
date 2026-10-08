import { useEffect, useState } from "react";
import { useInView, useTilt, prefersReducedMotion } from "../hooks";
import MagnetLink from "./MagnetLink";
import heroCut from "../assets/hero-cutout.png";

const ROLES = [
  "building responsive interfaces",
  "learning ethical hacking",
  "shipping small projects",
];

function useTyped(roles) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(roles[0]);
      return undefined;
    }
    let r = 0, c = 0, deleting = false, timer;
    const tick = () => {
      const t = roles[r];
      setText(t.slice(0, c));
      if (!deleting && c < t.length) { c++; timer = setTimeout(tick, 70); }
      else if (!deleting) { deleting = true; timer = setTimeout(tick, 1500); }
      else if (c > 0) { c--; timer = setTimeout(tick, 35); }
      else { deleting = false; r = (r + 1) % roles.length; timer = setTimeout(tick, 300); }
    };
    tick();
    return () => clearTimeout(timer);
  }, [roles]);
  return text;
}

function useCountUp(target, seen) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return undefined;
    let cur = 0;
    const iv = setInterval(() => {
      cur += 1;
      setN(cur);
      if (cur >= target) clearInterval(iv);
    }, 180);
    return () => clearInterval(iv);
  }, [seen, target]);
  return n;
}

export default function Hero() {
  const typed = useTyped(ROLES);
  const tiltRef = useTilt(9);
  const [badgeRef, badgeSeen] = useInView(0.4);
  const projects = useCountUp(4, badgeSeen);

  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <p className="kicker hero-fade d1">Hello, I'm</p>
          <h1 className="hero-fade d2">
            <span className="reveal-wipe"><span>Faryal Umar</span></span>
          </h1>
          <p className="typed hero-fade d3">
            <span className="tp">&gt;</span> <span>{typed}</span><span className="caret" />
          </p>
          <p className="hero-role hero-fade d3">
            A frontend developer from <span className="hl">Karachi</span>, currently building toward cybersecurity.
          </p>
          <p className="hero-desc hero-fade d4">
            Self-taught in React and Python, and spending equal time in Kali Linux learning how the things I build could be broken into.
          </p>
          <div className="hero-actions hero-fade d5">
            <MagnetLink href="#work" className="btn-primary">About Me</MagnetLink>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/faryalumar88" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://github.com/SHAVRON88" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.004 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="mailto:shavron88@gmail.com" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 6l8 7 8-7" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual hero-fade d3">
          <div className="hero-panel torn" ref={tiltRef}>
            <div className="wash" aria-hidden="true" />
            <div className="wash-2" aria-hidden="true" />
            <img className="hero-cut" src={heroCut} alt="Portrait cutout" />
          </div>
          <div className="stat-badge" ref={badgeRef}>
            <span className="num">{projects}</span>
            <span className="lbl">Live projects shipped</span>
          </div>
        </div>
      </div>
    </section>
  );
}
