import API from "./axiosConfig";



export const getUsers = ()=>{

return API.get(
"/admin/users"
);

};



export const createUser=(data)=>{

return API.post(
"/admin/users",
data
);

};



export const updateUser=(id,data)=>{

return API.put(
`/admin/users/${id}`,
data
);

};



export const deleteUser=(id)=>{

return API.delete(
`/admin/users/${id}`
);

};