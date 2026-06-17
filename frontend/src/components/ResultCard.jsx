export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div style={styles.empty}>
        No prediction yet
      </div>
    );
  }

  const color =
    result.prediction === "AT RISK"
      ? "#ef4444"
      : "#22c55e";

  return (
    <div style={{
      ...styles.card,
      borderLeft: `5px solid ${color}`
    }}>
      <h3>Prediction Result</h3>

      <p>
        <b>Status:</b>{" "}
        <span style={{ color }}>
          {result.prediction}
        </span>
      </p>

      <p><b>Risk:</b> {result.risk_probability}%</p>
      <p><b>Level:</b> {result.risk_level}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "#0b1220",
    color: "white"
  },
  empty: {
    padding: "20px",
    textAlign: "center",
    opacity: 0.6
  }
};