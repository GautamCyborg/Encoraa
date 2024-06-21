import React from 'react'

const Work = () => {
  return (
    <div>      
    <section className="work work-five pt-60 pb-65">
        <div className="container">
            <div className="pb-65 bor-bottom mb-65">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-8">
                        <div className="section-header m-0">
                            <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"><img
                                    src="/images/icon/leaf.png" alt="image"/> TECHNOLOGY WE WORK</h5>
                            <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">We work together
                                for bettering tomorrow</h2>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="row g-4">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.2s"
                    data-wow-delay=".2s">
                    <div className="work-five__item">
                        <div className="work__item-icon mb-30">
                            <div className="work-five__icon">                                   
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <span>B2B</span>
                        </div>
                        <h3 className="text-white"><a href="service-single.html">Repository Platform</a></h3>
                        <p className="text-white"> A place where Big Data Meets Technology enabling large scale Computation to bring out meaningful analytics.</p>
                        <a className="work__item-arrow" href="service-single.html"><i
                                className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
              
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.6s"
                    data-wow-delay=".6s">
                    <div className="work-five__item">
                        <div className="work__item-icon mb-30">
                            <div className="work-five__icon">
                               <i className="fa-solid fa-chart-column"></i>
                            </div>
                            <span>Xchange</span>
                        </div>
                        <h3 className="text-white"><a href="#">CenZex</a></h3>
                        <p className="text-white">A trailblazing sustainability credits exchange designed to redefine the market with innovative approaches never seen before
                        </p>
                        <a className="work__item-arrow" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
    </div>
  )
}

export default Work