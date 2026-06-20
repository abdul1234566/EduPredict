// import { NavLink } from "react-router-dom";
// import { getUser } from "../auth/auth";

// export default function Sidebar({ open, setOpen }) {
//   const user = getUser();
//   const role = user?.role;

//   const menu = {
//     admin: [
//       { name: "Dashboard", path: "/admin" },
//       { name: "Users", path: "/admin/users" }
//     ],
//     teacher:[

// {
// name:"Dashboard",
// path:"/teacher"
// },

// {
// name:"Students",
// path:"/teacher/students"
// },

// {
// name:"Feedback",
// path:"/teacher/feedback"
// }

// ],
//    student: [
//   {
//     name: "Dashboard",
//     path: "/student"
//   },
//   {
//     name: "Profile",
//     path: "/student/profile"
//   }
// ]
//   };

//   return (
//     <>
//       {/* SIDEBAR */}
//       <div className={`sidebar ${open ? "open" : ""}`}>
//         <h2 className="logo">EduPredict</h2>

//         <div className="menu">
//           {(menu[role] || []).map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? "link active" : "link"
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>
//       </div>

//       {/* OVERLAY (mobile only) */}
//       {open && (
//         <div
//           className="overlay"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </>
//   );
// }





import { NavLink, useNavigate } from "react-router-dom";
import { getUser } from "../auth/auth";
import { useAuth } from "../auth/AuthContext";
import "./Sidebar.css";

export default function Sidebar({ open, setOpen }) {
  const user = getUser();
  const role = user?.role;

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menu = {
    admin: [
      { name: "📊 Dashboard", path: "/admin" },
      { name: "👥 Users", path: "/admin/users" }
    ],
    teacher: [
      { name: "📊 Dashboard", path: "/teacher" },
      { name: "🎓 Students", path: "/teacher/students" },
      { name: "💬 Feedback", path: "/teacher/feedback" }
    ],
    student: [
      { name: "📊 Dashboard", path: "/student" },
      { name: "👤 Profile", path: "/student/profile" }
    ]
  };

  const username =
    user?.name ||
    (user?.email ? user.email.split("@")[0] : "") ||
    "User";

  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>

        {/* TOP */}
        <div>

          {/* <h2 className="logo">
            🎓 EduPredict
          </h2> */}

          {/* USER BOX */}
          <div className="userBox">
            <div className="avatar">
              👤
            </div>

            <div className="username">
              {username}
            </div>
          </div>

          {/* MENU */}
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

        {/* BOTTOM */}
        <div className="sidebarBottom">
          <button className="logoutBtn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>

      </div>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}