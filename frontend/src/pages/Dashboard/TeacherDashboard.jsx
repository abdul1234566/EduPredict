<<<<<<< HEAD
// import PredictForm from "../../components/PredictForm";
// import ResultCard from "../../components/ResultCard";
// import "../style/teacherdash.css";

// import {
//   getPredictions
// } from "../../api/dashboardApi";


// import {
//   getStudents
// } from "../../api/teacherApi";


// import {
//   useEffect,
//   useState
// } from "react";


// import MainLayout from "../../layouts/MainLayout";

// import { toast } from "react-toastify";



// export default function TeacherDashboard() {


// const [result,setResult]=useState(null);

// const [history,setHistory]=useState([]);

// const [students,setStudents]=useState([]);

// const [selectedStudent,setSelectedStudent]=useState("");

// const [loading,setLoading]=useState(true);




// useEffect(()=>{

// loadHistory();

// loadStudents();

// },[]);





// const loadHistory=async()=>{


// try{

// const res=await getPredictions();

// setHistory(res.data);


// }
// catch(err){

// console.log(err);

// }


// };






// const loadStudents=async()=>{


// try{


// const res = await getStudents();


// setStudents(res.data);


// }
// catch(err){

// console.log(err);

// toast.error("Failed loading students");

// }
// finally{

// setLoading(false);

// }


// };
=======
  // import PredictForm from "../../components/PredictForm";
  // import ResultCard from "../../components/ResultCard";

  // import {
  //   getPredictions
  // } from "../../api/dashboardApi";


  // import {
  //   useEffect,
  //   useState
  // } from "react";


  // import MainLayout from "../../layouts/MainLayout";



  // export default function TeacherDashboard() {


  // const [result,setResult]=useState(null);

  // const [history,setHistory]=useState([]);

  // const [loading,setLoading]=useState(true);



  // useEffect(()=>{

  // loadHistory();

  // },[]);



  // const loadHistory=async()=>{


  // try{


  // const res=await getPredictions();

  // setHistory(res.data);



  // }
  // catch(err){

  // console.log(err);

  // }

  // finally{

  // setLoading(false);

  // }


  // };




  // return(


  // <MainLayout>


  // <div className="dashboard">


  // <h1>
  // Teacher Dashboard
  // </h1>


  // <p className="subtitle">
  // Student prediction and risk analysis
  // </p>




  // {/* PREDICTION AREA */}


  // <div
  // style={{
  // display:"grid",
  // gridTemplateColumns:
  // "repeat(auto-fit,minmax(300px,1fr))",
  // gap:"20px",
  // marginTop:"25px"
  // }}
  // >



  // <div style={{
  // background:"#1e293b",
  // padding:"20px",
  // borderRadius:"12px"
  // }}>


  // <PredictForm
  // setResult={setResult}
  // />


  // </div>
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d




<<<<<<< HEAD

// return(


// <MainLayout>


// <div className="dashboard">



// <h1>
// Teacher Dashboard
// </h1>



// <p className="subtitle">
// Student prediction and risk analysis
// </p>





// <div
// style={{
// background:"#1e293b",
// padding:"20px",
// borderRadius:"12px",
// marginTop:"25px"
// }}
// >



// <h2>
// Select Student
// </h2>



// <select

// value={selectedStudent}

// onChange={(e)=>
// setSelectedStudent(e.target.value)
// }

// style={{
// padding:"10px",
// borderRadius:"8px",
// background:"#0b1220",
// color:"white",
// border:"1px solid #334155",
// width:"100%",
// marginTop:"10px"
// }}

// >



// <option value="">
// Choose Student
// </option>



// {

// students.map(student=>(


// <option

// key={student.id}

// value={student.id}

// >

// {student.name} - {student.email}

// </option>


// ))

// }



// </select>


// </div>









// {/* PREDICTION AREA */}



// <div

// style={{

// display:"grid",

// gridTemplateColumns:
// "repeat(auto-fit,minmax(300px,1fr))",

// gap:"20px",

// marginTop:"25px"

// }}

// >



// <div style={{
// background:"#1e293b",
// padding:"20px",
// borderRadius:"12px"
// }}>



// <PredictForm

// studentId={selectedStudent}

// setResult={setResult}

// />



// </div>






// <div style={{
// background:"#1e293b",
// padding:"20px",
// borderRadius:"12px"
// }}>


// <ResultCard

// result={result}

// />


// </div>



// </div>









// {/* HISTORY */}



// <div className="table-box">


// <h2>
// Prediction History
// </h2>



// {

// loading ?

// <p>
// Loading...
// </p>


// :


// <div style={{overflowX:"auto"}}>


// <table>



// <thead>


// <tr>

// <th>ID</th>

// <th>Prediction</th>

// <th>Risk</th>

// <th>Probability</th>

// </tr>


// </thead>




// <tbody>



// {

// history.map(h=>(


// <tr key={h.id}>


// <td>
// {h.id}
// </td>


// <td>
// {h.prediction}
// </td>


// <td>
// {h.risk_level}
// </td>


// <td>
// {h.risk_probability}%
// </td>



// </tr>


// ))


// }



// </tbody>


// </table>



// </div>



// }




// </div>





// </div>


// </MainLayout>


// )


// }




import PredictForm from "../../components/PredictForm";
import ResultCard from "../../components/ResultCard";
import "../style/teacherdash.css";

import { getPredictions } from "../../api/dashboardApi";
import { getStudents } from "../../api/teacherApi";

import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import { toast } from "react-toastify";
=======
  // <div style={{
  // background:"#1e293b",
  // padding:"20px",
  // borderRadius:"12px"
  // }}>


  // <ResultCard
  // result={result}
  // />


  // </div>



  // </div>






  // {/* HISTORY */}



  // <div className="table-box">


  // <h2>
  // Prediction History
  // </h2>




  // {
  // loading ?


  // <p>
  // Loading...
  // </p>


  // :


  // <div style={{overflowX:"auto"}}>


  // <table>


  // <thead>


  // <tr>


  // <th>
  // ID
  // </th>


  // <th>
  // Prediction
  // </th>


  // <th>
  // Risk
  // </th>


  // <th>
  // Probability
  // </th>


  // </tr>


  // </thead>




  // <tbody>


  // {

  // history.map(h=>(


  // <tr key={h.id}>


  // <td>
  // {h.id}
  // </td>


  // <td>
  // {h.prediction}
  // </td>


  // <td>
  // {h.risk_level}
  // </td>


  // <td>
  // {h.risk_probability}%
  // </td>



  // </tr>



  // ))

  // }



  // </tbody>


  // </table>


  // </div>


  // }



  // </div>






  // </div>


  // </MainLayout>


  // )

  // }

import PredictForm from "../../components/PredictForm";
import ResultCard from "../../components/ResultCard";
import { getPredictions } from "../../api/dashboardApi";
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import "../style/teacherdash.css";
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d

export default function TeacherDashboard() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
<<<<<<< HEAD
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
=======
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
<<<<<<< HEAD
    loadStudents();
=======
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
  }, []);

  const loadHistory = async () => {
    try {
      const res = await getPredictions();
      setHistory(res.data);
    } catch (err) {
      console.log(err);
<<<<<<< HEAD
    }
  };

  const loadStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed loading students");
=======
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

<<<<<<< HEAD
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-card">
          <h1 className="dashboard-title">🎓 Teacher Dashboard</h1>
          <p className="dashboard-subtitle">
            Student prediction and risk analysis
          </p>
        </div>

        {/* STUDENT SELECT */}
        <div className="dashboard-card">
          <h3>👨‍🎓 Select Student</h3>

          <select
            className="dashboard-select"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Choose Student</option>

            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name} - {student.email}
              </option>
            ))}
          </select>
        </div>

        {/* PREDICTION + RESULT GRID */}
        <div className="dashboard-grid-2">

          <div className="dashboard-card">
            <h3>📊 Generate Prediction</h3>
            <PredictForm
              studentId={selectedStudent}
              setResult={setResult}
            />
          </div>

          <div className="dashboard-card">
            <h3>📈 Result Analysis</h3>
            <ResultCard result={result} />
          </div>

        </div>

        {/* HISTORY */}
        <div className="dashboard-card">
          <h3>📚 Prediction History</h3>

          {loading ? (
            <div className="dashboard-loading">Loading...</div>
          ) : (
            <div className="table-wrapper">
              <table className="dashboard-table">
=======
      <div className="teacher-container">

        {/* HEADER */}
        <div className="teacher-header">
          <h1 className="teacher-title">
            🎓 Teacher Dashboard
          </h1>

          <p className="teacher-subtitle">
            AI-powered student performance prediction system
          </p>
        </div>

        {/* FORM SECTION */}
        <div className="teacher-card form-card">

          <div className="section-header">
            <h2>🎯 Generate Prediction</h2>
            <p>Enter student academic data for AI analysis</p>
          </div>

          <PredictForm setResult={setResult} />

        </div>

        {/* RESULT SECTION */}
        {result && (
          <div className="teacher-card result-card">

            <div className="section-header">
              <h2>📊 Prediction Result</h2>
              <p>AI generated performance analysis</p>
            </div>

            <ResultCard result={result} />

          </div>
        )}

        {/* HISTORY SECTION */}
        <div className="teacher-card history-card">

          <div className="section-header">
            <h2>📚 Prediction History</h2>
            <p>All previous AI predictions</p>
          </div>

          {loading ? (
            <div className="loading-box">
              Loading prediction history...
            </div>
          ) : (
            <div className="table-wrapper">

              <table className="teacher-table">
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Prediction</th>
<<<<<<< HEAD
                    <th>Risk</th>
=======
                    <th>Risk Level</th>
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
                    <th>Probability</th>
                  </tr>
                </thead>

                <tbody>
                  {history.map((h) => (
                    <tr key={h.id}>
<<<<<<< HEAD
=======

>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
                      <td>{h.id}</td>
                      <td>{h.prediction}</td>

                      <td>
                        <span className={`risk-${h.risk_level?.toLowerCase()}`}>
                          {h.risk_level}
                        </span>
                      </td>

                      <td>{h.risk_probability}%</td>
<<<<<<< HEAD
=======

>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
                    </tr>
                  ))}
                </tbody>

              </table>
<<<<<<< HEAD
=======

>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
            </div>
          )}

        </div>

      </div>

    </MainLayout>
  );
}