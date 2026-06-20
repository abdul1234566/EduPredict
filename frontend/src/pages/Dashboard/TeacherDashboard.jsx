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

export default function TeacherDashboard() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await getPredictions();
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

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

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Prediction</th>
                    <th>Risk Level</th>
                    <th>Probability</th>
                  </tr>
                </thead>

                <tbody>
                  {history.map((h) => (
                    <tr key={h.id}>

                      <td>{h.id}</td>
                      <td>{h.prediction}</td>

                      <td>
                        <span className={`risk-${h.risk_level?.toLowerCase()}`}>
                          {h.risk_level}
                        </span>
                      </td>

                      <td>{h.risk_probability}%</td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </MainLayout>
  );
}