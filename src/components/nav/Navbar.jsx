import React, { useState } from "react";
import logo from "../../assets/logo/logo.png.webp"
import "./navbar.css"
import { FaFacebook } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuopen, setMenu]=useState(false)
  const toggelMenu=()=>{
    setMenu(!isMenuopen)
    console.log(isMenuopen)
  }
  

  return (<>
    <div className="container-fluid nav ">
      <div className="container " style={{ position: "relative" }}>
        <div className="row mt-5" >
          <div className="col-2">
            <img src={logo} alt=""  />
          </div>
          <div className="col-8">
            <ul className={isMenuopen?"navchild active":"navchild"}>
              <li><Link className="dec" to="/"onClick={toggelMenu}>HOME</Link></li>
              <li><Link className="dec" to="/about"onClick={toggelMenu}>ABOUT </Link></li>
              <li><Link className="dec" to="/discography"onClick={toggelMenu}>DISCOVERY</Link></li>
              <li><Link className="dec" to="/tour"onClick={toggelMenu}>TOURS</Link></li>
              <li><Link className="dec" to="/pages"onClick={toggelMenu}>PAGES</Link></li>
              <li><Link className="dec" to="/contact"onClick={toggelMenu}>CONTACT</Link></li>
            </ul>
          </div>
          <div className="col-2 navchild2 ">
            <li style={{ Color: "blue" }}><FaFacebook /></li>
          </div>
          

        </div>
        <div className="men" onClick={toggelMenu}>
        <button  style={{  height: "60px", width: "60px", fontSize: "30px" }}><IoMdMenu /></button>



        </div>

      </div>

    </div>

  </>)

}
export default Navbar