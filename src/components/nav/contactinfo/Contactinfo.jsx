import React from "react";
import './contact.css'

const Contact =()=>{
return(<>
<div className="container">
    <div className="row mapdiv">
        <div className="col-12 " >
<iframe  className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5961.842631255392!2d76.76482042434189!3d30.71894064089887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedad4a514617%3A0x3fa29dc7e2670034!2sSector%2034%20Exhibtion%20Ground!5e0!3m2!1sen!2sin!4v1736426829778!5m2!1sen!2sin" width="600" height="450" style={{border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}>
</iframe>
        </div>
        <div className="row mt-5 contactdiv">
            <div className="col-4 divch">
<div className="row ">
    <h1>CONTACT INFO</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
</div>
<div className="row">
    <div className="div"></div>
    <h4>ADDRESS</h4>
<p>Los Angeles Gournadi, 1230 Bariasl</p>
</div>
<div className="row">
    <div className="div">

    </div>
    <h5>HOTLINE</h5>
    <span>1-677-124-44227</span>
    <span>1-677-124-44227</span>
    
</div>
<div className="row">
   
 
    <h2>Email</h2>
    <p>Support@gamail.com</p>
</div>
<div className="row">

</div>

            </div>
            <div className="col-8 dip">
                <div className="row ">
                    <h1>GET IN TOUCH</h1>
                    <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <div className="row dipchild">
                   <div className="col-4 mt-2">
                    <input type="text" placeholder="Name" />
                   </div>
                   <div className="col-4 mt-2">
                    <input type="email" placeholder="Email" />
                   </div>
                   <div className="col-4 mt-2">
                    <input type="text" placeholder="Website" />
                   </div>
                  
                </div>
                <div className="row mt-4">
                    <textarea style={{width:"92%",marginLeft:"15px"}} name="" placeholder="Comment"></textarea>
                </div>
                <div className="row mt-4 ">
                    <div className="col-12">
                        <button style={{color:"white" ,width:"95%",height:"40px",backgroundColor:"blueviolet"}}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



</>)

}
export default Contact