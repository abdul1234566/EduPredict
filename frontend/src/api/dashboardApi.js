import API from "./axiosConfig";



export const getStats = () => {

    return API.get(
        "/dashboard/stats"
    );

};



export const getPredictions = () => {

    return API.get(
        "/dashboard/predictions"
    );

};



export const getTrends = () => {

    return API.get(
        "/dashboard/trends"
    );

};