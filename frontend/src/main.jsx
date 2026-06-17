import React from 'react'
import "./styles/ui.css";
import ReactDOM from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App.jsx'

import {
AuthProvider
}
from "./auth/AuthContext"



ReactDOM.createRoot(
document.getElementById('root')
)
.render(

<AuthProvider>
<App />
<ToastContainer position="top-right" autoClose={3000} />
</AuthProvider>


)