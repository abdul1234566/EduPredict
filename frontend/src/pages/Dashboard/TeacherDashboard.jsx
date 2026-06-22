import PredictForm from "../../components/PredictForm";
import ResultCard from "../../components/ResultCard";

import {
  getPredictions
} from "../../api/dashboardApi";


import {
  getStudents
} from "../../api/teacherApi";


import {
  useEffect,
  useState
} from "react";


import MainLayout from "../../layouts/MainLayout";

import { toast } from "react-toastify";



export default function TeacherDashboard() {


const [result,setResult]=useState(null);

const [history,setHistory]=useState([]);

const [students,setStudents]=useState([]);

const [selectedStudent,setSelectedStudent]=useState("");

const [loading,setLoading]=useState(true);




useEffect(()=>{

loadHistory();

loadStudents();

},[]);





const loadHistory=async()=>{


try{

const res=await getPredictions();

setHistory(res.data);


}
catch(err){

console.log(err);

}


};






const loadStudents=async()=>{


try{


const res = await getStudents();


setStudents(res.data);


}
catch(err){

console.log(err);

toast.error("Failed loading students");

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





<div
style={{
background:"#1e293b",
padding:"20px",
borderRadius:"12px",
marginTop:"25px"
}}
>



<h2>
Select Student
</h2>



<select

value={selectedStudent}

onChange={(e)=>
setSelectedStudent(e.target.value)
}

style={{
padding:"10px",
borderRadius:"8px",
background:"#0b1220",
color:"white",
border:"1px solid #334155",
width:"100%",
marginTop:"10px"
}}

>



<option value="">
Choose Student
</option>



{

students.map(student=>(


<option

key={student.id}

value={student.id}

>

{student.name} - {student.email}

</option>


))

}



</select>


</div>









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

studentId={selectedStudent}

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

<th>ID</th>

<th>Prediction</th>

<th>Risk</th>

<th>Probability</th>

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