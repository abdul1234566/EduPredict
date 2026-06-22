import API from "./axiosConfig";



export const getStudents = () => {

    return API.get("/teacher/students");

};



export const addFeedback = (student_id, data) => {

    return API.post(
        `/teacher/feedback/${student_id}`,
        data
    );

};