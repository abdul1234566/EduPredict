import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import {
  getMyPredictions
} from "../../api/dashboardApi";


import {
  Line
} from "react-chartjs-2";


import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
}
from "chart.js";


ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
);



export default function StudentDashboard(){


const [history,setHistory]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{

loadData();

},[]);



const loadData=async()=>{

try{


const res = await getMyPredictions();


setHistory(res.data);


}
catch(err){

console.log(err);

}

finally{

setLoading(false);

}

};





if(loading){

return(

<MainLayout>

<h2>
Loading student analytics...
</h2>

</MainLayout>

)

}





const total = history.length;



const riskCount =
history.filter(
x=>x.prediction==="AT RISK"
).length;



const safeCount =
history.filter(
x=>x.prediction!=="AT RISK"
).length;






const chartData={


labels:
history.map(
x=>x.created_at?.split("T")[0]
),



datasets:[

{

label:"Risk Probability",

data:
history.map(
x=>x.risk_probability
),

borderColor:"#ef4444"

}

]


};






return(


<MainLayout>


<h1>
Student Dashboard
</h1>


<p>
Your personal academic risk analytics
</p>





<div style={styles.cards}>


<Card

title="Total Predictions"

value={total}

/>


<Card

title="Risk Alerts"

value={riskCount}

/>



<Card

title="Safe Predictions"

value={safeCount}

/>



</div>






<div style={styles.box}>


<h2>
Risk History
</h2>


{
history.length >0 ?

<Line data={chartData}/>

:

<p>
No prediction history available
</p>

}



</div>







<div style={styles.box}>


<h2>
Prediction History
</h2>



<div style={{overflowX:"auto"}}>


<table style={styles.table}>


<thead>

<tr>

<th>
Prediction
</th>


<th>
Risk Level
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

history.map(
(item,index)=>(


<tr key={index}>


<td>
{item.prediction}
</td>


<td>
{item.risk_level}
</td>


<td>
{item.risk_probability}%
</td>


<td>
{
item.created_at?.split("T")[0]
}
</td>


</tr>


)

)


}


</tbody>


</table>


</div>



</div>






<div style={styles.box}>


<h2>
AI Recommendations
</h2>



<ul>

{

riskCount > 0 ?

<>

<li>
Improve attendance consistency.
</li>

<li>
Focus on weak subjects.
</li>

<li>
Reduce failed subjects.
</li>

</>

:

<>

<li>
Maintain current performance.
</li>

<li>
Keep regular study habits.
</li>

<li>
Continue good attendance.
</li>


</>

}


</ul>


</div>




</MainLayout>


)

}



function Card({title,value}){


return(


<div style={styles.card}>


<h3>
{title}
</h3>


<h1>
{value}
</h1>


</div>


)

}






const styles={



cards:{


display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",

gap:"20px",

marginTop:"20px"


},



card:{


background:"#111a2e",

padding:"20px",

borderRadius:"15px",

color:"white",

border:"1px solid #1f2a44"


},




box:{


background:"#111a2e",

padding:"20px",

borderRadius:"15px",

marginTop:"25px",

color:"white",

border:"1px solid #1f2a44"


},




table:{


width:"100%",

color:"white",

borderCollapse:"collapse"


}



};