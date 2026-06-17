import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
  logout();
  navigate("/login", { replace: true });
  window.location.reload(); // ensures full reset (important for now)
};

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#111",
      color: "white"
    }}>
      
      <h2>EduPredict</h2>

      <div>
        <span style={{ marginRight: "20px" }}>
          {user?.role?.toUpperCase()}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}