// import { useEffect, useState } from "react";

// import MainLayout from "../layouts/MainLayout";

// import {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser
// } from "../api/adminApi";

// import { toast } from "react-toastify";



// export default function UserManagement(){


// const [users,setUsers]=useState([]);

// const [loading,setLoading]=useState(true);


// const [search,setSearch]=useState("");

// const [roleFilter,setRoleFilter]=useState("all");


// const [page,setPage]=useState(1);

// const pageSize=5;



// const [edit,setEdit]=useState(null);



// const [form,setForm]=useState({

// name:"",
// email:"",
// password:"",
// role:"teacher"

// });

// export default function UserManagement() {


//   const [users, setUsers] = useState([]);

//   const [loading, setLoading] = useState(true);


//   const [search, setSearch] = useState("");

//   const [roleFilter, setRoleFilter] = useState("all");


//   const [page, setPage] = useState(1);

//   const pageSize = 5;



//   const [edit, setEdit] = useState(null);



//   const [form, setForm] = useState({

//     name: "",
//     email: "",
//     password: "",
//     role: "teacher"

//   });






// useEffect(()=>{

// loadUsers();

// },[]);



// const loadUsers=async()=>{

// try{

// const res=await getUsers();

// setUsers(res.data);


// }

// catch{

// toast.error("Failed loading users");

// }

// finally{

// setLoading(false);

// }

//   useEffect(() => {

//     loadUsers();

//   }, []);



//   const loadUsers = async () => {

//     try {

//       const res = await getUsers();

//       setUsers(res.data);


//     }

//     catch {

//       toast.error("Failed loading users");

//     }

//     finally {

//       setLoading(false);

//     }


//   };






//   const handleCreate = async (e) => {

//     e.preventDefault();


//     try {


//       await createUser(form);


//       toast.success("User created");


//       setForm({

//         name: "",
//         email: "",
//         password: "",
//         role: "teacher"

//       });


//       loadUsers();


//     }


//     catch {

//       toast.error("Create failed");

//     }


//   };







//   const saveEdit = async () => {


//     try {


//       await updateUser(
//         edit.id,
//         edit
//       );


//       toast.success("Updated");


//       setEdit(null);


//       loadUsers();


//     }

//     catch {

//       toast.error("Update failed");

//     }


//   };





//   const handleDelete = async (id) => {


//     try {


//       await deleteUser(id);


//       toast.success("Deleted");


//       loadUsers();



//     }

//     catch {

//       toast.error("Delete failed");

//     }


//   };





//   const filteredUsers = users

//     .filter(u =>

//       u.name.toLowerCase()
//         .includes(search.toLowerCase())

//       ||
//       u.email.toLowerCase()
//         .includes(search.toLowerCase())

//     )


//     .filter(u =>

//       roleFilter === "all"
//         ?
//         true
//         :
//         u.role === roleFilter

//     );




//   const pages = Math.ceil(
//     filteredUsers.length / pageSize
//   );



//   const paginated =
//     filteredUsers.slice(
//       (page - 1) * pageSize,
//       page * pageSize
//     );







//   return (

//     <MainLayout>


//       <div className="dashboard">


//         <h1>
//           User Management
//         </h1>





//         {/* CREATE */}


//         <div style={styles.card}>


//           <h2>
//             Create User
//           </h2>



//           <form style={styles.grid}
//             onSubmit={handleCreate}
//           >


//             <input
//               placeholder="Name"
//               value={form.name}
//               onChange={e =>
//                 setForm({ ...form, name: e.target.value })
//               }
//               style={styles.input}
//             />



//             <input
//               placeholder="Email"
//               value={form.email}
//               onChange={e =>
//                 setForm({ ...form, email: e.target.value })
//               }
//               style={styles.input}
//             />




//             <input
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={e =>
//                 setForm({ ...form, password: e.target.value })
//               }
//               style={styles.input}
//             />



//             <select

//               value={form.role}

//               onChange={e =>
//                 setForm({ ...form, role: e.target.value })
//               }

//               style={styles.input}

//             >


//               <option>
//                 teacher
//               </option>

//               <option>
//                 student
//               </option>

//               <option>
//                 admin
//               </option>


//             </select>




//             <button style={styles.button}>

//               Create User

//             </button>


//           </form>



//         </div>







//         {/* SEARCH */}



//         <div style={styles.card}>


//           <h2>
//             Users
//           </h2>


//           <div style={styles.controls}>


//             <input

//               placeholder="Search users..."

//               value={search}

//               onChange={e => {

//                 setSearch(e.target.value);
//                 setPage(1);

//               }}

//               style={styles.input}

//             />



//             <select

//               value={roleFilter}

//               onChange={e => {

//                 setRoleFilter(e.target.value);
//                 setPage(1);

//               }}

//               style={styles.input}

//             >


//               <option value="all">
//                 All Roles
//               </option>

//               <option value="admin">
//                 Admin
//               </option>

//               <option value="teacher">
//                 Teacher
//               </option>

//               <option value="student">
//                 Student
//               </option>


//             </select>



//           </div>







//           <div style={{ overflowX: "auto" }}>


//             <table style={styles.table}>


//               <thead>


//                 <tr>


//                   <th style={styles.th}>
//                     Name
//                   </th>


//                   <th style={styles.th}>
//                     Email
//                   </th>


//                   <th style={styles.th}>
//                     Role
//                   </th>


//                   <th style={{
//                     ...styles.th,
//                     textAlign: "center"
//                   }}>
//                     Actions
//                   </th>


//                 </tr>


//               </thead>



//               <tbody>



//                 {

//                   loading ?


//                     <tr>

//                       <td style={styles.td}>
//                         Loading...
//                       </td>

//                     </tr>



//                     :


//                     paginated.map(u => (


//                       <tr key={u.id}>


//                         <td style={styles.td}>
//                           {u.name}
//                         </td>


//                         <td style={styles.td}>
//                           {u.email}
//                         </td>


//                         <td style={styles.td}>
//                           {u.role}
//                         </td>




//                         <td style={{
//                           ...styles.td,
//                           textAlign: "center"
//                         }}>


//                           <div style={styles.actions}>


//                             <button

//                               style={styles.edit}

//                               onClick={() => setEdit(u)}

//                             >

//                               Edit

//                             </button>




//                             <button

//                               style={styles.delete}

//                               onClick={() => handleDelete(u.id)}

//                             >

//                               Delete

//                             </button>



//                           </div>


//                         </td>



//                       </tr>


//                     ))


//                 }



//               </tbody>



//             </table>


//           </div>






//           <div style={styles.pagination}>


//             <button

//               style={styles.button}

//               disabled={page === 1}

//               onClick={() => setPage(page - 1)}

//             >
//               Prev
//             </button>



//             <span>
//               Page {page}/{pages || 1}
//             </span>



//             <button

//               style={styles.button}

//               disabled={page === pages}

//               onClick={() => setPage(page + 1)}

//             >

//               Next

//             </button>


//           </div>



//         </div>










//         {
//           edit &&


//           <div className="overlay">


//             <div style={styles.modal}>


//               <h2>
//                 Edit User
//               </h2>


//               <input

//                 value={edit.name}

//                 onChange={e =>
//                   setEdit({
//                     ...edit,
//                     name: e.target.value
//                   })
//                 }

//                 style={styles.input}

//               />




//               <input

//                 value={edit.email}

//                 onChange={e =>
//                   setEdit({
//                     ...edit,
//                     email: e.target.value
//                   })
//                 }

//                 style={styles.input}

//               />



//               <select

//                 value={edit.role}

//                 onChange={e =>
//                   setEdit({
//                     ...edit,
//                     role: e.target.value
//                   })
//                 }

//                 style={styles.input}

//               >


//                 <option>
//                   admin
//                 </option>

//                 <option>
//                   teacher
//                 </option>

//                 <option>
//                   student
//                 </option>


//               </select>




//               <button

//                 style={styles.button}

//                 onClick={saveEdit}

//               >

//                 Save

//               </button>



//               <button

//                 style={styles.delete}

//                 onClick={() => setEdit(null)}

//               >

//                 Cancel

//               </button>



//             </div>


//           </div>


//         }



//       </div>


//     </MainLayout>


//   )

// }







// const styles = {


//   card: {

//     background: "#1e293b",

//     padding: 20,

//     borderRadius: 12,

//     marginBottom: 20,

//     color: "white"

//   },


//   grid: {

//     display: "grid",

//     gridTemplateColumns:
//       "repeat(auto-fit,minmax(220px,1fr))",

//     gap: 15

//   },


//   controls: {

//     display: "flex",

//     gap: 15,

//     margin: "20px 0",

//     flexWrap: "wrap"

//   },


//   input: {

//     padding: 10,

//     borderRadius: 8,

//     border: "1px solid #334155",

//     background: "#0b1220",

//     color: "white"

//   },


//   button: {

//     background: "#3b82f6",

//     color: "white",

//     border: "none",

//     padding: "10px 15px",

//     borderRadius: 8,

//     cursor: "pointer"

//   },


//   table: {

//     width: "100%",

//     borderCollapse: "collapse",

//     color: "white"

//   },


//   th: {

//     padding: 15,

//     textAlign: "left",

//     color: "#cbd5e1",

//     borderBottom: "1px solid #334155"

//   },


//   td: {

//     padding: 15,

//     borderBottom: "1px solid #334155"

//   },



//   actions: {

//     display: "flex",

//     justifyContent: "center",

//     gap: 12

//   },


//   edit: {

//     background: "#3b82f6",

//     color: "white",

//     border: "none",

//     padding: "7px 14px",

//     borderRadius: 6

//   },



//   delete: {

//     background: "#ef4444",

//     color: "white",

//     border: "none",

//     padding: "7px 14px",

//     borderRadius: 6

//   },



//   pagination: {

//     marginTop: 20,

//     display: "flex",

//     justifyContent: "center",

//     alignItems: "center",

//     gap: 20,

//     color: "white"

//   },



//   modal: {

//     background: "#1e293b",

//     padding: 25,

//     borderRadius: 15,

//     width: 350,

//     display: "grid",

//     gap: 15,

//     margin: "100px auto",

//     color: "white"

//   }
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d


// };




<<<<<<< HEAD


// const handleCreate=async(e)=>{

// e.preventDefault();


// try{


// await createUser(form);


// toast.success("User created");


// setForm({

// name:"",
// email:"",
// password:"",
// role:"teacher"

// });


// loadUsers();


// }


// catch{

// toast.error("Create failed");

// }


// };







// const saveEdit=async()=>{


// try{


// await updateUser(
// edit.id,
// edit
// );


// toast.success("Updated");


// setEdit(null);


// loadUsers();


// }

// catch{

// toast.error("Update failed");

// }


// };





// const handleDelete=async(id)=>{


// try{


// await deleteUser(id);


// toast.success("Deleted");


// loadUsers();



// }

// catch{

// toast.error("Delete failed");

// }


// };





// const filteredUsers = users

// .filter(u=>

// u.name.toLowerCase()
// .includes(search.toLowerCase())

// ||
// u.email.toLowerCase()
// .includes(search.toLowerCase())

// )


// .filter(u=>

// roleFilter==="all"
// ?
// true
// :
// u.role===roleFilter

// );




// const pages=Math.ceil(
// filteredUsers.length/pageSize
// );



// const paginated =
// filteredUsers.slice(
// (page-1)*pageSize,
// page*pageSize
// );







// return(

// <MainLayout>


// <div className="dashboard">


// <h1>
// User Management
// </h1>





// {/* CREATE */}


// <div style={styles.card}>


// <h2>
// Create User
// </h2>



// <form style={styles.grid}
// onSubmit={handleCreate}
// >


// <input
// placeholder="Name"
// value={form.name}
// onChange={e=>
// setForm({...form,name:e.target.value})
// }
// style={styles.input}
// />



// <input
// placeholder="Email"
// value={form.email}
// onChange={e=>
// setForm({...form,email:e.target.value})
// }
// style={styles.input}
// />




// <input
// type="password"
// placeholder="Password"
// value={form.password}
// onChange={e=>
// setForm({...form,password:e.target.value})
// }
// style={styles.input}
// />



// <select

// value={form.role}

// onChange={e=>
// setForm({...form,role:e.target.value})
// }

// style={styles.input}

// >


// <option>
// teacher
// </option>

// <option>
// student
// </option>

// <option>
// admin
// </option>


// </select>




// <button style={styles.button}>

// Create User

// </button>


// </form>



// </div>







// {/* SEARCH */}



// <div style={styles.card}>


// <h2>
// Users
// </h2>


// <div style={styles.controls}>


// <input

// placeholder="Search users..."

// value={search}

// onChange={e=>{

// setSearch(e.target.value);
// setPage(1);

// }}

// style={styles.input}

// />



// <select

// value={roleFilter}

// onChange={e=>{

// setRoleFilter(e.target.value);
// setPage(1);

// }}

// style={styles.input}

// >


// <option value="all">
// All Roles
// </option>

// <option value="admin">
// Admin
// </option>

// <option value="teacher">
// Teacher
// </option>

// <option value="student">
// Student
// </option>


// </select>



// </div>







// <div style={{overflowX:"auto"}}>


// <table style={styles.table}>


// <thead>


// <tr>


// <th style={styles.th}>
// Name
// </th>


// <th style={styles.th}>
// Email
// </th>


// <th style={styles.th}>
// Role
// </th>


// <th style={{
// ...styles.th,
// textAlign:"center"
// }}>
// Actions
// </th>


// </tr>


// </thead>



// <tbody>



// {

// loading ?


// <tr>

// <td style={styles.td}>
// Loading...
// </td>

// </tr>



// :


// paginated.map(u=>(


// <tr key={u.id}>


// <td style={styles.td}>
// {u.name}
// </td>


// <td style={styles.td}>
// {u.email}
// </td>


// <td style={styles.td}>
// {u.role}
// </td>




// <td style={{
// ...styles.td,
// textAlign:"center"
// }}>


// <div style={styles.actions}>


// <button

// style={styles.edit}

// onClick={()=>setEdit(u)}

// >

// Edit

// </button>




// <button

// style={styles.delete}

// onClick={()=>handleDelete(u.id)}

// >

// Delete

// </button>



// </div>


// </td>



// </tr>


// ))


// }



// </tbody>



// </table>


// </div>






// <div style={styles.pagination}>


// <button

// style={styles.button}

// disabled={page===1}

// onClick={()=>setPage(page-1)}

// >
// Prev
// </button>



// <span>
// Page {page}/{pages || 1}
// </span>



// <button

// style={styles.button}

// disabled={page===pages}

// onClick={()=>setPage(page+1)}

// >

// Next

// </button>


// </div>



// </div>










// {
// edit &&


// <div className="overlay">


// <div style={styles.modal}>


// <h2>
// Edit User
// </h2>


// <input

// value={edit.name}

// onChange={e=>
// setEdit({
// ...edit,
// name:e.target.value
// })
// }

// style={styles.input}

// />




// <input

// value={edit.email}

// onChange={e=>
// setEdit({
// ...edit,
// email:e.target.value
// })
// }

// style={styles.input}

// />



// <select

// value={edit.role}

// onChange={e=>
// setEdit({
// ...edit,
// role:e.target.value
// })
// }

// style={styles.input}

// >


// <option>
// admin
// </option>

// <option>
// teacher
// </option>

// <option>
// student
// </option>


// </select>




// <button

// style={styles.button}

// onClick={saveEdit}

// >

// Save

// </button>



// <button

// style={styles.delete}

// onClick={()=>setEdit(null)}

// >

// Cancel

// </button>



// </div>


// </div>


// }



// </div>


// </MainLayout>


// )

// }







// const styles={


// card:{

// background:"#1e293b",

// padding:20,

// borderRadius:12,

// marginBottom:20,

// color:"white"

// },


// grid:{

// display:"grid",

// gridTemplateColumns:
// "repeat(auto-fit,minmax(220px,1fr))",

// gap:15

// },


// controls:{

// display:"flex",

// gap:15,

// margin:"20px 0",

// flexWrap:"wrap"

// },


// input:{

// padding:10,

// borderRadius:8,

// border:"1px solid #334155",

// background:"#0b1220",

// color:"white"

// },


// button:{

// background:"#3b82f6",

// color:"white",

// border:"none",

// padding:"10px 15px",

// borderRadius:8,

// cursor:"pointer"

// },


// table:{

// width:"100%",

// borderCollapse:"collapse",

// color:"white"

// },


// th:{

// padding:15,

// textAlign:"left",

// color:"#cbd5e1",

// borderBottom:"1px solid #334155"

// },


// td:{

// padding:15,

// borderBottom:"1px solid #334155"

// },



// actions:{

// display:"flex",

// justifyContent:"center",

// gap:12

// },


// edit:{

// background:"#3b82f6",

// color:"white",

// border:"none",

// padding:"7px 14px",

// borderRadius:6

// },



// delete:{

// background:"#ef4444",

// color:"white",

// border:"none",

// padding:"7px 14px",

// borderRadius:6

// },



// pagination:{

// marginTop:20,

// display:"flex",

// justifyContent:"center",

// alignItems:"center",

// gap:20,

// color:"white"

// },



// modal:{

// background:"#1e293b",

// padding:25,

// borderRadius:15,

// width:350,

// display:"grid",

// gap:15,

// margin:"100px auto",

// color:"white"

// }


// };






=======
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../api/adminApi";

import { toast } from "react-toastify";

import "../styles/usermanage.css";

export default function UserManagement() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const [page, setPage] = useState(1);
  const pageSize = 6;

  const [edit, setEdit] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "teacher"
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch {
      toast.error("Failed loading users");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createUser(form);
      toast.success("User created");

      setForm({
        name: "",
        email: "",
        password: "",
        role: "teacher"
      });

      loadUsers();
    } catch {
      toast.error("Create failed");
    }
  };

  const saveEdit = async () => {
    try {
      await updateUser(edit.id, edit);
      toast.success("Updated");
      setEdit(null);
      loadUsers();
    } catch {
      toast.error("Update failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success("Deleted");
      loadUsers();
    } catch {
      toast.error("Delete failed");
    }
  };

  const filteredUsers = users
    .filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter(u =>
      roleFilter === "all" ? true : u.role === roleFilter
    );

  const pages = Math.ceil(filteredUsers.length / pageSize);

  const paginated = filteredUsers.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <MainLayout>

      <div className="user-container">

        <h1 className="user-title">👥 User Management</h1>

        {/* CREATE USER */}
        <div className="user-card">

          <h2>Create New User</h2>

          <form className="user-grid" onSubmit={handleCreate}>

            <input placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="user-input"
            />

            <input placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="user-input"
            />

            <input type="password"
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="user-input"
            />

            <select
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value })}
              className="user-input"
            >
              <option>teacher</option>
              <option>student</option>
              <option>admin</option>
            </select>

            <button className="primary-btn">Create User</button>

          </form>

        </div>

        {/* FILTERS */}
        <div className="user-card filter-bar">

          <input
            placeholder="Search users..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="user-input"
          />

          <select
            value={roleFilter}
            onChange={e => { setRoleFilter(e.target.value); setPage(1); }}
            className="user-input"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>

        </div>

        {/* TABLE */}
        <div className="user-card">

          <div className="table-wrapper">

            <table className="user-table">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {loading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  paginated.map(u => (
                    <tr key={u.id}>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>
                        <span className={`role ${u.role}`}>
                          {u.role}
                        </span>
                      </td>
                      <td>
                        <div className="action-row">

                          <button
                            className="edit-btn"
                            onClick={() => setEdit(u)}
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(u.id)}
                          >
                            Delete
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>

          {/* PAGINATION */}
          <div className="pagination">

<<<<<<< HEAD
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Prev
            </button> 

            <span>{page} / {pages || 1}</span>

             <button onClick={() => setPage(page + 1)} disabled={page === pages}>
              Next
            </button>
=======
            {/* <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Prev
            </button> */}

            {/* <span>{page} / {pages || 1}</span> */}

            {/* <button onClick={() => setPage(page + 1)} disabled={page === pages}>
              Next
            </button> */}
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d

          </div>

        </div>

        {/* EDIT MODAL */}
        {edit && (
          <div className="overlay">

            <div className="modal">

              <h2>Edit User</h2>

              <input
                value={edit.name}
                onChange={e => setEdit({ ...edit, name: e.target.value })}
                className="user-input"
              />

              <input
                value={edit.email}
                onChange={e => setEdit({ ...edit, email: e.target.value })}
                className="user-input"
              />

              <select
                value={edit.role}
                onChange={e => setEdit({ ...edit, role: e.target.value })}
                className="user-input"
              >
                <option>admin</option>
                <option>teacher</option>
                <option>student</option>
              </select>

              <button className="primary-btn" onClick={saveEdit}>
                Save
              </button>

              <button className="delete-btn" onClick={() => setEdit(null)}>
                Cancel
              </button>

            </div>

          </div>
        )}

      </div>

    </MainLayout>
  );
}
