import React from "react";
import './latest.css'
import photo from "../../../assets/latest/track-right.jpg.webp"


const Latest = () => {
    return (<>
        <div className="container bgc"style={{justifyContent:"space-evenly"}}>
            <div className="row mt-5" style={{ justifyContent: "space-between" }}>
                <div className="col-xl-4 col-md-4 col-sm-4">
                    <h1>LATEST TRACK</h1>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-3">
                    <button className="glow">view all ticket</button>
                </div>

            </div>
            <div className="row"style={{justifyContent:"space-evenly"}}>

                <div className="col-xl-7 col-md-8 col-sm-12 mt-3">
                    <div className="row style"><h1>David Guetta Miami Ultra</h1>
                        <div className="col-9 audiostyle">
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                            <audio src="flood.mp3" controls  ></audio>
                        </div>

                    </div>


                </div>
                <div className="col-xl-4 col-md-4 col-sm-12 mt-3 track">
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>



    </>)

}
export default Latest

