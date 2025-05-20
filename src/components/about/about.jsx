import React from "react";
import Contact from "../nav/contactinfo/Contactinfo";
import "./about.css"


const About = () => {
    return (
        <>
            <div className="container about mt-5">
                <div className="row aboutch">
                    <div className="col-xl-6 col-md-6 col-sm-6 linegp">
                        <h1>
                            DJ Alexandra Rud
                        </h1>
                        <p>
                            DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out from the norm.
                        </p>
                        <div className="row ">
                            <div className="col-xl-2 col-md-2 col-sm-2">
                                <p>Perform</p>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2">
                                <p style={{ marginLeft: "360px" }}>95%</p>
                                <div className="div linep " >
                                    <div className="div linec ">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-md-2 col-sm-2">
                                <p>Perform</p>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2">
                                <p style={{ marginLeft: "360px" }}>95%</p>
                                <div className="div linep " >
                                    <div className="div linec "></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-md-2 col-sm-2">
                                <p>Perform</p>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2">
                                <p style={{ marginLeft: "360px" }}>95%</p>
                                <div className="div linep " >
                                    <div className="div linec "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-6 background  ">
                    </div>
                </div>
            </div>
        </>
    )
}
export default About