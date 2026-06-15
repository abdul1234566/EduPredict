import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";


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


<BrowserRouter>


<Routes>


<Route

path="/login"

element={<Login/>}

/>



<Route

path="/admin"

element={

<ProtectedRoute role="admin">

<AdminDashboard/>

</ProtectedRoute>

}

/>




<Route

path="/teacher"

element={

<ProtectedRoute role="teacher">

<TeacherDashboard/>

</ProtectedRoute>

}

/>




<Route

path="/student"

element={

<ProtectedRoute role="student">

<StudentDashboard/>

</ProtectedRoute>

}

/>



</Routes>


</BrowserRouter>


)


}


export default App;