import React, { useEffect, useState } from "react";
import './festival.css'
import festi from '../../../assets/festival/countdown-bg.jpg.webp'
const Festival = () => {
    const myStyle = {
        backgroundImage: `url(${festi})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        backgroundPosition: "center"

    }
const[sec,setsec]=useState(0)
useEffect(()=>{
    const interval=setInterval(()=>{
        setsec(prevSecond=>{
            if(prevSecond===59){
                return 0;
            }
return prevSecond+1;
            
        });
    },2000);
    return()=>clearInterval(interval)
},[])

    return (<>
        <div className="container-fluid fest " >
            <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12"style={myStyle}>

                </div>
            </div>
            <div className="row fest1"style={{textAlign:"center"}}>
                <div className="col-xl-11 col-md-11 col-sm-12">
                <h1 className="h1font">
                        Tomorrowland 2020
                    </h1>
                    <h1>
                        Music festival start in
                    </h1>

                </div>
                <div className="row mt-3" style={{ justifyContent: "space-evenly" }}>
                    <div className="col-xl-1 col-md-5 col-sm-5 col-5">
                        <h1>27</h1>
                        <h1>Days</h1>
                    </div>
                    <div className="col-xl-1 col-md-5 col-sm-5 col-5">
                        <h1>  05</h1>
                        <h1>Hours</h1>
                    </div>
                    <div className="col-xl-1 col-md-5 col-sm-5 col-5">
                        <h1>  27</h1>
                        <h1>MINTUS</h1>
                    </div>
                    <div className="col-xl-1 col-md-5 col-sm-5 col-5">
                        <h1>{sec}</h1>
                        <h6>SECOND</h6>
                    </div>
                   <div className="row "style={{textAlign:"center"}}>
                  <div className="col-xl-12 col-md-12 col-sm-12">
                    <button className="festibutton">BUY TICKET</button>
                  </div>
                   </div>
                </div>

                
            </div>
        </div>
         </>)
}
export default Festival


