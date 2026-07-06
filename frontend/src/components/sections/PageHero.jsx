export default function PageHero({
  title,
  subtitle,
  eyebrow,
  children,
  className = "",
  containerClassName = "container",
  contentClassName = "",
  titleClassName = "display-3 fw-bold",
  textAlignClassName = "text-center",
  style = {},
}) {
  return (
    <section
      className={`text-white d-flex align-items-center ${className}`.trim()}
      style={{ minHeight: "80vh", ...style }}
    >
      <div className={containerClassName}>
        <div className={contentClassName || textAlignClassName}>
          {eyebrow && <div className="mb-3">{eyebrow}</div>}
          {title && <h1 className={titleClassName}>{title}</h1>}
          {subtitle && (
            <p className="lead mt-4 mx-auto" style={{ maxWidth: "800px" }}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
