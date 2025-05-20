import React from "react";
import djhand from "../../../assets/handdj/service-left.jpg.webp"
import './djclubs.css'
import img1 from '../../../assets/handdj/service-1.png.webp'
import img2 from '../../../assets/handdj/service-2.png.webp'
import img3 from '../../../assets/handdj/service-3.png.webp'
import img4 from '../../../assets/handdj/service-4.png.webp'




const Djclubs=()=>{
    return(<>
    <div className="container-fluid mt-5 djdiv">
       <div className="row " >
        <div className="col-xl-6 col-md-12 col-sm-12 djhand">
            <img src={djhand} alt="" />
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12 " >
            <div className="row djrow">
              <div className="col-6 ch">
                    <img src={img1} alt="" />
                    <h5>Wedding</h5>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div className="col-6 ch">
                  <img src={img2} alt="" />
                  <h5>Clubs and bar</h5>
                  <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
            </div>
            <div className="row djrow ">
                <div className="col-6 ch">
                  <img src={img3} alt="" />
                  <h5>Corporate events</h5>
                  <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <div className="col-6 ch">
                  <img src={img4} alt="" />
                  <h5>DJ lessons</h5>
                  <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
            </div>
             
        </div>
       </div>
    </div>
    </>)
}
export default Djclubs