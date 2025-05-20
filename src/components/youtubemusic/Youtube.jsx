import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from '../../assets/cardcrousalimages/event-2.jpg.webp'
import "./youtube.css"


const Card = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,     
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<>
        <div className="container mt-5 mb-5 crousalparent" style={{ height: "500px" }}>
            <Slider {...settings}>
              
                <div className=" crousal" >
                   <img src={photo} alt="" />
                   <button className="cardbutton">dec 15 2019</button>
                   <h4>David Gueeta  Miaami Ultra</h4>
                </div>
                <div className="crousal">
                <img src={photo} alt="" />
                <button className="cardbutton">dec 15 2019</button>
                <h4>David Gueeta  Miaami Ultra</h4>
                </div>
                <div className="crousal">
                <img src={photo} alt="" />
                <button className="cardbutton">dec 15 2019</button>
                <h4>David Gueeta  Miaami Ultra</h4>
                </div>
                <div className="crousal">
                <img src={photo} alt="" />
                <button className="cardbutton">dec 15 2019</button>
                <h4>David Gueeta  Miaami Ultra</h4>
                </div>
                <div className="crousal">
                <img src={photo} alt="" />
                <button className="cardbutton">dec 15 2019</button>
                <h4>David Gueeta  Miaami Ultra</h4>
                </div>


            </Slider>
        </div>

    </>)
}
export default Card