import { useEffect, useRef, useState } from "react";

export const isFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover:hover) and (pointer:fine)").matches;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* true once the element has scrolled into view */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

/* 3D tilt that follows the pointer */
export function useTilt(strength = 6) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !isFinePointer()) return undefined;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${px * strength}deg) rotateX(${-py * strength}deg)`;
    };
    const leave = () => {
      el.style.transform = "rotateY(0deg) rotateX(0deg)";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);
  return ref;
}

/* button that leans toward the pointer */
export function useMagnet() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !isFinePointer()) return undefined;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - r.left - r.width / 2) * 0.22;
      const my = (e.clientY - r.top - r.height / 2) * 0.32;
      el.style.transform = `translate(${mx}px,${my}px)`;
    };
    const leave = () => {
      el.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return ref;
}
