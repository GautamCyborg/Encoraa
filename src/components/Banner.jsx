import React from 'react';

import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/animate.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'

import video from "../assets/media/video1.mp4"

const Banner = () => {
  return (
    <div className="banner1">
      <video  muted className="bg-vid" width="600" height="300">
        <source src={video} type="video/mp4" />
      </video>
      <div className="bg-overlay"></div>
      <div id="light">
        <div id="lineh1"></div>
        <div className="vertline"></div>
        <div id="lineh2"></div>
        <div id="lineh3"></div>
        <div id="lineh4"></div>
        <div className="vertline2"></div>
        <div id="lineh5"></div>
        <div id="lineh6"></div>
        <div id="lineh7"></div>
        <div id="lineh8"></div>
        <div className="vertline3"></div>
        <div id="lineh9"></div>
        <div id="lineh10"></div>
        <div id="lineh11"></div>
        <div className="vertline4"></div>
        <div id="lineh12"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 dmb-center">
            <div className="banner-content">
              <div className="row">
                <div className="col-xl-5">
                  <div
                    className="banner__image wow fadeInLeft"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                  >
                    <div className="banner__image-text d-none">
                      <img src="/images/banner/text.png" alt="strock-text" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-7">
                  <h4
                    className="wow fadeInUp text-white gradient-color"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                    style={{ fontSize: 'x-large', fontWeight: 'bold' }}
                  >
                    Embrace the <span className="gradient-color-green">Green</span>, Sow the <span className="gradient-color-green">Future</span>
                  </h4>
                  <h1
                    className="wow fadeInUp text-white"
                    data-wow-duration="1.4s"
                    data-wow-delay=".4s"
                  >
                    We Plan Tomorrow for <br />
                    better <span className="primary-color gradient-color">Today</span>
                  </h1>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-8">
                      <div className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                        <p>
                          ENCORAA ESG offers a 360 degree end to end support and
                          management of carbon assets
                          </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                        <button className="btn-grad"  data-wow-duration="1.5s"
                        data-wow-delay=".5s">
                            <span className="text-white">Discover with us</span>
                        <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                  </div>
                  </div>
            </div>
          
            </div>
           
        </div>
       </div>
      </div>
    </div>  
    )
    };

    export default Banner;