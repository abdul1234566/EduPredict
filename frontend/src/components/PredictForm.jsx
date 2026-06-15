import { useState } from "react";
import { predictStudent } from "../api/api";

export default function PredictForm({ setResult }) {
  const [form, setForm] = useState({
    age: "",
    failures: "",
    absences: "",
    famrel: "",
    freetime: "",
    goout: "",
    health: "",
    studytime: "",
    Medu: "",
    Fedu: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await predictStudent(form);
    setResult(res);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Student Risk Prediction</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={form[key]}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
      ))}

      <button type="submit">
        Predict
      </button>
    </form>
  );
}