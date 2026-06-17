import Navbar from "../../components/Navbar";
import PredictForm from "../../components/PredictForm";
import ResultCard from "../../components/ResultCard";
import { getPredictions } from "../../api/dashboardApi";
import { useEffect, useState } from "react";

export default function TeacherDashboard() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await getPredictions();
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "white" }}>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1 style={{ marginBottom: 20 }}>Teacher Dashboard</h1>

        {/* PREDICTION SECTION */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          <div style={{
            background: "#1e293b",
            padding: 20,
            borderRadius: 10
          }}>
            <PredictForm setResult={setResult} />
          </div>

          <div style={{
            background: "#1e293b",
            padding: 20,
            borderRadius: 10
          }}>
            <ResultCard result={result} />
          </div>
        </div>

        {/* HISTORY TABLE */}
        <div style={{
          overflowX: "auto",
          marginTop: 30,
          background: "#1e293b",
          padding: 20,
          borderRadius: 10
        }}>
          <h2 style={{ marginBottom: 15 }}>Prediction History</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <table width="100%" style={{ color: "white" }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>ID</th>
                  <th>Prediction</th>
                  <th>Risk</th>
                  <th>Probability</th>
                </tr>
              </thead>

              <tbody>
                {history.map((h) => (
                  <tr key={h.id}>
                    <td>{h.id}</td>
                    <td>{h.prediction}</td>
                    <td>{h.risk_level}</td>
                    <td>{h.risk_probability}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}