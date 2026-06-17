import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div style={styles.wrapper}>

      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h2 style={{ color: "white" }}>EduPredict</h2>

        <nav style={styles.nav}>
          <NavItem to="/admin" label="Admin" />
          <NavItem to="/teacher" label="Teacher" />
          <NavItem to="/student" label="Student" />
        </nav>
      </aside>

      {/* MAIN */}
      <div style={styles.main}>
        <Navbar />

        <div style={styles.content}>
          {children}
        </div>
      </div>

    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.link,
        background: isActive ? "#2d2d2d" : "transparent"
      })}
    >
      {label}
    </NavLink>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "#f4f6f8"
  },

  sidebar: {
    width: "240px",
    background: "#111",
    padding: "20px"
  },

  nav: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "6px"
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },

  content: {
    padding: "25px"
  }
};