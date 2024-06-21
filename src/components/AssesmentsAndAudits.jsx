import React from 'react'
import '../assets/images/favicon.png'
import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/animate.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'

const AssesmentsAndAudits = () => {
  return (
    <section className="about-two pt-80 pb-80">
    <div className="about-two__shape-right d-none d-md-block bobble__animation">
      <img src="/images/shape/about-two-shape-right.png" alt="shape" />
    </div>
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-4">
          <div className="the-text">
            <img src="/images/earth.png" height="275px" alt="the-text"/>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="about-two__right-item">
            <div className="section-header mb-4">
              <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                Assessments & Audits
              </h2>
              <h4 className="pt-10">
                ENCORAA ESG enables entities to obtain compliances, certifications and clearances in:
              </h4>
            </div>
            <div className="d-flex justify-content-between ">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">AA1000 Accountability Standards (AA1000AS V3)</li>
                    <li className="list-group-item">Gold Standards</li>
                    <li className="list-group-item">BEE (evolving)</li>
                    <li className="list-group-item">ICFR (evolving) </li>
                    <li className="list-group-item">Verified Carbon Standards (VCS)</li>
                    <li className="list-group-item">Clean Development Mechanism (CDM)</li>
                  </ul>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">VERRA & SD VISTa</li>
                    <li className="list-group-item">Global Carbon Council (GCC)</li>
                    <li className="list-group-item">Global Reporting Initiatives (GRI)</li>
                    <li className="list-group-item">Integrated Reporting Framework (IR)</li>
                    <li className="list-group-item">Puro Earth (Engineered Carbon) & CERCARBONO</li>
                    <li className="list-group-item">ICROA</li>
                  </ul>
            </div>
            <h4 className="pt-10">
              IFTS (Accounting) & ISSB (Sustainability) - Entity Consolidated & Merged with Value 
              Reporting Foundation (VRF); Sustainability Accounting Standards Board (SASB); 
              Climate Disclosure Standards Board (CDSB)
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AssesmentsAndAudits