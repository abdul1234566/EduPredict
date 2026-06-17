import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";


export default function MainLayout({children}){


const [open,setOpen] = useState(false);



return(

<div className="layout">


<Sidebar
open={open}
setOpen={setOpen}
/>



<div className="main">


<Topbar
setOpen={setOpen}
/>



<div className="content">

{children}

</div>


</div>



</div>


)


}