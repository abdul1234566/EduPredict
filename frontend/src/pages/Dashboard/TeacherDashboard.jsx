import Navbar from "../../components/Navbar";
import PredictForm from "../../components/PredictForm";
import ResultCard from "../../components/ResultCard";

import {useState} from "react";



export default function TeacherDashboard(){


const [result,setResult]=useState(null);



return(

<div>


<Navbar/>


<div style={{padding:30}}>


<h1>
Teacher Dashboard
</h1>


<PredictForm

setResult={setResult}

/>


<ResultCard

result={result}

/>



</div>


</div>


)


}