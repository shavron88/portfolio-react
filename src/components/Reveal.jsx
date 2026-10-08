import { useInView } from "../hooks";

/* fades/slides its children in once they scroll into view */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag ref={ref} className={`reveal ${seen ? "is-in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
