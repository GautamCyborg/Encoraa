import React from 'react';

import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/animate.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'

const AboutUs = () => {
  return (
    <section className="about pt-20 pb-20">
      <div className="about__leaf fall__animation">
        <img src="/images/about/leaf.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6">
            <div className="section-header mb-5">
              <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                <img src="/images/icon/leaf.png" alt="image" /> ABOUT US
              </h5>
              <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                Environment & Sustainability
              </h2>
              <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                ENCORRA ESG, the sustainability subsidiary of ImageIO, provides comprehensive solutions in the ESG practise to enable organizations, groups, and individuals to understand, assess, implement, and achieve a positive footprint in the goals and regulations established by the authorities.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="d-flex align-items-center justify-content-between">
              <div className="relative p-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-md overflow-hidden w-16rem" style={{ margin: '0px 5px' }}>
                <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">80%</div>
                <div className="relative z-10 text-green-200 leading-none font-semibold">Carbon Offsetting</div>
                <img src="/images/carbon-footprint.png" className="svgclass" alt="Carbon Offsetting" />
              </div>
              <div className="relative p-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md overflow-hidden w-16rem" style={{ margin: '0px 5px' }}>
                <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">90%</div>
                <div className="relative z-10 text-blue-200 leading-none font-semibold">Water Conservation</div>
                <img src="/images/save-water.png" className="svgclass" alt="Water Conservation" />
              </div>
              <div className="relative p-5 bg-gradient-to-r from-red-400 to-red-600 rounded-md overflow-hidden w-16rem" style={{ margin: '0px 5px' }}>
                <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">70%</div>
                <div className="relative z-10 text-red-200 leading-none font-semibold">E-Waste Recycling</div>
                <img src="/images/ewaste.png" className="svgclass" alt="E-Waste Recycling" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
