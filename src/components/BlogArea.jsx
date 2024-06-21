import React from 'react';

import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/animate.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'


const BlogArea = () => {
  return (
    <section className="blog pt-80 pb-80 white-bg">
      <div className="container">
        <div className="blog__head-wrp mb-20">
          <div className="col-xl-12">
            <div className="section-header m-0">
              <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">What is ESG ?</h2>
              <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                ENCORRA ESG, the sustainability subsidiary of ImageIO,
                provides comprehensive solutions in the ESG practise to enable
                organizations, groups and individuals to understand, assess,
                implement and achieve a positive footprint in the goals and
                regulations established by the authorities.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-12 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".2s">
            <div className="blog__item-left">
              <div className="swiper blog__slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row g-4">
                      <div className="col-md-7">
                        <div className="blog__item-left-content">
                          <span className="blog__tag">Environmental</span>
                          <h3 className="mb-20"><a href="#">The Environmental component assesses how an organization's operations impacts the natural environment. This includes:</a></h3>
                          <ul>
                            <li className="mb-20">Resource Management: How efficiently the organization uses natural resources and manages waste.</li>
                            <li className="mb-20">Carbon Footprint: The organization's emissions and efforts to reduce its carbon footprint.</li>
                            <li className="mb-20">Environmental Policies: The organization's commitment to environmental best practices and its response to environmental risks.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="image">
                          <img src="/images/esg_03.png" alt='alt text'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog__item-left-dot-wrp">
                <div className="dot blog__dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
