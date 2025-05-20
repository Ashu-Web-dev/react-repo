import React from "react";
import alex from '../../../assets/ALAXENDRA/about.png.webp'
import './alexendra.css'

const Alexendra=()=>{
return(
    <>
   <div className="container">
    <div className="row alexp">
        <div className="col-xl-6 col-md-6 col-sm-12 alx mt-2"><img src={alex} alt="" /></div>
        <div className="col-xl-6 col-md-6 col-sm-12  alex mt-2">
            <h1>DJ Alexandra Rud</h1>
            <p>About me
            DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out from the norm. As if this impressive succession of high impact, floor-filling bombs wasn’t enough to sustain.</p>
        <button><a href="">CONTACT ME</a></button>
        </div>
    </div>
   </div>
    
    </>
)

}
export default Alexendra