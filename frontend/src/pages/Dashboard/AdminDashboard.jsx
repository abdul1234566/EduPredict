import { useEffect, useState } from "react";
import { getStats, getPredictions, getTrends } from "../../api/dashboardApi";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const statsRes = await getStats();
      const predRes = await getPredictions();
      const trendRes = await getTrends();

      setStats(statsRes.data);
      setPredictions(predRes.data);
      setTrends(trendRes.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 30 }}>

      <h1>Admin Dashboard</h1>

      {/* STATS */}
      {stats && (
        <div>
          <h3>Stats</h3>
          <p>Total: {stats.total_predictions}</p>
          <p>High Risk: {stats.high_risk}</p>
          <p>Medium: {stats.medium_risk}</p>
          <p>Low: {stats.low_risk}</p>
        </div>
      )}

      {/* PREDICTIONS */}
      <h3>Recent Predictions</h3>
      <ul>
        {predictions.slice(0, 10).map((p, i) => (
          <li key={i}>
            {p.prediction} - {p.risk_level} - {p.risk_probability}%
          </li>
        ))}
      </ul>

      {/* TREND RAW */}
      <h3>Trend Data</h3>
      <pre>{JSON.stringify(trends, null, 2)}</pre>

    </div>
  );
}