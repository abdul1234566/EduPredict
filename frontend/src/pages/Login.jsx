import { useState } from "react";

import { loginUser } from "../api/api";

import { saveToken, getUser } from "../auth/auth";



export default function Login(){


    const [form,setForm] = useState({

        email:"",

        password:""

    });



    const [error,setError] = useState("");



    const handleChange = (e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };




    const handleSubmit = async(e)=>{


        e.preventDefault();


        setError("");



        try{


            const res = await loginUser(form);



            // Save JWT token

            saveToken(

                res.data.access_token

            );




            // Decode JWT

            const user = getUser();



            console.log(
                "Logged User:",
                user
            );




            // Role based redirect


            if(user.role === "admin"){


                window.location="/admin";


            }

            else if(user.role === "teacher"){


                window.location="/teacher";


            }

            else if(user.role === "student"){


                window.location="/student";


            }

            else{


                setError(
                    "Invalid user role"
                );


            }




        }

        catch(err){


            console.log(err);



            setError(

                "Invalid email or password"

            );


        }


    };





    return(


        <div

        style={{

            width:"350px",

            margin:"100px auto",

            padding:"20px",

            border:"1px solid #ddd",

            borderRadius:"10px"

        }}

        >


            <h2>

                EduPredict Login

            </h2>




            {
                error &&

                <p

                style={{

                    color:"red"

                }}

                >

                    {error}

                </p>

            }




            <form onSubmit={handleSubmit}>


                <input


                name="email"


                placeholder="Email"


                value={form.email}


                onChange={handleChange}


                style={{

                    display:"block",

                    width:"100%",

                    margin:"10px 0",

                    padding:"10px"

                }}


                />





                <input


                name="password"


                type="password"


                placeholder="Password"


                value={form.password}


                onChange={handleChange}


                style={{

                    display:"block",

                    width:"100%",

                    margin:"10px 0",

                    padding:"10px"

                }}


                />





                <button


                type="submit"


                style={{

                    width:"100%",

                    padding:"10px"

                }}


                >

                    Login


                </button>



            </form>



        </div>


    )


}