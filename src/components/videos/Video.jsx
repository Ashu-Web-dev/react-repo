import React from "react";
import photo from "../../assets/video/large-item.jpg.webp"
import "./video.css"

const Video=()=>{
   const Style={backgroundImage:`url(${photo})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"} 
return(
    <>
    <div className="container as"style={Style}>
<div className="row" >
    <div className="col-l-12 bg"> 
<h4>Martin Garrix & Pierce Fulton feat. Mike Shinoda - Waiting For Tomorrow (Official Video)</h4>
<span>02:35:18 Dec 17, 2019
</span>

        
            </div> 
            <div className="row">
                <div className="col-2">
                    <a href="https://youtu.be/60ItHLz5WEA?si=P2Ui-nkIYsLvgViz "target="-blank ">play </a>
                </div>
            </div>
        </div>
        

    </div>


    








    
    
    </>



)
}
export default Video