import React from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/animate.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'

const Services = () => {
  return (
    <div> 
    <section className="page-service sub-bg pt-80 pb-80">
    <div className="container">
        <div className="row g-4 align-items-center">
            <div className="col-xl-8">
                <div className="page-service__right-item">
                    <div className="section-header mb-5">                            
                        <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">What are SDG’s?</h2>
                        <p className="wow fadeInUp " data-wow-duration="1.6s" data-wow-delay=".6s">
                          The Sustainable Development Goals (SDGs) are a set of 17 interconnected global 
                          objectives established by the United Nations in 2015. They aim to eradicate poverty, 
                          protect the planet, and ensure peace and prosperity for all by 2030. The goals are:</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-sm-6 wow fadeInLeft" data-wow-duration="1.3s" data-wow-delay=".3s">
                            <ul>
                                <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> No Poverty</li>
                                <li><i className="fa-solid me-2 primary-color fa-gear"></i> Zero Hunger</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.4s" data-wow-delay=".4s">
                            <ul>
                                <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Good Health and Well-being</li>
                                <li><i className="fa-solid me-2 primary-color fa-gear"></i> Quality Education</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".5s">
                            <ul>
                                <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Gender Equality</li>
                                <li><i className="fa-solid me-2 primary-color fa-gear"></i> Clean Water and Sanitation</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay=".6s">
                            <ul>
                                <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Affordable and Clean Energy</li>
                                <li><i className="fa-solid me-2 primary-color fa-gear"></i> Decent Work and Economic Growth</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay=".6s">
                          <ul>
                              <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Industry, Innovation, and Infrastructure</li>
                              <li><i className="fa-solid me-2 primary-color fa-gear"></i> Reduced Inequalities</li>
                          </ul>
                      </div>
                      <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay=".6s">
                        <ul>
                            <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Sustainable Cities and Communities</li>
                            <li><i className="fa-solid me-2 primary-color fa-gear"></i> Responsible Consumption and Production</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay=".6s">
                      <ul>
                          <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Climate Action</li>
                          <li><i className="fa-solid me-2 primary-color fa-gear"></i> Life Below Water</li>
                      </ul>
                    </div>
                    <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay=".6s">
                      <ul>
                          <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Life on Land</li>
                          <li><i className="fa-solid me-2 primary-color fa-gear"></i> Peace, Justice, and Strong Institutions</li>
                      </ul>
                    </div>
                    <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay=".6s">
                      <ul>
                          <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Partnerships for the Goals</li>
                      </ul>
                    </div>
                    </div>
                    <div className="section-header mb-5">                                                      
                      <p className="wow fadeInUp " data-wow-duration="1.6s" data-wow-delay=".6s">
                        These goals recognize the interdependence of social, economic, and environmental sustainability, 
                        and serve as a blueprint for addressing global challenges such as poverty, inequality, climate change, 
                        environmental degradation, peace, and justice.</p>
                  </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="image position-relative">
                    <img src="/images/service/single6.jpg" alt="image"/>
                    <div className="video__btn-wrp">
                        <div className="video-btn video-pulse">
                            <a className="video-popup secondary-bg"
                                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"><i
                                    className="fa-solid fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  )
};

export default Services