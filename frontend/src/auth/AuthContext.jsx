import {
createContext,
useContext,
useState
}
from "react";


import {jwtDecode} from "jwt-decode";


const AuthContext=createContext();



export function AuthProvider({children}){


const [user,setUser]=useState(()=>{


const token=localStorage.getItem("token");


if(!token)
return null;


return jwtDecode(token);


});




const login=(data)=>{


localStorage.setItem(
"token",
data.access_token
);



const decoded=jwtDecode(
data.access_token
);



localStorage.setItem(
"user",
JSON.stringify(decoded)
);



setUser(decoded);


};




const logout=()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


setUser(null);


};





return(

<AuthContext.Provider

value={{
user,
login,
logout
}}

>

{children}

</AuthContext.Provider>


)

}



export function useAuth(){

return useContext(AuthContext);

}