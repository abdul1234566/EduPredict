import axios from "axios";


const API = axios.create({

    baseURL:"http://127.0.0.1:8000"

});



export const loginUser = (data)=>{

    return API.post(
        "/auth/login",
        data
    );

};



export const predictStudent = (data)=>{


    return API.post(

        "/predict",

        data,

        {

            headers:{

                Authorization:
                `Bearer ${localStorage.getItem("token")}`

            }

        }

    );

};




export const getStats = ()=>{


    return API.get(

        "/dashboard/stats",

        {

            headers:{

                Authorization:
                `Bearer ${localStorage.getItem("token")}`

            }

        }

    );


};




export const getPredictions = ()=>{


    return API.get(

        "/dashboard/predictions",

        {

            headers:{

                Authorization:
                `Bearer ${localStorage.getItem("token")}`

            }

        }

    );


};