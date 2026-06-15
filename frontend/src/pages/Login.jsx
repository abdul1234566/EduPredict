import { useState } from "react";
import { loginUser } from "../api/api";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Login(){


const {login} = useAuth();

const navigate = useNavigate();


const [form,setForm]=useState({

email:"",
password:""

});


const [error,setError]=useState("");



const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};



const handleSubmit=async(e)=>{

e.preventDefault();


try{


const res = await loginUser(form);



login(res.data);



if(res.data.role==="admin"){

navigate("/admin");

}

else if(res.data.role==="teacher"){

navigate("/teacher");

}

else if(res.data.role==="student"){

navigate("/student");

}



}
catch(err){

console.log(err);

setError(
"Invalid email or password"
);


}



};



return (

<div
style={{
width:"350px",
margin:"100px auto",
padding:"20px",
border:"1px solid #ddd",
borderRadius:"10px"
}}
>


<h2>
EduPredict Login
</h2>



{
error &&

<p style={{color:"red"}}>

{error}

</p>

}



<form onSubmit={handleSubmit}>


<input

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

/>



<button>

Login

</button>


</form>



</div>


)


}