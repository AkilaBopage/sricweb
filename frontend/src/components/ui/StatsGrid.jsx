export default function StatsGrid({ items, className = "", columnClassName = "col-md-3" }) {
  return (
    <div className={`row text-center ${className}`.trim()}>
      {items.map((item, index) => (
        <div className={item.columnClassName || columnClassName} key={index}>
          <h3 className={item.valueClassName || "fw-bold"}>{item.value}</h3>
          <small>{item.label}</small>
        </div>
      ))}
    </div>
  );
}
