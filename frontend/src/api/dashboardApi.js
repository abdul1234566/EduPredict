import axios from "axios";


const API = axios.create({

baseURL:"http://127.0.0.1:8000"

});


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

export const getMyPredictions = () => {

return api.get(
"/dashboard/my-predictions"
);

};


};