// import { useEffect, useState } from "react";

// import MainLayout from "../../layouts/MainLayout";

// import {
//   getMyPredictions
// } from "../../api/dashboardApi";


// import {
//   Line
// } from "react-chartjs-2";


// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// Tooltip,
// Legend
// }
// from "chart.js";


// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// Tooltip,
// Legend
// );



// export default function StudentDashboard(){


// const [history,setHistory]=useState([]);

// const [loading,setLoading]=useState(true);



// useEffect(()=>{

// loadData();

// },[]);



// const loadData=async()=>{

// try{


// const res = await getMyPredictions();


// setHistory(res.data);


// }
// catch(err){

// console.log(err);

// }

// finally{

// setLoading(false);

// }

// };





// if(loading){

// return(

// <MainLayout>

// <h2>
// Loading student analytics...
// </h2>

// </MainLayout>

// )

// }





// const total = history.length;



// const riskCount =
// history.filter(
// x=>x.prediction==="AT RISK"
// ).length;



// const safeCount =
// history.filter(
// x=>x.prediction!=="AT RISK"
// ).length;






// const chartData={


// labels:
// history.map(
// x=>x.created_at?.split("T")[0]
// ),



// datasets:[

// {

// label:"Risk Probability",

// data:
// history.map(
// x=>x.risk_probability
// ),

// borderColor:"#ef4444"

// }

// ]


// };






// return(


// <MainLayout>


// <h1>
// Student Dashboard
// </h1>


// <p>
// Your personal academic risk analytics
// </p>





// <div style={styles.cards}>


// <Card

// title="Total Predictions"

// value={total}

// />


// <Card

// title="Risk Alerts"

// value={riskCount}

// />



// <Card

// title="Safe Predictions"

// value={safeCount}

// />



// </div>






// <div style={styles.box}>


// <h2>
// Risk History
// </h2>


// {
// history.length >0 ?

// <Line data={chartData}/>

// :

// <p>
// No prediction history available
// </p>

// }



// </div>







// <div style={styles.box}>


// <h2>
// Prediction History
// </h2>



// <div style={{overflowX:"auto"}}>


// <table style={styles.table}>


// <thead>

// <tr>

// <th>
// Prediction
// </th>


// <th>
// Risk Level
// </th>


// <th>
// Probability
// </th>


// <th>
// Date
// </th>


// </tr>


// </thead>




// <tbody>


// {

// history.map(
// (item,index)=>(


// <tr key={index}>


// <td>
// {item.prediction}
// </td>


// <td>
// {item.risk_level}
// </td>


// <td>
// {item.risk_probability}%
// </td>


// <td>
// {
// item.created_at?.split("T")[0]
// }
// </td>


// </tr>


// )

// )


// }


// </tbody>


// </table>


// </div>



// </div>






// <div style={styles.box}>


// <h2>
// AI Recommendations
// </h2>



// <ul>

// {

// riskCount > 0 ?

// <>

// <li>
// Improve attendance consistency.
// </li>

// <li>
// Focus on weak subjects.
// </li>

// <li>
// Reduce failed subjects.
// </li>

// </>

// :

// <>

// <li>
// Maintain current performance.
// </li>

// <li>
// Keep regular study habits.
// </li>

// <li>
// Continue good attendance.
// </li>


// </>

// }


// </ul>


// </div>




// </MainLayout>


// )

// }



// function Card({title,value}){


// return(


// <div style={styles.card}>


// <h3>
// {title}
// </h3>


// <h1>
// {value}
// </h1>


// </div>


// )

// }






// const styles={



// cards:{


// display:"grid",

// gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",

// gap:"20px",

// marginTop:"20px"


// },



// card:{


// background:"#111a2e",

// padding:"20px",

// borderRadius:"15px",

// color:"white",

// border:"1px solid #1f2a44"


// },




// box:{


// background:"#111a2e",

// padding:"20px",

// borderRadius:"15px",

// marginTop:"25px",

// color:"white",

// border:"1px solid #1f2a44"


// },




// table:{


// width:"100%",

// color:"white",

// borderCollapse:"collapse"


// }



// };





import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getMyPredictions } from "../../api/dashboardApi";
<<<<<<< HEAD
import "../style/studentdash.css";

import { Line } from "react-chartjs-2";
=======

import {
  Line
} from "react-chartjs-2";

>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
<<<<<<< HEAD
=======

import "../style/studentdash.css";
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function StudentDashboard() {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await getMyPredictions();
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
<<<<<<< HEAD
        <div className="dashboard-container">
          <div className="dashboard-loading">
            Loading student analytics...
          </div>
=======
        <div className="student-loading">
          Loading student analytics...
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
        </div>
      </MainLayout>
    );
  }

  const total = history.length;

  const riskCount = history.filter(
    x => x.prediction === "AT RISK"
  ).length;

<<<<<<< HEAD
  const safeCount = history.filter(
    x => x.prediction !== "AT RISK"
  ).length;
=======
  const safeCount = total - riskCount;
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d

  const chartData = {
    labels: history.map(x => x.created_at?.split("T")[0]),
    datasets: [
      {
        label: "Risk Probability",
        data: history.map(x => x.risk_probability),
        borderColor: "#00c2ff",
<<<<<<< HEAD
        backgroundColor: "rgba(0,194,255,0.2)",
=======
        backgroundColor: "rgba(0,194,255,0.15)",
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
        tension: 0.4
      }
    ]
  };

  return (
    <MainLayout>

<<<<<<< HEAD
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-card">
          <h1 className="dashboard-title">🎓 Student Dashboard</h1>
          <p className="dashboard-subtitle">
            Your personal academic risk analytics
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="dashboard-grid">

          <div className="kpi-card kpi-primary">
            <div className="kpi-title">Total Predictions</div>
            <div className="kpi-value">{total}</div>
          </div>

          <div className="kpi-card kpi-danger">
            <div className="kpi-title">Risk Alerts</div>
            <div className="kpi-value">{riskCount}</div>
          </div>

          <div className="kpi-card kpi-success">
            <div className="kpi-title">Safe Predictions</div>
            <div className="kpi-value">{safeCount}</div>
=======
      <div className="student-container">

        <h1 className="student-title">
          🎓 Student Dashboard
        </h1>

        <p className="student-subtitle">
          Personal academic risk analytics powered by AI
        </p>

        {/* KPI CARDS */}
        <div className="student-grid">

          <div className="student-card kpi-primary">
            <h3>Total Predictions</h3>
            <h1>{total}</h1>
          </div>

          <div className="student-card kpi-danger">
            <h3>Risk Alerts</h3>
            <h1>{riskCount}</h1>
          </div>

          <div className="student-card kpi-success">
            <h3>Safe Predictions</h3>
            <h1>{safeCount}</h1>
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
          </div>

        </div>

        {/* CHART */}
<<<<<<< HEAD
        <div className="dashboard-card">
          <h3>📈 Risk History</h3>

          {history.length > 0 ? (
            <div className="chart-container">
              <Line data={chartData} />
            </div>
          ) : (
            <p className="muted">No prediction history available</p>
          )}
        </div>

        {/* TABLE */}
        <div className="dashboard-card">
          <h3>📚 Prediction History</h3>

          <div className="table-wrapper">

            <table className="dashboard-table">
=======
        <div className="student-card chart-card">
          <h2>📊 Risk Trend Analysis</h2>
          <Line data={chartData} />
        </div>

        {/* TABLE */}
        <div className="student-card">
          <h2>📋 Prediction History</h2>

          <div className="table-wrapper">

            <table className="student-table">
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d

              <thead>
                <tr>
                  <th>Prediction</th>
                  <th>Risk Level</th>
                  <th>Probability</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {history.map((item, index) => (
                  <tr key={index}>
                    <td>{item.prediction}</td>
<<<<<<< HEAD

                    <td>
                      <span className={`risk-${item.risk_level?.toLowerCase()}`}>
                        {item.risk_level}
                      </span>
                    </td>

=======
                    <td>{item.risk_level}</td>
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
                    <td>{item.risk_probability}%</td>
                    <td>{item.created_at?.split("T")[0]}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

        {/* RECOMMENDATIONS */}
<<<<<<< HEAD
        <div className="dashboard-card">
          <h3>🤖 AI Recommendations</h3>

          <ul className="recommendation-list">
            {riskCount > 0 ? (
              <>
                <li>Improve attendance consistency.</li>
                <li>Focus on weak subjects.</li>
                <li>Reduce failed subjects.</li>
              </>
            ) : (
              <>
                <li>Maintain current performance.</li>
                <li>Keep regular study habits.</li>
                <li>Continue good attendance.</li>
              </>
            )}
          </ul>
=======
        <div className="student-card">
          <h2>🤖 AI Recommendations</h2>

          <ul className="recommendations">

            {riskCount > 0 ? (
              <>
                <li>Improve attendance consistency</li>
                <li>Focus on weak subjects</li>
                <li>Reduce failed assessments</li>
              </>
            ) : (
              <>
                <li>Maintain current performance</li>
                <li>Keep consistent study routine</li>
                <li>Continue good attendance habits</li>
              </>
            )}

          </ul>

>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
        </div>

      </div>

    </MainLayout>
  );
<<<<<<< HEAD
}
=======
} 
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
