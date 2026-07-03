export default function PreviousCases() {
  const cases = [
    "Vehicle supply for municipal councils",
    "Fleet modernization partnerships",
    "Transport feasibility studies"
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Previous Cases</h1>

      {cases.map((c, i) => (
        <p key={i}>📌 {c}</p>
      ))}
    </div>
  );
}