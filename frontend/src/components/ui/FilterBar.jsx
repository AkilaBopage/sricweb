export default function FilterBar({ options, activeValue, onChange }) {
  return (
    <div className="d-inline-flex gap-2 p-2 rounded-4 shadow-sm" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`btn px-4 py-2 rounded-3 fw-semibold ${activeValue === option.value ? "btn-dark" : "btn-light border"}`}
          style={{ transition: "0.3s" }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
