export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div style={{
      padding: 20,
      margin: 20,
      border: "1px solid black"
    }}>
      <h3>Result</h3>

      <p><b>Prediction:</b> {result.prediction}</p>
      <p><b>Risk:</b> {result.risk_probability}%</p>
      <p><b>Level:</b> {result.risk_level}</p>
    </div>
  );
}