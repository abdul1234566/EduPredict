// import { useEffect, useState } from "react";
// import { getStats, getPredictions, getTrends } from "../../api/dashboardApi";
// import MainLayout from "../../layouts/MainLayout";

// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// export default function AdminDashboard() {
//   const [stats, setStats] = useState(null);
//   const [predictions, setPredictions] = useState([]);
//   const [trends, setTrends] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [screen, setScreen] = useState("desktop");

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(() => {
//     const updateScreen = () => {
//       const width = window.innerWidth;

//       if (width < 768) setScreen("mobile");
//       else if (width < 1024) setScreen("tablet");
//       else setScreen("desktop");
//     };

//     updateScreen();
//     window.addEventListener("resize", updateScreen);

//     return () => window.removeEventListener("resize", updateScreen);
//   }, []);

//   const loadData = async () => {
//     try {
//       const s = await getStats();
//       const p = await getPredictions();
//       const t = await getTrends();

//       setStats(s.data);
//       setPredictions(p.data);
//       setTrends(t.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <MainLayout>
//         <div style={styles.loading}>Loading analytics dashboard...</div>
//       </MainLayout>
//     );
//   }

//   const chartData = {
//     labels: trends.map(x => x.date),
//     datasets: [
//       {
//         label: "At Risk",
//         data: trends.map(x => x.at_risk),
//         borderColor: "#ef4444"
//       },
//       {
//         label: "Safe",
//         data: trends.map(x => x.safe),
//         borderColor: "#22c55e"
//       }
//     ]
//   };

//   return (
//     <MainLayout>
//       <h1 style={styles.title}>Admin Analytics Dashboard</h1>

//       {/* KPI CARDS */}
//       <div
//         style={{
//           ...styles.grid,
//           gridTemplateColumns:
//             screen === "mobile"
//               ? "1fr"
//               : screen === "tablet"
//               ? "repeat(2, 1fr)"
//               : "repeat(4, 1fr)"
//         }}
//       >
//         <Card title="Total" value={stats?.total_predictions} />
//         <Card title="High Risk" value={stats?.high_risk} danger />
//         <Card title="Medium Risk" value={stats?.medium_risk} warning />
//         <Card title="Low Risk" value={stats?.low_risk} success />
//       </div>

//       {/* CHART */}
//       <div style={styles.card}>
//         <h3>Risk Trends</h3>
//         <Line data={chartData} />
//       </div>

//       {/* TABLE */}
//       <div style={styles.card}>
//         <h3>Prediction History</h3>

//         <div style={{ overflowX: "auto" }}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>Prediction</th>
//                 <th>Risk</th>
//                 <th>Probability</th>
//                 <th>Date</th>
//               </tr>
//             </thead>

//             <tbody>
//               {predictions.map((p, i) => (
//                 <tr key={i}>
//                   <td>{p.prediction}</td>
//                   <td>{p.risk_level}</td>
//                   <td>{p.risk_probability}%</td>
//                   <td>{p.created_at?.split("T")[0]}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }

// function Card({ title, value, danger, warning, success }) {
//   return (
//     <div
//       style={{
//         ...styles.card,
//         borderLeft: `4px solid ${
//           danger
//             ? "#ef4444"
//             : warning
//             ? "#f59e0b"
//             : success
//             ? "#22c55e"
//             : "#4f46e5"
//         }`
//       }}
//     >
//       <h4>{title}</h4>
//       <h2>{value}</h2>
//     </div>
//   );
// }

// const styles = {
//   title: {
//     marginBottom: "20px"
//   },

//   grid: {
//     display: "grid",
//     gap: "15px",
//     marginBottom: "20px"
//   },

//   card: {
//     background: "#111a2e",
//     padding: "15px",
//     borderRadius: "12px",
//     marginBottom: "20px",
//     border: "1px solid #1f2a44",
//     color: "white",
//     overflowX: "auto"
//   },

//   table: {
//     width: "100%",
//     color: "white",
//     minWidth: "600px"
//   },

//   loading: {
//     padding: "40px",
//     textAlign: "center"
//   }
// };




import { useEffect, useState } from "react";
import { getStats, getPredictions, getTrends } from "../../api/dashboardApi";
import MainLayout from "../../layouts/MainLayout";
// import "../../style/AdminDash.css";
import "../style/admindash.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const s = await getStats();
      const p = await getPredictions();
      const t = await getTrends();

      setStats(s.data);
      setPredictions(p.data);
      setTrends(t.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="dashboard-loading">
          Loading analytics dashboard...
        </div>
      </MainLayout>
    );
  }

  const chartData = {
    labels: trends.map((x) => x.date),
    datasets: [
      {
        label: "At Risk",
        data: trends.map((x) => x.at_risk),
        borderColor: "#ef4444",
        backgroundColor: "#ef444420",
        tension: 0.4
      },
      {
        label: "Safe",
        data: trends.map((x) => x.safe),
        borderColor: "#14b8a6",
        backgroundColor: "#14b8a620",
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: "#e2e8f0"
        }
      }
    },

    scales: {
      x: {
        ticks: {
          color: "#94a3b8"
        },
        grid: {
          color: "#1e293b"
        }
      },
      y: {
        ticks: {
          color: "#94a3b8"
        },
        grid: {
          color: "#1e293b"
        }
      }
    }
  };

  return (
    <MainLayout>
      <div className="dashboard-container">
        <h1 className="dashboard-title">
          📊 Admin Analytics Dashboard
        </h1>

        {/* KPI CARDS */}
        <div className="dashboard-grid">
          <Card
            title="Total Predictions"
            value={stats?.total_predictions || 0}
          />

          <Card
            title="High Risk"
            value={stats?.high_risk || 0}
            danger
          />

          <Card
            title="Medium Risk"
            value={stats?.medium_risk || 0}
            warning
          />

          <Card
            title="Low Risk"
            value={stats?.low_risk || 0}
            success
          />
        </div>

        {/* CHART */}
        <div className="dashboard-card">
          <h3>📈 Risk Trends</h3>

          <div className="chart-container">
            <Line
              data={chartData}
              options={chartOptions}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="dashboard-card">
          <h3>📋 Prediction History</h3>

          <div className="table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Prediction</th>
                  <th>Risk Level</th>
                  <th>Probability</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {predictions.length > 0 ? (
                  predictions.map((p, i) => (
                    <tr key={i}>
                      <td>{p.prediction}</td>

                      <td>
                        <span
                          className={
                            p.risk_level?.toLowerCase() === "high"
                              ? "risk-high"
                              : p.risk_level?.toLowerCase() === "medium"
                              ? "risk-medium"
                              : "risk-low"
                          }
                        >
                          {p.risk_level}
                        </span>
                      </td>

                      <td>{p.risk_probability}%</td>

                      <td>
                        {p.created_at?.split("T")[0]}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      style={{
                        textAlign: "center",
                        padding: "20px"
                      }}
                    >
                      No predictions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function Card({
  title,
  value,
  danger,
  warning,
  success
}) {
  const className = danger
    ? "kpi-card kpi-danger"
    : warning
    ? "kpi-card kpi-warning"
    : success
    ? "kpi-card kpi-success"
    : "kpi-card kpi-primary";

  return (
    <div className={className}>
      <div className="kpi-title">{title}</div>

      <div className="kpi-value">
        {value}
      </div>
    </div>
  );
}