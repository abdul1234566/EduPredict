import { NavLink } from "react-router-dom";
import { getUser } from "../auth/auth";

export default function Sidebar({ open, setOpen }) {
  const user = getUser();
  const role = user?.role;

  const menu = {
    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Users", path: "/admin/users" }
    ],
    teacher:[

{
name:"Dashboard",
path:"/teacher"
},

{
name:"Students",
path:"/teacher/students"
},

{
name:"Feedback",
path:"/teacher/feedback"
}

],
   student: [
  {
    name: "Dashboard",
    path: "/student"
  },
  {
    name: "Profile",
    path: "/student/profile"
  }
]
  };

  return (
    <>
      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <h2 className="logo">EduPredict</h2>

        <div className="menu">
          {(menu[role] || []).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* OVERLAY (mobile only) */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}