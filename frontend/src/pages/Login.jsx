// import { useState } from "react";
// import { loginUser } from "../api/api";
// import { useAuth } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await loginUser(form);
//       login(res.data);

//       const role = res.data.role;

//       if (role === "admin") navigate("/admin");
//       else if (role === "teacher") navigate("/teacher");
//       else navigate("/student");

//     } catch (err) {
//       toast.error("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>EduPredict</h1>
//         <p style={styles.subtitle}>AI Student Risk Platform</p>

//         {error && <div style={styles.error}>{error}</div>}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <button style={styles.button} disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #0f172a, #1e293b)"
//   },
//   card: {
//     width: "380px",
//     padding: "30px",
//     borderRadius: "16px",
//     background: "#111827",
//     color: "white",
//     boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "5px"
//   },
//   subtitle: {
//     textAlign: "center",
//     color: "#9ca3af",
//     marginBottom: "20px"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px"
//   },
//   input: {
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #374151",
//     background: "#0b1220",
//     color: "white"
//   },
//   button: {
//     padding: "12px",
//     borderRadius: "8px",
//     border: "none",
//     background: "#3b82f6",
//     color: "white",
//     cursor: "pointer",
//     fontWeight: "bold"
//   },
//   error: {
//     background: "#7f1d1d",
//     color: "white",
//     padding: "10px",
//     borderRadius: "8px",
//     marginBottom: "10px"
//   }
// };






import { useState } from "react";
import { loginUser } from "../api/api";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/login.css";

import logo from "../assets/logo.png"; // 👈 add your logo here

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(form);
      login(res.data);

      const role = res.data.role;

      if (role === "admin") navigate("/admin");
      else if (role === "teacher") navigate("/teacher");
      else navigate("/student");

    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        {/* LOGO */}
        {/* <img src={logo} alt="EduPredict Logo" className="login-logo" /> */}
        <div className="login-logo-wrapper">
          <img src={logo} alt="EduPredict Logo" className="login-logo" />
        </div>

        {/* <h1 className="login-title">EduPredict</h1>/ */}
        <p className="login-subtitle">AI Student Risk Intelligence Platform</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="login-input"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="login-input"
          />

          <button
            className="login-button"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}