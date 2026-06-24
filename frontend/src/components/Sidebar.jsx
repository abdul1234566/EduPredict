// import { NavLink } from "react-router-dom";
// import { getUser } from "../auth/auth";
<<<<<<< HEAD
// import { useEffect, useState } from "react";
// import "./Sidebar.css";
// import {
//   getAlertCount,
//   getAlerts,
//   markAlertRead
// } from "../api/alertApi";

// export default function Sidebar({ open, setOpen }) {

//   const user = getUser();
//   const role = user?.role;

//   const [alertCount, setAlertCount] = useState(0);
//   const [alerts, setAlerts] = useState([]);
//   const [showNotifications, setShowNotifications] = useState(false);

//   useEffect(() => {

//     if (role === "teacher" || role === "student") {
//       loadAlerts();
//     }

//     const interval = setInterval(() => {
//       if (role === "teacher" || role === "student") {
//         loadAlerts();
//       }
//     }, 5000); // 🔥 faster real-time feel

//     return () => clearInterval(interval);

//   }, [role]);

//   const loadAlerts = async () => {

//     try {

//       const countRes = await getAlertCount();
//       const alertRes = await getAlerts();

//       setAlertCount(countRes.data.count || 0);

//       // only unread or latest 5
//       setAlerts(alertRes.data.slice(0, 5));

//     } catch (err) {
//       console.log("Notification error", err);
//     }

//   };

//   const openAlert = async (alert) => {

//     try {

//       await markAlertRead(alert.id);

//       // instant UI update (no full reload needed)
//       setAlerts(prev =>
//         prev.map(a =>
//           a.id === alert.id
//             ? { ...a, is_read: true }
//             : a
//         )
//       );

//       setAlertCount(prev => Math.max(prev - 1, 0));

//     } catch (err) {
//       console.log(err);
//     }

//   };

=======

// export default function Sidebar({ open, setOpen }) {
//   const user = getUser();
//   const role = user?.role;

>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
//   const menu = {
//     admin: [
//       { name: "Dashboard", path: "/admin" },
//       { name: "Users", path: "/admin/users" }
//     ],
<<<<<<< HEAD

//     teacher: [
//       { name: "Dashboard", path: "/teacher" },
//       { name: "Students", path: "/teacher/students" }
//     ],

//     student: [
//       { name: "Dashboard", path: "/student" },
//       { name: "Profile", path: "/student/profile" },
//       { name: "Teachers Feedback", path: "/student/feedback" },
//       { name: "Alerts", path: "/student/alerts" }
//     ]
=======
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
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
//   };

//   return (
//     <>
<<<<<<< HEAD
//       <div className={`sidebar ${open ? "open" : ""}`}>

//         <h2 className="logo">EduPredict</h2>

//         {/* 🔔 NOTIFICATIONS */}
//         {(role === "teacher" || role === "student") && (
//           <div style={{ position: "relative" }}>

//             <button
//               onClick={() => setShowNotifications(!showNotifications)}
//               style={{
//                 background: "transparent",
//                 border: "none",
//                 color: "white",
//                 fontSize: "18px",
//                 cursor: "pointer",
//                 padding: "12px",
//                 width: "100%",
//                 textAlign: "left"
//               }}
//             >
//               🔔 Notifications

//               {alertCount > 0 && (
//                 <span style={{
//                   background: "#ef4444",
//                   borderRadius: "50%",
//                   padding: "3px 8px",
//                   fontSize: "12px",
//                   marginLeft: "10px"
//                 }}>
//                   {alertCount}
//                 </span>
//               )}
//             </button>

//             {/* DROPDOWN */}
//             {showNotifications && (
//               <div style={{
//                 position: "absolute",
//                 top: "45px",
//                 left: "10px",
//                 width: "260px",
//                 background: "#111827",
//                 borderRadius: "10px",
//                 padding: "10px",
//                 zIndex: 999,
//                 boxShadow: "0 10px 30px rgba(0,0,0,.4)"
//               }}>

//                 <h4 style={{ color: "white", marginBottom: "10px" }}>
//                   Notifications
//                 </h4>

//                 {alerts.length === 0 ? (
//                   <p style={{ color: "#9ca3af" }}>
//                     No alerts
//                   </p>
//                 ) : (
//                   alerts.map(a => (
//                     <div
//                       key={a.id}
//                       onClick={() => openAlert(a)}
//                       style={{
//                         padding: "10px",
//                         marginBottom: "8px",
//                         background: a.is_read ? "#1f2937" : "#334155",
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                         color: "white"
//                       }}
//                     >
//                       <p style={{ margin: 0 }}>
//                         {a.message}
//                       </p>

//                       <small>
//                         {a.alert_type}
//                       </small>
//                     </div>
//                   ))
//                 )}

//               </div>
//             )}
//           </div>
//         )}

//         {/* MENU */}
//         <div className="menu">
//           {(menu[role] || []).map(item => (
=======
//       {/* SIDEBAR */}
//       <div className={`sidebar ${open ? "open" : ""}`}>
//         <h2 className="logo">EduPredict</h2>

//         <div className="menu">
//           {(menu[role] || []).map((item) => (
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
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
<<<<<<< HEAD

//       </div>

=======
//       </div>

//       {/* OVERLAY (mobile only) */}
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
//       {open && (
//         <div
//           className="overlay"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </>
//   );
// }





<<<<<<< HEAD

import { NavLink, useNavigate } from "react-router-dom";
import { getUser } from "../auth/auth";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";

import {
  getAlertCount,
  getAlerts,
  markAlertRead
} from "../api/alertApi";

=======
import { NavLink, useNavigate } from "react-router-dom";
import { getUser } from "../auth/auth";
import { useAuth } from "../auth/AuthContext";
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
import "./Sidebar.css";

export default function Sidebar({ open, setOpen }) {

  const user = getUser();
  const role = user?.role;

  const { logout } = useAuth();
  const navigate = useNavigate();

<<<<<<< HEAD
  const [alertCount, setAlertCount] = useState(0);
  const [alerts, setAlerts] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {

    if (role === "teacher" || role === "student") {
      loadAlerts();
    }

    const interval = setInterval(() => {
      if (role === "teacher" || role === "student") {
        loadAlerts();
      }
    }, 5000);

    return () => clearInterval(interval);

  }, [role]);

  const loadAlerts = async () => {
    try {
      const countRes = await getAlertCount();
      const alertRes = await getAlerts();

      setAlertCount(countRes.data.count || 0);
      setAlerts(alertRes.data.slice(0, 5));

    } catch (err) {
      console.log("Notification error", err);
    }
  };

  const openAlert = async (alert) => {
    try {
      await markAlertRead(alert.id);

      setAlerts(prev =>
        prev.map(a =>
          a.id === alert.id ? { ...a, is_read: true } : a
        )
      );

      setAlertCount(prev => Math.max(prev - 1, 0));

    } catch (err) {
      console.log(err);
    }
  };

=======
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
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
<<<<<<< HEAD
      { name: "Dashboard", path: "/teacher" },
      { name: "Students", path: "/teacher/students" }
    ],
    student: [
      { name: "Dashboard", path: "/student" },
      { name: "Profile", path: "/student/profile" },
      { name: "Alerts", path: "/student/alerts" },
      { name: "Teachers Feedback", path: "/student/feedback" }
=======
      { name: "📊 Dashboard", path: "/teacher" },
      { name: "🎓 Students", path: "/teacher/students" },
      { name: "💬 Feedback", path: "/teacher/feedback" }
    ],
    student: [
      { name: "📊 Dashboard", path: "/student" },
      { name: "👤 Profile", path: "/student/profile" }
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
    ]
  };

  const username =
    user?.name ||
    (user?.email ? user.email.split("@")[0] : "") ||
    "User";

  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>

<<<<<<< HEAD
        {/* USER SECTION */}
        <div className="userBox">
          <div className="avatar">👤</div>
          <div className="username">{username}</div>
        </div>

        {/* NOTIFICATIONS */}
        {(role === "teacher" || role === "student") && (
          <div className="notificationBox">

            <button
              className="notifBtn"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              🔔 Notifications

              {alertCount > 0 && (
                <span className="badge">{alertCount}</span>
              )}
            </button>

            {showNotifications && (
              <div className="notifDropdown">

                <h4>Notifications</h4>

                {alerts.length === 0 ? (
                  <p className="muted">No alerts</p>
                ) : (
                  alerts.map(a => (
                    <div
                      key={a.id}
                      onClick={() => openAlert(a)}
                      className={`notifItem ${a.is_read ? "read" : "unread"}`}
                    >
                      <p>{a.message}</p>
                      <small>{a.alert_type}</small>
                    </div>
                  ))
                )}

              </div>
            )}
          </div>
        )}

        {/* MENU */}
        <div className="menu">
          {(menu[role] || []).map(item => (
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

        {/* LOGOUT */}
=======
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
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
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