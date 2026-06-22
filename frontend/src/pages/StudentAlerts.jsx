import {
useEffect,
useState
} from "react";


import MainLayout from "../layouts/MainLayout";


import {
getAlerts,
markAlertRead
} from "../api/alertApi";



export default function StudentAlerts(){


const [alerts,setAlerts]=useState([]);




useEffect(()=>{

loadAlerts();

},[]);





const loadAlerts=async()=>{


try{


const res =
await getAlerts();


setAlerts(res.data);


}
catch(err){

console.log(err);

}


}





const readAlert=async(id)=>{


await markAlertRead(id);


loadAlerts();


}






return(

<MainLayout>


<div className="dashboard">


<h1>
Notifications
</h1>


{

alerts.length===0 ?


<p style={{
color:"white"
}}>

No notifications

</p>



:


alerts.map(alert=>(


<div

key={alert.id}

style={{

background:"#1e293b",

padding:"20px",

marginBottom:"15px",

borderRadius:"10px",

color:"white",

cursor:"pointer"

}}

onClick={()=>readAlert(alert.id)}

>


<h3>

{alert.alert_type}

</h3>


<p>

{alert.message}

</p>


<small>

{
alert.is_read

?

"Read"

:

"Unread"

}

</small>


</div>



))


}




</div>


</MainLayout>


)


}