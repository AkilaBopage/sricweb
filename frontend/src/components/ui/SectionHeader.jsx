export default function SectionHeader({ eyebrow, title, subtitle, className = "" }) {
  return (
    <div className={`text-center mb-5 ${className}`.trim()}>
      {eyebrow && <span className="text-primary fw-bold">{eyebrow}</span>}
      {title && <h2 className="display-5 fw-bold">{title}</h2>}
      {subtitle && (
        <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "800px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
