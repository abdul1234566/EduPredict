import { useState } from "react";
import { predictStudent } from "../api/api";
import { toast } from "react-toastify";
export default function PredictForm({ setResult }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    age: 0,
    failures: 0,
    absences: 0,
    famrel: 0,
    freetime: 0,
    goout: 0,
    health: 0,
    studytime: 0,
    Medu: 0,
    Fedu: 0
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await predictStudent(form);
      setResult(res.data);
      toast.success("Prediction generated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Student Risk Prediction</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.grid}>
          {Object.keys(form).map((key) => (
            <div key={key} style={styles.field}>
              <label style={styles.label}>{key}</label>

              <input
                name={key}
                type="number"
                value={form[key]}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Analyzing..." : "Predict Risk"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    background: "#111827",
    padding: "20px",
    borderRadius: "12px",
    color: "white",
    marginTop: "20px",
    maxwidth: "100%",
  },
  title: {
    marginBottom: "15px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px"
  },
  field: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    fontSize: "12px",
    marginBottom: "5px",
    color: "#9ca3af"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #374151",
    background: "#0b1220",
    color: "white"
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#3b82f6",
    color: "white",
    fontWeight: "bold"
  }
};