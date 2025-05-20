import React from "react";
import photo from '../../assets/about/as-1.jpg.webp'
import photo1 from '../../assets/about/as-2.jpg (1).webp'
import photo2 from '../../assets/about/as-2.jpg.webp'
import photo3 from '../../assets/handdj/service-1.png.webp'
import "./aboutcard.css"


const Aboutcards = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row"style={{textAlign:"center"}}>
               <h1> WHERE DO I PLAY</h1>
                </div>
                <div className="row aboutcards" style={{justifyContent:"space-between"}}>
                    <div className="col-lg-3  aboutcardchild mt-5">
                        <img src={photo} alt="" />
                      <div className="logoic">
                        <img src={photo3}alt="" /></div>
                        <h1>Weading</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 aboutcardchild mt-5">
                        <img src={photo1} alt="" />
                        <h1>
                            Clubs and bar
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </p>
                    </div>
                    <div className="col-lg-3 aboutcardchild mt-5">
                        <img src={photo2} alt="" />
                        <h1>Corporate events</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </div>


                </div>

            </div>


        </>
    )
}
export default Aboutcards