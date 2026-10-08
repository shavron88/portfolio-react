import { useEffect, useRef } from "react";
import { isFinePointer } from "../hooks";

/* scroll progress bar, cursor glow, side "to top" rail and the background grid */
export default function Effects() {
  const bar = useRef(null);
  const glow = useRef(null);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (bar.current) bar.current.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    document.addEventListener("scroll", update, { passive: true });
    update();

    const el = glow.current;
    const move = (e) => {
      el.classList.add("on");
      el.style.transform = `translate(${e.clientX - 230}px,${e.clientY - 230}px)`;
    };
    const leave = () => el.classList.remove("on");
    if (isFinePointer() && el) {
      document.addEventListener("mousemove", move, { passive: true });
      document.addEventListener("mouseleave", leave);
    }
    return () => {
      document.removeEventListener("scroll", update);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div className="progress-bar" ref={bar} />
      <div className="cursor-glow" ref={glow} />
      <div className="grid-field" aria-hidden="true" />
      <div className="side-rail">
        <a href="#top">to top</a>
        <span className="stem" />
      </div>
    </>
  );
}
