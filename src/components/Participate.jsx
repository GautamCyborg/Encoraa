import React from 'react';

import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/animate.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'

const Participate = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="pb-30 bor-bottom mb-30">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                <img src="/images/icon/leaf.png" alt="image" /> HOW WE WORK
              </h5>
              <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                We work together for bettering tomorrow
              </h2>
            </div>
            <div className="col-lg-4">
              <div className="section-header m-0">
                <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                  ENCORAA ESG offers a 360 degree end to end support and management of carbon assets with the primary goal of
                  empowering organisations to achieve their net-zero targets of being Carbon Neutral and go further to become carbon positive
                  entities thereby meeting the United Nations sustainability goals, obtain carbon disclosure ratings, maintain GreenHouse
                  Gases (GHG) Inventory and record sustainability and carbon neutrality statements regularly.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="wow mt-4 fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Enterprise for Compliance of Regulatory Audit & Aggregation
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Data repository
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  O<sup>2</sup> repository (Certified by 3<sup>rd</sup> party Auditing partners)
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Platform to transact and offset CO<sup>2</sup> with O<sup>2</sup>
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Generate compliance certificate (Approved by 3<sup>rd</sup> party Auditing partners)
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Create reports, projections and analytics as per customer needs
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Build and generate awareness on national and international forums and groups
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="wow mt-4 fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Comprehensive consulting
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Executive Training & Orientation
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Certifications, Ratings and Metric
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Reports and Projections
                </li>
                <li>
                  <img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                  Create incubator with corporate or institutional partners
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-4 pt-60 pb-60">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
            <div className="work__item">
              <div className="work__item-icon">
                <img src="/images/icon/work1.svg" alt="icon" />
                <span className="gradient-number">01</span>
              </div>
              <h3><a href="tree-planting.html" className="text-white">Eco-Sustenance</a></h3>
              <p className="text-white">
                Eco sustenance is at the heart of ENCORAA's mission. This service is designed to ensure the harmonious coexistence of human activities...
              </p>
              <a className="work__item-arrow text-white" href="tree-planting.html"><i className="fa-solid fa-arrow-right"></i></a>
              <div className="work__item-leaf">
                <img src="/images/shape/work-leaf.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.4s" data-wow-delay=".4s">
            <div className="work__item">
              <div className="work__item-icon">
                <img src="/images/icon/work2.svg" alt="icon" />
                <span>02</span>
              </div>
              <h3><a href="consulting.html" className="text-white">Consulting</a></h3>
              <p className="text-white">
                ENCORAA's consulting services are designed to help businesses navigate the complex landscape of environmental sustainability.
              </p>
              <a className="work__item-arrow text-white" href="consulting.html"><i className="fa-solid fa-arrow-right"></i></a>
              <div className="work__item-leaf">
                <img src="/images/shape/work-leaf.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.6s" data-wow-delay=".6s">
            <div className="work__item">
              <div className="work__item-icon">
                <img src="/images/icon/work3.svg" alt="icon" />
                <span>03</span>
              </div>
              <h3><a href="training.html" className="text-white">Training</a></h3>
              <p className="text-white">
                ENCORAA believes in empowering businesses with the knowledge and skills required to champion environmental sustainability.
              </p>
              <a className="work__item-arrow text-white" href="training.html"><i className="fa-solid fa-arrow-right"></i></a>
              <div className="work__item-leaf">
                <img src="/images/shape/work-leaf.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participate;
