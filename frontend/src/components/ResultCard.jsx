// export default function ResultCard({ result }) {
//   if (!result) {
//     return (
//       <div style={styles.empty}>
//         No prediction yet
//       </div>
//     );
//   }

//   const color =
//     result.prediction === "AT RISK"
//       ? "#ef4444"
//       : "#22c55e";

//   return (
//     <div style={{
//       ...styles.card,
//       borderLeft: `5px solid ${color}`
//     }}>
//       <h3>Prediction Result</h3>

//       <p>
//         <b>Status:</b>{" "}
//         <span style={{ color }}>
//           {result.prediction}
//         </span>
//       </p>

//       <p><b>Risk:</b> {result.risk_probability}%</p>
//       <p><b>Level:</b> {result.risk_level}</p>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     padding: "20px",
//     borderRadius: "12px",
//     background: "#0b1220",
//     color: "white"
//   },
//   empty: {
//     padding: "20px",
//     textAlign: "center",
//     opacity: 0.6
//   }
// };


export default function ResultCard({ result }) {

  if (!result) {
    return (
      <div style={styles.empty}>
        No prediction yet
      </div>
    );
  }

  const isRisk = result.prediction === "AT RISK";

  const color = isRisk
    ? "#ff4d4d"
    : "#00e6a7";

  return (
    <div
      style={{
        ...styles.card,
        borderLeft: `5px solid ${color}`
      }}
    >
      <h3 style={styles.title}>
        Prediction Result
      </h3>

      <div style={styles.row}>
        <span style={styles.label}>Status</span>

        <span
          style={{
            ...styles.badge,
            background: isRisk
              ? "rgba(255,77,77,0.15)"
              : "rgba(0,230,167,0.15)",
            color
          }}
        >
          {result.prediction}
        </span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Risk Probability</span>
        <b style={styles.value}>
          {result.risk_probability}%
        </b>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Risk Level</span>
        <b style={styles.value}>
          {result.risk_level}
        </b>
      </div>

    </div>
  );
}

const styles = {

  card: {
    background: "rgba(17, 28, 46, 0.75)",
    border: "1px solid rgba(0, 194, 255, 0.15)",
    borderRadius: "16px",
    padding: "22px",
    color: "#e6f1ff",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 20px rgba(0, 194, 255, 0.08)",
    transition: "0.3s ease"
  },

  title: {
    margin: "0 0 18px",
    color: "#00c2ff",
    fontSize: "20px",
    fontWeight: "700"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #1e2a3b"
  },

  label: {
    color: "#94a3b8",
    fontWeight: "500"
  },

  value: {
    color: "#e6f1ff"
  },

  badge: {
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "13px"
  },

  empty: {
    background: "rgba(17, 28, 46, 0.75)",
    border: "1px solid rgba(0, 194, 255, 0.15)",
    borderRadius: "16px",
    padding: "25px",
    textAlign: "center",
    color: "#94a3b8",
    backdropFilter: "blur(12px)"
  }
};