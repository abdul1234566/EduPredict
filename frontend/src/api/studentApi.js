import API from "./axiosConfig";

// get logged-in student profile
export const getMyProfile = () => {
  return API.get("/student/me");
};

// optional: update profile later
export const updateMyProfile = (data)=>{

return API.put(
"/student/me",
data
);

};

export const getFeedback =()=>{

return API.get(
"/student/feedback"
);

};