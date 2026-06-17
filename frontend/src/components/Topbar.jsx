import {useAuth} from "../auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {getUser} from "../auth/auth";


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



<h3>
EduPredict
</h3>



<div className="top-actions">


<span>

{user?.role?.toUpperCase()}

</span>



<button

onClick={handleLogout}

className="logout"

>

Logout

</button>



</div>



</div>


)

}