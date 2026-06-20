// import { useEffect, useState } from "react";
// import MainLayout from "../layouts/MainLayout";
// import { toast } from "react-toastify";

// import {
//   getStudents,
//   addFeedback
// } from "../api/teacherApi";

// export default function TeacherStudent() {

//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [selected, setSelected] = useState(null);
//   const [feedback, setFeedback] = useState("");

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   const loadStudents = async () => {
//     try {
//       const res = await getStudents();

//       console.log("STUDENTS API:", res.data);

//       // SAFE PARSING (fixes your map crash forever)
//       const data =
//         Array.isArray(res.data)
//           ? res.data
//           : res.data?.students
//             ? res.data.students
//             : [];

//       setStudents(data);
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed loading students");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendFeedback = async () => {
//     if (!feedback.trim()) {
//       toast.error("Feedback cannot be empty");
//       return;
//     }

//     try {
//       await addFeedback({
//         student_id: selected.id,   // FIXED (was wrong before)
//         message: feedback
//       });

//       toast.success("Feedback sent");

//       setFeedback("");
//       setSelected(null);

//     } catch (err) {
//       console.log(err);
//       toast.error("Feedback failed");
//     }
//   };

//   return (
//     <MainLayout>
//       <div className="dashboard">

//         <h1>Students</h1>
//         <p className="subtitle">
//           Manage student performance and feedback
//         </p>

//         {/* TABLE CARD */}
//         <div style={styles.card}>

//           <h2>Student List</h2>

//           <div style={{ overflowX: "auto" }}>

//             <table style={styles.table}>
//               <thead>
//                 <tr>
//                   <th style={styles.th}>Name</th>
//                   <th style={styles.th}>Email</th>
//                   <th style={styles.th}>Age</th>
//                   <th style={styles.th}>Gender</th>
//                   <th style={{ ...styles.th, textAlign: "center" }}>
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>

//                 {loading ? (
//                   <tr>
//                     <td style={styles.td}>Loading...</td>
//                   </tr>
//                 ) : students.length === 0 ? (
//                   <tr>
//                     <td style={styles.td}>No students found</td>
//                   </tr>
//                 ) : (
//                   students.map((s) => (
//                     <tr key={s.id}>
//                       <td style={styles.td}>
//                         {s.student_name || s.name || "N/A"}
//                       </td>

//                       <td style={styles.td}>
//                         {s.email || "N/A"}
//                       </td>

//                       <td style={styles.td}>
//                         {s.age || "N/A"}
//                       </td>

//                       <td style={styles.td}>
//                         {s.gender || "N/A"}
//                       </td>

//                       <td style={{ ...styles.td, textAlign: "center" }}>
//                         <button
//                           style={styles.button}
//                           onClick={() => setSelected(s)}
//                         >
//                           Give Feedback
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}

//               </tbody>
//             </table>

//           </div>
//         </div>

//         {/* MODAL */}
//         {selected && (
//           <div className="overlay">

//             <div style={styles.modal}>

//               <h2>
//                 Feedback for {selected.student_name || selected.name}
//               </h2>

//               <textarea
//                 placeholder="Write feedback..."
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 style={styles.textarea}
//               />

//               <button
//                 style={styles.button}
//                 onClick={sendFeedback}
//               >
//                 Send Feedback
//               </button>

//               <button
//                 style={styles.delete}
//                 onClick={() => {
//                   setSelected(null);
//                   setFeedback("");
//                 }}
//               >
//                 Cancel
//               </button>

//             </div>

//           </div>
//         )}

//       </div>
//     </MainLayout>
//   );
// }

// /* ================= STYLES ================= */

// const styles = {

//   card: {
//     background: "#1e293b",
//     padding: 20,
//     borderRadius: 12,
//     marginBottom: 20,
//     color: "white"
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
//     borderBottom: "1px solid #334155",
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

//   delete: {
//     background: "#ef4444",
//     color: "white",
//     border: "none",
//     padding: "10px 15px",
//     borderRadius: 8,
//     cursor: "pointer"
//   },

//   modal: {
//     background: "#1e293b",
//     padding: 25,
//     borderRadius: 15,
//     width: 420,
//     display: "grid",
//     gap: 15,
//     margin: "120px auto",
//     color: "white"
//   },

//   textarea: {
//     height: 120,
//     padding: 10,
//     borderRadius: 8,
//     background: "#0b1220",
//     border: "1px solid #334155",
//     color: "white"
//   }
// };



import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { toast } from "react-toastify";

import { getStudents, addFeedback } from "../api/teacherApi";
import "../styles/teacherstd.css";

export default function TeacherStudent() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await getStudents();

      const data =
        Array.isArray(res.data)
          ? res.data
          : res.data?.students
            ? res.data.students
            : [];

      setStudents(data);
    } catch (err) {
      toast.error("Failed loading students");
    } finally {
      setLoading(false);
    }
  };

  const sendFeedback = async () => {
    if (!feedback.trim()) return toast.error("Feedback cannot be empty");

    try {
      await addFeedback({
        student_id: selected.id,
        message: feedback
      });

      toast.success("Feedback sent");
      setFeedback("");
      setSelected(null);

    } catch {
      toast.error("Feedback failed");
    }
  };

  return (
    <MainLayout>

      <div className="teacher-container">

        <h1 className="teacher-title">Students</h1>
        <p className="teacher-subtitle">
          Manage student performance and feedback
        </p>

        {/* TABLE */}
        <div className="teacher-card">

          <h2>Student List</h2>

          <div className="table-wrapper">

            <table className="teacher-table">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {loading ? (
                  <tr>
                    <td colSpan="5" className="empty">
                      Loading...
                    </td>
                  </tr>
                ) : students.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="empty">
                      No students found
                    </td>
                  </tr>
                ) : (
                  students.map((s) => (
                    <tr key={s.id}>
                      <td>{s.student_name || s.name || "N/A"}</td>
                      <td>{s.email || "N/A"}</td>
                      <td>{s.age || "N/A"}</td>
                      <td>{s.gender || "N/A"}</td>
                      <td>
                        <button
                          className="primary-btn"
                          onClick={() => setSelected(s)}
                        >
                          Give Feedback
                        </button>
                      </td>
                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* MODAL */}
        {selected && (
          <div className="overlay">

            <div className="modal">

              <h2>
                Feedback for {selected.student_name || selected.name}
              </h2>

              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write feedback..."
                className="textarea"
              />

              <div className="modal-actions">

                <button className="primary-btn" onClick={sendFeedback}>
                  Send
                </button>

                <button
                  className="danger-btn"
                  onClick={() => {
                    setSelected(null);
                    setFeedback("");
                  }}
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </MainLayout>
  );
}