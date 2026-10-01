import useReveal from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
