import { createContext, useContext, useState } from "react";


const AuthContext = createContext();



export function AuthProvider({children}){


const [user,setUser] = useState(

JSON.parse(
localStorage.getItem("user")
)

|| null

);



const login=(data)=>{


const userData={

role:data.role

};



localStorage.setItem(
"token",
data.access_token
);



localStorage.setItem(
"user",
JSON.stringify(userData)
);



setUser(userData);


};



const logout=()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


setUser(null);


};



return (

<AuthContext.Provider

value={{
user,
login,
logout
}}

>

{children}

</AuthContext.Provider>


);


}



export function useAuth(){

return useContext(AuthContext);

}