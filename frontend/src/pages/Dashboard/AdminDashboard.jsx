import { useEffect,useState } from "react";

import Navbar from "../../components/Navbar";

import {
getStats,
getPredictions,
getTrends
}
from "../../api/dashboardApi";



export default function AdminDashboard(){


const [stats,setStats]=useState(null);

const [predictions,setPredictions]=useState([]);

const [trends,setTrends]=useState([]);



useEffect(()=>{

loadData();

},[]);



const loadData=async()=>{


try{


const s = await getStats();

const p = await getPredictions();

const t = await getTrends();


setStats(s.data);

setPredictions(p.data);

setTrends(t.data);



}
catch(err){

console.log(err);

}


};




return(

<div>


<Navbar/>



<div style={{padding:30}}>


<h1>
Admin Dashboard
</h1>



{
stats &&

<div>


<h3>
System Statistics
</h3>


<p>
Total Predictions:
{stats.total_predictions}
</p>


<p>
High Risk:
{stats.high_risk}
</p>


<p>
Medium Risk:
{stats.medium_risk}
</p>


<p>
Low Risk:
{stats.low_risk}
</p>


</div>


}



<hr/>



<h3>
Prediction History
</h3>



<table border="1" cellPadding="10">


<thead>

<tr>

<th>
Prediction
</th>

<th>
Risk
</th>

<th>
Probability
</th>

<th>
Date
</th>


</tr>

</thead>



<tbody>


{
predictions.map((p)=>(
<tr key={p.id}>


<td>
{p.prediction}
</td>


<td>
{p.risk_level}
</td>


<td>
{p.risk_probability}%
</td>


<td>
{p.created_at}
</td>


</tr>
))

}


</tbody>


</table>



<h3>
Trend Data
</h3>


<pre>

{
JSON.stringify(
trends,
null,
2
)

}

</pre>



</div>


</div>


)



}