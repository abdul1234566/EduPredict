import {
useEffect,
useState
} from "react";

import MainLayout from "../layouts/MainLayout";

import {
getAlerts,
markAlertRead
} from "../api/alertApi";


export default function TeacherAlerts(){


const [alerts,setAlerts]=useState([]);



useEffect(()=>{

load();

},[]);



const load=async()=>{


const res =
await getAlerts();


setAlerts(res.data);


}



const read=async(id)=>{


await markAlertRead(id);


load();


}



return(

<MainLayout>


<div className="dashboard">


<h1>
Alerts
</h1>


{
alerts.map(a=>(


<div
key={a.id}
style={{
background:"#1e293b",
padding:20,
marginBottom:15,
borderRadius:10,
color:"white"
}}
>


<h3>
{a.alert_type}
</h3>


<p>
{a.message}
</p>


<button
onClick={()=>read(a.id)}
>

Mark Read

</button>


</div>


))

}



</div>


</MainLayout>

)

}