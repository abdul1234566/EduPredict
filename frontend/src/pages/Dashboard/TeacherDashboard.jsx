import PredictForm from "../../components/PredictForm";
import ResultCard from "../../components/ResultCard";

import {
  getPredictions
} from "../../api/dashboardApi";


import {
  useEffect,
  useState
} from "react";


import MainLayout from "../../layouts/MainLayout";



export default function TeacherDashboard() {


const [result,setResult]=useState(null);

const [history,setHistory]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{

loadHistory();

},[]);



const loadHistory=async()=>{


try{


const res=await getPredictions();

setHistory(res.data);



}
catch(err){

console.log(err);

}

finally{

setLoading(false);

}


};




return(


<MainLayout>


<div className="dashboard">


<h1>
Teacher Dashboard
</h1>


<p className="subtitle">
Student prediction and risk analysis
</p>




{/* PREDICTION AREA */}


<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",
gap:"20px",
marginTop:"25px"
}}
>



<div style={{
background:"#1e293b",
padding:"20px",
borderRadius:"12px"
}}>


<PredictForm
setResult={setResult}
/>


</div>




<div style={{
background:"#1e293b",
padding:"20px",
borderRadius:"12px"
}}>


<ResultCard
result={result}
/>


</div>



</div>






{/* HISTORY */}



<div className="table-box">


<h2>
Prediction History
</h2>




{
loading ?


<p>
Loading...
</p>


:


<div style={{overflowX:"auto"}}>


<table>


<thead>


<tr>


<th>
ID
</th>


<th>
Prediction
</th>


<th>
Risk
</th>


<th>
Probability
</th>


</tr>


</thead>




<tbody>


{

history.map(h=>(


<tr key={h.id}>


<td>
{h.id}
</td>


<td>
{h.prediction}
</td>


<td>
{h.risk_level}
</td>


<td>
{h.risk_probability}%
</td>



</tr>



))

}



</tbody>


</table>


</div>


}



</div>






</div>


</MainLayout>


)

}