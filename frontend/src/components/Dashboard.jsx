import {useEffect,useState} from "react";

import {
getStats,
getTrends,
getPredictions
}
from "../api/dashboardApi";


import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend
}
from "recharts";


import {
ShieldCheck,
AlertTriangle,
Activity,
Users
}
from "lucide-react";


import {motion} from "framer-motion";


import "../styles/dashboard.css";




function Dashboard(){


const [stats,setStats]=useState(null);

const [trends,setTrends]=useState([]);

const [predictions,setPredictions]=useState([]);


const [loading,setLoading]=useState(true);



useEffect(()=>{

loadDashboard();

},[]);



const loadDashboard=async()=>{


try{


const s=await getStats();

const t=await getTrends();

const p=await getPredictions();



setStats(s.data);

setTrends(t.data);

setPredictions(p.data);


}

finally{

setLoading(false);

}


};





if(loading){


return (

<div className="loader">

<div></div>

<p>
Loading Dashboard...
</p>


</div>

)

}





return(


<div className="dashboard">


<h1>
EduPredict AI Dashboard
</h1>



<p className="subtitle">
Student Risk Monitoring System
</p>





<div className="cards">



<Card
icon={<Users/>}
title="Total Predictions"
value={stats.total_predictions}
/>



<Card
icon={<AlertTriangle/>}
title="High Risk"
value={stats.high_risk}
/>



<Card
icon={<Activity/>}
title="Medium Risk"
value={stats.medium_risk}
/>



<Card
icon={<ShieldCheck/>}
title="Low Risk"
value={stats.low_risk}
/>



</div>






<div className="chart-box">


<h2>
Risk Trends
</h2>



<LineChart

width={750}

height={350}

data={trends}

>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="date"/>


<YAxis/>


<Tooltip/>


<Legend/>



<Line
type="monotone"
dataKey="at_risk"
/>


<Line
type="monotone"
dataKey="safe"
/>



</LineChart>


</div>







<div className="table-box">


<h2>
Prediction History
</h2>



<table>


<thead>

<tr>

<th>ID</th>
<th>Status</th>
<th>Probability</th>
<th>Risk</th>
<th>Date</th>

</tr>

</thead>



<tbody>


{
predictions.map((p)=>(

<tr key={p.id}>


<td>
{p.id}
</td>


<td>

<span className={
p.prediction==="AT RISK"
?
"danger"
:
"safe"
}>

{p.prediction}

</span>

</td>


<td>
{p.risk_probability}%
</td>


<td>
{p.risk_level}
</td>


<td>
{p.created_at.split("T")[0]}
</td>


</tr>

))

}


</tbody>


</table>



</div>



</div>


)



}






function Card({icon,title,value}){


return(

<motion.div

className="card"

whileHover={{
scale:1.05
}}

>


<div className="icon">

{icon}

</div>



<h3>
{title}
</h3>


<h2>
{value}
</h2>



</motion.div>


)


}



export default Dashboard;