import {useEffect,useState} from "react";

import MainLayout from "../layouts/MainLayout";

import {getMyFeedback} from "../api/studentApi";

import {toast} from "react-toastify";


export default function StudentFeedback(){


const [feedback,setFeedback]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{

loadFeedback();

},[]);



const loadFeedback=async()=>{


try{


const res=await getMyFeedback();


setFeedback(res.data);



}
catch{

toast.error("Failed loading feedback");

}

finally{

setLoading(false);

}


};




return(


<MainLayout>


<div className="dashboard">


<h1>
Teacher Feedback
</h1>


<p className="subtitle">
View feedback from your teachers
</p>





<div style={styles.card}>


{

loading ?


<p>
Loading...
</p>



:


feedback.length===0 ?


<p>
No feedback available yet
</p>



:


feedback.map(item=>(


<div
key={item.id}
style={styles.item}
>


<h3>
Teacher Comment
</h3>


<p>
{item.message}
</p>


<small>

{
item.created_at?.split("T")[0]
}

</small>



</div>


))


}



</div>


</div>


</MainLayout>


)


}



const styles={


card:{


background:"#1e293b",

padding:20,

borderRadius:12,

color:"white"


},



item:{


background:"#0b1220",

padding:15,

borderRadius:10,

marginBottom:15,

border:"1px solid #334155"


}



}