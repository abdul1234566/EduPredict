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

import UserManagement 
from "./pages/UserManagement";

import StudentProfile 
from "./pages/StudentProfile";

import TeacherStudents 
from "./pages/TeacherStudents";

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

        <Route

path="/admin/users"

element={

<ProtectedRoute role="admin">

<UserManagement/>

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


<Route

path="/teacher/students"

element={

<ProtectedRoute role="teacher">

<TeacherStudents/>

</ProtectedRoute>

}

/>

      {/* STUDENT DASHBOARD */}

<Route
  path="/student"
  element={
    <ProtectedRoute role="student">
      <StudentDashboard />
    </ProtectedRoute>
  }
/>


{/* STUDENT PROFILE */}

<Route
  path="/student/profile"
  element={
    <ProtectedRoute role="student">
      <StudentProfile />
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