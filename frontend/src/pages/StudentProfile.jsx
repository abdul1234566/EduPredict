import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import {
getMyProfile,
updateMyProfile
}
from "../api/studentApi";

import {toast} from "react-toastify";


export default function StudentProfile(){


const [profile,setProfile]=useState(null);

const [edit,setEdit]=useState(false);

const [loading,setLoading]=useState(true);



const [form,setForm]=useState({

age:"",
gender:""

});



useEffect(()=>{

loadProfile();

},[]);



const loadProfile=async()=>{

try{

const res=await getMyProfile();

setProfile(res.data);


setForm({

age:res.data.age || "",
gender:res.data.gender || ""

});


}

catch{

toast.error("Failed loading profile");

}

finally{

setLoading(false);

}


};



const save=async()=>{


try{


await updateMyProfile(form);


toast.success(
"Profile updated"
);


setEdit(false);

loadProfile();


}

catch{

toast.error(
"Update failed"
);


}


};





if(loading){

return(

<MainLayout>

<h2 style={{color:"white"}}>
Loading...
</h2>

</MainLayout>

)

}



return(

<MainLayout>


<div className="dashboard">


<h1>
My Profile
</h1>


<p className="subtitle">
Student account details
</p>



<div style={styles.card}>


<Row
title="Name"
value={profile?.name}
/>



<Row
title="Email"
value={profile?.email}
/>



<Row
title="Age"
value={profile?.age || "Not set"}
/>



<Row
title="Gender"
value={profile?.gender || "Not set"}
/>



<Row
title="Student ID"
value={profile?.id}
/>




<button

onClick={()=>setEdit(true)}

style={styles.button}

>

Edit Profile

</button>



</div>





{
edit &&

<div className="profile-modal">


<div className="profile-modal-box">


<h2>
Edit Profile
</h2>



<label>
Age
</label>


<input

value={form.age}

onChange={
e=>setForm({
...form,
age:e.target.value
})
}

/>




<label>
Gender
</label>


<select

value={form.gender}

onChange={
e=>setForm({
...form,
gender:e.target.value
})
}

>


<option>
Male
</option>


<option>
Female
</option>


<option>
Other
</option>


</select>



<button

onClick={save}

style={styles.button}

>

Save

</button>



<button

onClick={()=>setEdit(false)}

style={styles.cancel}

>

Cancel

</button>



</div>

</div>

}



</div>


</MainLayout>


)

}





function Row({title,value}){


return(

<div style={styles.row}>

<span>
{title}
</span>


<b>
{value}
</b>


</div>

)

}




const styles={


card:{

background:"#111a2e",

padding:"25px",

borderRadius:"15px",

color:"white",

border:"1px solid #1f2a44",

marginTop:"20px"

},



row:{

display:"flex",

justifyContent:"space-between",

padding:"12px 0",

borderBottom:"1px solid #1f2a44"

},



button:{

marginTop:"20px",

background:"#3b82f6",

color:"white",

border:"none",

padding:"12px 20px",

borderRadius:"8px",

cursor:"pointer"

},



cancel:{

marginLeft:"10px",

background:"#ef4444",

color:"white",

border:"none",

padding:"12px 20px",

borderRadius:"8px"

}




}