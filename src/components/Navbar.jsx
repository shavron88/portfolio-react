import { useEffect, useState } from "react";

const LINKS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "academy", label: "Academy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = "top";
      LINKS.slice(1).forEach(({ id }) => {
        const s = document.getElementById(id);
        if (s && s.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <a href="#top" className="brand">
          <span className="mark">FU</span>
          <span className="name">
            F. Umar<small>frontend · security</small>
          </span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>
            Let's Connect
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
