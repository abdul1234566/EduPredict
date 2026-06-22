import {useEffect,useState} from "react";

import {
getAlerts
} from "../api/alertApi";


export default function Alerts(){


const [alerts,setAlerts]=useState([]);



useEffect(()=>{


getAlerts()

.then(res=>{

setAlerts(res.data);

})


},[]);



return(


<div>


<h2>
Alerts
</h2>


{

alerts.length===0 ?

<p>
No alerts
</p>


:


alerts.map(a=>(


<div

key={a.id}

style={{

background:"#1e293b",

padding:15,

borderRadius:10,

marginBottom:10,

color:"white"

}}

>


<p>
{a.message}
</p>


<small>
{a.created_at}
</small>


</div>


))


}



</div>


)


}