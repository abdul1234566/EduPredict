import { useEffect, useState } from "react";
import { getStats } from "../../api/dashboardApi";

export default function TeacherDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStats().then(res => setStats(res.data));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Teacher Dashboard</h1>

      {stats && (
        <>
          <p>Total Predictions: {stats.total_predictions}</p>
          <p>High Risk Students: {stats.high_risk}</p>
        </>
      )}
    </div>
  );
}