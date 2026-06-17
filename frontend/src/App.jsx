import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Login from "./pages/Login";


import AdminDashboard 
from "./pages/Dashboard/AdminDashboard";


import TeacherDashboard 
from "./pages/Dashboard/TeacherDashboard";


import StudentDashboard 
from "./pages/Dashboard/StudentDashboard";


import ProtectedRoute 
from "./components/ProtectedRoute";



function App(){


  return(

 <div style={{ minHeight: "100vh", width: "100vw", background: "#0f172a" }}>
    <BrowserRouter>


      <Routes>


        {/* LOGIN */}

        <Route

          path="/login"

          element={<Login/>}

        />



        {/* ADMIN */}

        <Route

          path="/admin"

          element={

            <ProtectedRoute role="admin">

              <AdminDashboard/>

            </ProtectedRoute>

          }

        />




        {/* TEACHER */}

        <Route

          path="/teacher"

          element={

            <ProtectedRoute role="teacher">

              <TeacherDashboard/>

            </ProtectedRoute>

          }

        />




        {/* STUDENT */}

        <Route

          path="/student"

          element={

            <ProtectedRoute role="student">

              <StudentDashboard/>

            </ProtectedRoute>

          }

        />




        {/* ANY UNKNOWN URL */}

        <Route

          path="*"

          element={<Login/>}

        />



      </Routes>


    </BrowserRouter>
 </div>

  )


}



export default App;