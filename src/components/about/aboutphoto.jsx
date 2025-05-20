import React from "react";
import photo from '../../assets/about/ap-1.jpg.webp'
import photo1 from '../../assets/about/ap-2.jpg.webp'
import photo2 from '../../assets/about/ap-3.jpg.webp'
import photo3 from '../../assets/about/ap-4.jpg.webp'
import photo4 from '../../assets/about/ap-5.jpg.webp'
import photo5 from '../../assets/about/ap-6.jpg.webp'
import photo6 from '../../assets/about/ap-7.jpg.webp'
import "./aboutphoto.css"

const Aboutphoto = () => {
    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="row mt-2">
                    <div className="col-lg-6">
                        <div className="row aboutphoto">
                            <div className="col-lg-4 col-md-4 col-sm-4 ">
                                <div className="row mt-2 ">
                                    <img src={photo} alt="" />
                                </div>
                                <div className="row   mt-4">
                                    <img src={photo1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 mt-2">
                                <img src={photo2} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6  mt-2 ">
                        <div className="row aboutphoto">
                            <div className="col-lg-8 col-md-8 col-sm-8 mt-2 ">
                                <img src={photo3} alt="" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 mt-2">
                                <img src={photo4} alt="" />
                            </div>
                        </div>
                        <div className="row aboutphoto">
                            <div className="col-lg-4 col-md-4 col-sm-4 mt-3">
                                <img src={photo5} alt="" />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 mt-3 ">
                                <img src={photo6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Aboutphoto