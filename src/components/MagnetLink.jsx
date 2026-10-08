import { useMagnet } from "../hooks";

export default function MagnetLink({ className = "", children, ...rest }) {
  const ref = useMagnet();
  return (
    <a ref={ref} className={`btn ${className} magnet`} {...rest}>
      {children}
    </a>
  );
}
