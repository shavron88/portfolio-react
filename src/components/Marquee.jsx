const ITEMS = [
  ["React", true], ["JavaScript"], ["Python", true], ["Linux & Kali"],
  ["Networking", true], ["CTF Challenges"], ["Git", true], ["Vulnerability Assessment"],
];

const Row = () => (
  <span>
    {ITEMS.map(([label, hi]) => (
      <span key={label} className={hi ? "hi" : undefined}>{label}</span>
    ))}
  </span>
);

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
