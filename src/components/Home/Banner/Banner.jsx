import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

import "./Banner.scss";
import BannerImg from "../../../assets/b.png";

const Banner = () => {    
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">                    
                    <TypeAnimation className="lettermove"
      sequence={[        
        'SALES',
        2000,   
        'Order Here',
        2000,
        'Get Discount',
        2000,             
      ]}
      speed={50}
      wrapper="span"
      cursor={true}
                    repeat={Infinity}/>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>                        
                        <div  className="banner-cta v2">Shop Now</div>                        
                        
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
