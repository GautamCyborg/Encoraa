import React from 'react'


import '../../assets/css/bootstrap.min.css'
import '../../assets/css/all.min.css'
import '../../assets/css/swiper-bundle.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/animate.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/style.css'

const EventArea = () => {
  return (
    <div>        <div className="event pt-30">
    <div className="container">
        <div className="event__item wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
            <div className="row g-5 g-lg-0 align-items-center">
                <div className="col-lg-4">
                    <div className="event__image">
                        <img src="/images/event/event-image1.png" alt="image" />                               
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="event__content">
                        
                        <h3 className="mt-20 mb-20">Transacting</h3>
                          <div className="row g-4">
                     <ul className="wow mt-4 fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                           Enables people to plant and grow trees, allowing them to sell their farmed carbon and other ecosystem services in the form of digital tokens on a global market. 
                        </li>
                        <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                         Organisations and donors can locate individual trees and trade their ecological impact.

                        </li>
                         <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                        Trees are periodically valued, tokenized and added to a wallet system. This enables third-party entities to buy each tree’s ecological impact directly from tree growers and resell it to donors and companies.

                        </li>
                    </ul>
                </div>
                     
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</div></div>
  )
}

export default EventArea