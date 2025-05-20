import React from "react";
import './discography.css'
import photo1 from '../../assets/discography/disco-1.jpg.webp'
import photo2 from '../../assets/discography/disco-2.jpg.webp'
import photo3 from '../../assets/discography/disco-3.jpg.webp'
import photo4 from '../../assets/discography/disco-4.jpg.webp'
import photo5 from '../../assets/discography/disco-6.jpg.webp'
import photo6 from '../../assets/discography/link-1.jpg.webp'
import photo7 from '../../assets/discography/link-2.jpg.webp'





const Discography = () => {

    return (<>
        <div className="container">
            <div className="row discography mt-5" style={{ textAlign: "center" }}>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                    <h1 >Latest Releases</h1>
                </div>
                <div className="row" >
                    <div className="col-lg-4 col-md-5 col-sm-6 mt-5">
                        <img className="photo" src={photo1} alt="" />
                        <h6>$ 52.00</h6>
                        <p>EDM Party Electro House</p>
                        <a href="">
                            <img className="playstorephoto" src={photo6} alt="" />
                        </a>
                        <a href="">
                            <img className="playstorephoto" src={photo7} alt="" />
                        </a>

                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 mt-5">
                        <img className="photo" src={photo2} alt="" />
                        <h6>$ 52.00</h6>
                        <p>EDM Party Electro House</p>
                        <img className="playstorephoto" src={photo6} alt="" />
                        <img className="playstorephoto" src={photo7} alt="" />

                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 mt-5 ">
                        <img className="photo" src={photo3} alt="" />
                        <h6>$ 52.00</h6>
                        <p>EDM Party Electro House</p>
                        <img className="playstorephoto" src={photo6} alt="" />
                        <img className="playstorephoto" src={photo7} alt="" />
                    </div>
                </div>
            </div>
            <div className="row discography mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12"style={{textAlign:"center"}}>
                    <h1>Latest Releases</h1>
                </div>
                <div className="row" >
                    <div className="col-lg-4 col-md-5 col-sm-6 mt-5">
                        <img className="photo" src={photo4} alt="" />
                        <h6>$ 52.00</h6>
                        <p>EDM Party Electro House</p>
                        <a href="">
                            <img className="playstorephoto" src={photo6} alt="" />
                        </a>
                        <a href="">
                            <img className="playstorephoto" src={photo7} alt="" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 mt-5">
                        <img className="photo" src={photo5} alt="" />
                        <h6>$ 52.00</h6>
                        <p>EDM Party Electro House</p>
                        <img className="playstorephoto" src={photo6} alt="" />
                        <img className="playstorephoto" src={photo7} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 mt-5">
                        <img className="photo" src={photo1} alt="" />
                        <h6>$ 52.00</h6>
                        <p>EDM Party Electro House</p>
                        <img className="playstorephoto" src={photo6} alt="" />
                        <img className="playstorephoto" src={photo7} alt="" />
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                    <button className="btns">1</button>
                    <button className="btns">2</button>
                    <button className="btns">3</button>
                    <button className="btns">Next</button>
                </div>
            </div>


        </div>

    </>)
}
export default Discography