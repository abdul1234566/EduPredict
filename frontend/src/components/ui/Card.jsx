export default function Card({ title, value, color }) {
  return (
    <div style={{
      padding: 20,
      borderRadius: 12,
      background: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      minWidth: 160
    }}>
      <p style={{ color: "#666" }}>{title}</p>
      <h2 style={{ color: color || "#111" }}>{value}</h2>
    </div>
  );
}