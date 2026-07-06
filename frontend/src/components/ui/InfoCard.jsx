export default function InfoCard({
  title,
  description,
  image,
  alt,
  children,
  className = "",
  imageClassName = "",
  imageStyle = {},
  bodyClassName = "",
  titleClassName = "",
}) {
  return (
    <div className={`card border-0 shadow h-100 ${className}`.trim()}>
      {image && (
        <img
          src={image}
          className={`card-img-top ${imageClassName}`.trim()}
          style={imageStyle}
          alt={alt || title || ""}
        />
      )}

      <div className={`card-body ${bodyClassName}`.trim()}>
        {children}
        {title && <h4 className={titleClassName}>{title}</h4>}
        {description && <p className="text-muted">{description}</p>}
      </div>
    </div>
  );
}
