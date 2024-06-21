import React from 'react'

import '../../assets/images/favicon.png'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/all.min.css'
import '../../assets/css/swiper-bundle.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/animate.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/style.css'

const SideMenu = () => {
  return (
    <div><section className="statistic-area pt-60">
    <div className="container">
    <div className="row">
    <div className="col-lg-3 col-md-3 col-sm-3">
    <div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
     <button type="button" className="btn btn-secondary">Tree Planting / Transplanting / Mapping / Tracking & Verification</button>
     <button type="button" className="btn btn-secondary">Miyawaki Afforestation</button>
     <button type="button" className="btn btn-secondary">Tree Tagging / Tree Census / Maintenance / Restoration of Uprooted Trees</button>
     <button type="button" className="btn btn-secondary">Transacting</button>
     <button type="button" className="btn btn-secondary">Tree Insurance</button>
     <button type="button" className="btn btn-secondary">Environment Education / Awareness</button>
     </div>
    </div>
    <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <h2>Tree Planting/Transplanting/Mapping/Tracking & Verification</h2>
          <div className="col-lg-7 col-md-7 col-sm-7">                  
            <strong>Site Assessment:</strong>
            <p>We conduct a thorough site assessment to understand the local conditions, including soil type, sunlight exposure, and climate. This helps us select the most suitable species for planting.</p>
            <strong>Planting and Transplanting:</strong>
            <p>Our team of experts handles the planting and transplanting process, ensuring the trees are properly placed and have the best chance of survival.</p>
            <strong>Tree Mapping:</strong>
            <p>We use advanced GIS technology to create a detailed map of the planted area, marking the location of each tree.</p>
            <strong>Tree Tracking:</strong>
            <p>Our tracking system monitors the health and growth of each tree, providing real-time data that can be used to identify and address any issues promptly.</p>
            <strong>Verification:</strong>
            <p>We conduct regular site visits and use remote sensing technology to verify the accuracy of our tracking data and assess the overall success of the planting project.</p>
          </div>                
             <div className="col-lg-5 col-md-5 col-sm-5">
                <img src="/images/about/Share-image-preview.jpg" width="380" alt=""/>
            </div>
        </div>                
    </div>
    </div>
    </div>
    </section>
            </div>
  )
}

export default SideMenu