import axios from "axios";


const API = axios.create({

    baseURL: "http://127.0.0.1:8000"

});



// Attach JWT token automatically
API.interceptors.request.use(

    (config)=>{


        const token = localStorage.getItem("token");


        if(token){

            config.headers.Authorization =
            `Bearer ${token}`;

        }


        return config;


    }

);





// ==========================
// ADMIN + TEACHER DASHBOARD
// ==========================


export const getStats = ()=>{

    return API.get(
        "/dashboard/stats"
    );

};



export const getPredictions = ()=>{

    return API.get(
        "/dashboard/predictions"
    );

};



export const getTrends = ()=>{

    return API.get(
        "/dashboard/trends"
    );

};





// ==========================
// STUDENT DASHBOARD
// ==========================


export const getMyPredictions = ()=>{


    return API.get(
        "/dashboard/my-predictions"
    );


};





export default API;