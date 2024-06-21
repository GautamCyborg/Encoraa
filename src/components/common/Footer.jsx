import React from 'react';

import '../../assets/css/style.css' 
import '../../assets/css/bootstrap.min.css'

const Footer = () => {
  return (
    <footer className="footer bg-image">
      <div className="container">
        <div className="pt-30 pb-30">
          <div className="row g-4">
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
              <div className="footer__item">
                <div className="footer__item-title">
                  <h4 className="text-white">about Encoraa ESG</h4>
                  <span className="footer__item-title-line"></span><span className="footer__item-title-line2"></span>
                </div>
                <p className="text-white">
                  ENCORRA ESG, the sustainability subsidiary of ImageIO, provides comprehensive solutions in the ESG practise to enable organizations, groups and individuals to understand, assess, implement and achieve a positive footprint in the goals and regulations established by the authorities.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
              <div className="footer__item">
                <div className="footer__item-title">
                  <h4 className="text-white">Get in touch!</h4>
                  <span className="footer__item-title-line"></span><span className="footer__item-title-line2"></span>
                </div>
                <ul>
                  <li className="pb-3">
                    <a href="#" className="text-white"><i className="fa-solid fa-location-dot pe-1 primary-color"></i>
                      407 Payal Complex, <br/>B/s VSE, Sayajigunj, <br /> Vadodara-390005
                    </a>
                  </li>
                  <li className="pb-3">
                    <a href="tel:+4065550120" className="text-white"><i className="fa-solid fa-phone-volume pe-1 primary-color"></i>
                      +91 9898 034 029
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@encoraa.com" target="_blank" className="text-white"><i className="fa-solid fa-envelope pe-1 primary-color"></i>
                      info@encoraa.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
              <div className="footer__item">
                <div className="footer__item-title">
                  <h4 className="text-white">Quick Link</h4>
                  <span className="footer__item-title-line"></span><span className="footer__item-title-line2"></span>
                </div>
                <ul>
                  <li className="pb-2">
                    <a href="#" className="text-white"><i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                      Water Conservation
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="text-white"><i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                      Eco System
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="text-white"><i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                      Plastic Recycling
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="text-white"><i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                      Urban Planning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white"><i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                      Save Green House
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
              <div className="footer__item">
                <div className="footer__item-title">
                  <h4 className="text-white">recent news</h4>
                  <span className="footer__item-title-line"></span><span className="footer__item-title-line2"></span>
                </div>
                <ul className="footer__item-blog">
                  <li className="pb-3">
                    <img src="/images/footer/01.png" height="60" alt="image"/>
                    <div className="ms-3">
                      <h5>
                        <a href="#" className="text-white">Close up picture of the sapling</a>
                      </h5>
                      <span>2 weeks ago</span>
                    </div>
                  </li>
                  <li>
                    <img src="/images/footer/02.png" height="60" alt="image"/>
                    <div className="ms-3">
                      <h5>
                        <a href="#" className="text-white">Close up picture of the sapling</a>
                      </h5>
                      <span>2 weeks ago</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          &copy; Copyright 2024 <a href="#0">ImageIO</a> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
