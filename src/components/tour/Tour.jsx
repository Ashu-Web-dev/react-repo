import React, { useEffect } from "react";
import './tour.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import photo from '../../assets/handdj/service-left.jpg.webp'
import photo1 from '../../assets/handdj/tour-2.jpg.webp'
import photo2 from '../../assets/handdj/tour-3.jpg.webp'

const Tour = () => {
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-out',
            delay: 200,});
    },[])
    return (<>

        <div  data-aos="fade-down"  className="container color">
            <div className="row" style={{ justifyContent: "space-between" }}>
                <div className="col-lg-5 col-md-5 col-sm-5 mt-5" >
                    <h1>Untold Festival 2024</h1>
                    <div className="row">
                        <div className="col-12 col-md-10 border">
                            <p>8:pm | Dec 15, 2024</p>
                            <p>Funkhaus Berlin, Berlin, Germany</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <button className="bts">$35</button>
                        </div>
                    </div>
                    <div className="col-12 fontweight">
                        <p>Held in Europe's electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists.</p>
                        <p>Soundtracking the leap from 2019 into 2020 in one of the city’s most hyped venues, HYTE Berlin NYE is one of the most anticipated nights of the year.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <button className="bts">Buy ticket</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 mt-5 col-sm-12 tour">
                    <div className="row tourch" style={{ position: "relative" }}>
                        <div className="col-lg-12 col-md-12 col-sm-12 tourch1">
                        <img src={photo} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5" style={{ justifyContent: "space-between" }}>
                <div className="col-lg-5 mt-5 col-sm-12 tour">
                    <div className="row tourch" style={{ position: "relative" }}>
                        <div className="col-lg-12  col-md-12 col-sm-12 tourch1"></div>

                        <div className="col-lg-12  col-md-12 col-sm-12 tourch4">
                            <img src={photo1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 mt-5" >
                    <h1>Untold Festival 2024</h1>
                    <div className="row">
                        <div className="col-xl-10 col-md-10 col-sm-10 border">
                            <p>8:pm | Dec 15, 2024</p>
                            <p>Funkhaus Berlin, Berlin, Germany</p>
                        </div>
                        <div className="col-xl-2 col-md-2 col-sm-2">
                            <button className="bts">$35</button>
                        </div>
                    </div>
                    <div className="col-12 fontweight">
                        <p>Held in Europe's electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists.</p>
                        <p>Soundtracking the leap from 2019 into 2020 in one of the city’s most hyped venues, HYTE Berlin NYE is one of the most anticipated nights of the year.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <button className="bts">Buy ticket</button>
                        </div>
                    </div>
                </div>



            </div>
            <div  data-aos="fade-down" className="row mt-5 mb-5" style={{ justifyContent: "space-between" }}>
                <div className="col-lg-5 col-md-5 col-sm-5 mt-5">
                    <h1>Untold Festival 2024</h1>
                    <div className="row">
                        <div className="col-12 col-md-10 border">
                            <p>8:pm | Dec 15, 2024</p>
                            <p>Funkhaus Berlin, Berlin, Germany</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <button className="bts">$35</button>
                        </div>
                    </div>
                    <div className="col-12 fontweight">
                        <p>Held in Europe's electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists.</p>
                        <p>Soundtracking the leap from 2019 into 2020 in one of the city’s most hyped venues, HYTE Berlin NYE is one of the most anticipated nights of the year.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <button className="bts">Buy ticket</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 mt-5 col-sm-12 tour mb-5">
                    <div className="row tourch" style={{ position: "relative" }}>
                        <div className="col-lg-12 col-md-12 col-sm-12 tourch1">
                        <img src={photo2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>





        </div>

    </>)
}
export default Tour