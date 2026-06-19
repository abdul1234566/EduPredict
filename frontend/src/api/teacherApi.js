import axios from "axios";



export const getStudents = () => {

  return axios.get("/teacher/students");

};





export const addFeedback = (data) => {

  return axios.post(
    "/teacher/feedback",
    data
  );

};