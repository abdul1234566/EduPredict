import { jwtDecode } from "jwt-decode";



export function saveToken(token){


    localStorage.setItem(
        "token",
        token
    );


}




export function getUser(){


    const token =
    localStorage.getItem("token");



    if(!token){

        return null;

    }



    return jwtDecode(token);

}




export function logout(){


    localStorage.removeItem(
        "token"
    );


    window.location="/";

}