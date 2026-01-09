import React from "react";
import { useNavigate } from "react-router-dom";
function About(){
const navigate=useNavigate();
return(<>
<h1>About</h1>
<button onClick={()=>navigate('/')}>Home</button>
</>)
}
export default About;