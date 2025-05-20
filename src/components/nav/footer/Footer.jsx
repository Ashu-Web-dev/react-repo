import React from "react";
import img from "../../../assets/footerimg/footer-bg.png.webp"
import  { useState, useEffect } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../../assets/logo/logo.png.webp"
import "./footer.css"
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiBasketball } from "react-icons/ci";
import { IoMdPaperPlane } from "react-icons/io";


const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const myStyle = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", 
        height: window.innerWidth < 700 ? "165vh" : "100vh",
        backgroundPosition:"center"
    }
        return (<>
        <div className="container-fluid footer">
            <div className="row" style={myStyle}>
            </div>
            <div className="row footerchild" style={{  justifyContent:"space-evenly",justifyContent:"center",alignItems:"center",alignContent:"center", }}>
                <div className="col-xl-3 col-md-4 col-sm-4 mt-3 ">
                    <div className="row mt-5">
                        <ul>
                            <li className="footeritem"><FaPhoneAlt className="icon" />
                                <p>Phone</p>
                                <h6>1-677-124-44227
                                </h6>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li className="footeritem">
                                <MdOutlineEmail className="icon" />
                                <p>Email</p>
                                <h6>DJ.Music@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-4 mt-5" >
                    <img src={logo} alt=""/>
                    <div className="row">
                       <div className="col-2 footericon"><CiFacebook className="icons"/></div>
                       <div className="col-2 footericon"><CiTwitter className="icons" /></div>
                       <div className="col-2 footericon"><CiInstagram className="icons" /></div>
                       <div className="col-2 footericon"><CiBasketball  className="icons"/></div>
                    </div>
                        
                </div>
                <div className="col-xl-3 col-md-4 col-sm-4 mt-5">
                    <div className="row">
                        <h3 style={{ color: "white" }}>Stay with me</h3>
                    </div>
                    <div className="row ">
                        <div className="col-4" style={{position:"relative"}}>
                            <input type="text" className="footerinput" placeholder="Email" />
                            <IoMdPaperPlane style={{ color: "green", position:"absolute", fontSize: "35px", top:"2.8px",left:"174px" ,backgroundColor: "white" }} />
                       
                        </div>
                       
                            
                    </div>
                </div>
                 <div className="row mt-5" style={{ color :"white",textAlign:"center"}}>
                <h1>This template made by ashiv</h1>
                </div> 
            </div>
        </div>


    </>)
}
export default Footer