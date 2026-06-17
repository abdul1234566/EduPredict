import { NavLink } from "react-router-dom";
import { getUser } from "../auth/auth";


export default function Sidebar({open,setOpen}){


const user=getUser();

const role=user?.role;



const menu={

admin:[
{
name:"Dashboard",
path:"/admin"
}
],

teacher:[
{
name:"Dashboard",
path:"/teacher"
}
],

student:[
{
name:"Dashboard",
path:"/student"
}
]

};



return(

<>


<div
className={
open
?
"sidebar open"
:
"sidebar"
}
>



<h2 className="logo">
EduPredict
</h2>



<div className="menu">


{
(menu[role] || []).map(item=>(


<NavLink

key={item.path}

to={item.path}

onClick={()=>setOpen(false)}

className={({isActive})=>

isActive
?
"link active"
:
"link"

}

>

{item.name}


</NavLink>


))

}


</div>


</div>



{

open &&

<div

className="overlay"

onClick={()=>setOpen(false)}

></div>


}


</>


)


}