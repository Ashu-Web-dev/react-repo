import React from "react";
import img1 from '../../../assets/youtube/youtube-1.jpg.webp'
import img2 from '../../../assets/youtube/youtube-2.jpg.webp'
import img3 from '../../../assets/youtube/youtube-3.jpg.webp'
import './youtube.css'
const Youtube = () => {
    return (<>
        <div className="container mt-5">
            <div className="row " >
                <div className="col-xl-12 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
                    <h1>YOUTUBE FEED</h1>
                </div>
                <div className="row mt-5 youtube" style={{ justifyContent: "space-around" }}>
                    <div className="col-xl-4 col-md-6 col-sm-6 mt-5 youtubechild">
                        <img src={img1} alt="" />
                        <h4>David Guetta Miami Ultra Music Festival 2019</h4>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-6 mt-5 youtubechild" >
                        <img src={img2} alt="" />
                        <h4>Martin Garrix (Full live-set) | SLAM!Koningsdag</h4>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-6 mt-5 youtubechild">
                        <img src={img3} alt="" />
                        <h4>Dimitri Vegas, Steve Aoki & Like Mike’s “3 Are Legend”</h4>
                    </div>
                </div>
            </div>
        </div>


    </>)
}
export default Youtube