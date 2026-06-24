// import {useAuth} from "../auth/AuthContext";
// import {useNavigate} from "react-router-dom";
// import {getUser} from "../auth/auth";


// export default function Topbar({setOpen}){


// const {logout}=useAuth();

// const navigate=useNavigate();

// const user=getUser();



// const handleLogout=()=>{

// logout();

// navigate("/login");

// };



// return(

// <div className="topbar">


// <button

// className="hamburger"

// onClick={()=>setOpen(true)}

// >

// ☰

// </button>



// <h3>
// EduPredict
// </h3>



// <div className="top-actions">


// <span>

// {user?.role?.toUpperCase()}

// </span>



// <button

// onClick={handleLogout}

// className="logout"

// >

// Logout

// </button>



// </div>



// </div>


// )

// }

import {useAuth} from "../auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {getUser} from "../auth/auth";
import logo from "../assets/logo.png"; // ⚠️ make sure path is correct

export default function Topbar({setOpen}){


const {logout}=useAuth();

const navigate=useNavigate();

const user=getUser();

const handleLogout=()=>{

logout();

navigate("/login");

};



return(

<div className="topbar">


<button

className="hamburger"

onClick={()=>setOpen(true)}

>

☰

</button>



{/* <h3>
EduPredict
</h3> */}
        <img
          src={logo}
          alt="EduPredict"
          onError={(e) => {
            e.target.style.display = "none"; // prevents blank screen crash
          }}
          style={{
            marginLeft: "20px",
            width: "85px",
            height: "85px",
            objectFit: "contain"
          }}
        />



<div className="top-actions">


{/* <span>

{user?.role?.toUpperCase()}

</span> */}



{/* <button

onClick={handleLogout}

className="logout"

>

Logout

</button> */}



</div>



</div>


)

}
<<<<<<< HEAD
=======



// import { useAuth } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { getUser } from "../auth/auth";
// import logo from "../assets/logo.png"; // ⚠️ make sure path is correct

// export default function Topbar({ setOpen }) {

//   const { logout } = useAuth();
//   const navigate = useNavigate();
//   const user = getUser();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div style={{
//       height: "60px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "0 15px",
//       background: "#0b1220",
//       borderBottom: "1px solid rgba(0,194,255,0.15)"
//     }}>

//       {/* LEFT SIDE */}
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

//         <button
//           onClick={() => setOpen(true)}
//           style={{
//             background: "transparent",
//             border: "none",
//             color: "white",
//             fontSize: "22px",
//             cursor: "pointer"
//           }}
//         >
//           ☰
//         </button>

//         {/* LOGO (SAFE VERSION) */}
//         <img
//           src={logo}
//           alt="EduPredict"
//           onError={(e) => {
//             e.target.style.display = "none"; // prevents blank screen crash
//           }}
//           style={{
//             width: "78px",
//             height: "78px",
//             objectFit: "contain"
//           }}
//         />

//       </div>

//       {/* RIGHT SIDE */}
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

//         {/* <span style={{ color: "#cbd5e1", fontSize: "13px" }}>
//           {user?.role?.toUpperCase()}
//         </span> */}

//         {/* <button
//           onClick={handleLogout}
//           style={{
//             background: "#ef4444",
//             border: "none",
//             color: "white",
//             padding: "6px 12px",
//             borderRadius: "8px",
//             cursor: "pointer"
//           }}
//         >
//           Logout
//         </button> */}

//       </div>

//     </div>
//   );
// }
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
