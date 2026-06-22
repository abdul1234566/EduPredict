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
