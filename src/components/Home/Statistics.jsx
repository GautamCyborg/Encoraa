import React from 'react'

import '../../assets/css/bootstrap.min.css'
import '../../assets/css/all.min.css'
import '../../assets/css/swiper-bundle.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/animate.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/style.css'

const Statistics = () => {
  return (
    <div> <section className="statistic-area pt-60 pb-60">
    <div className="container">
        <div className="row g-4">
            <div className="col-xl-1"></div>
            <div className="col-xl-5">
                <div className="image">
                    <img src="/images/service/service-three-image3.png" alt="image" />
                </div>
            </div>
            <div className="col-xl-5">
                <div className="section-header2">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"><img
                            src="/images/icon/leaf.png" alt="image"/> TREE PLANTING</h5>
                    <h2 className="wow fadeInUp pt-10" data-wow-duration="1.4s" data-wow-delay=".4s">Today's Environmental Protection Safeguards Tomorrow</h2>
                    <p className="wow fadeInUp pt-10" data-wow-duration="1.6s" data-wow-delay=".6s">Planting/Tracking : bringing transparency to tree tagging space.( some basic info on planting and tracking</p>
                </div>
                <div className="row g-4">
                     <ul className="wow mt-4 fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                             Allow for tree planting initiatives and their donors to verify that their purchased or donated trees have been planted
                        </li>
                        <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" />
                           Individual trees can be tracked to ensure that they grow past the vulnerable sapling stage and continue to provide valuable ecological services to their local environment.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="statistic-area pt-60 pb-60">
    <div className="container">
        <div className="row g-4">
            <div className="col-xl-1"></div>
            <div className="col-xl-5">
                <div className="section-header2">
                    <h5 className="wow fadeInUp " data-wow-duration="1.2s" data-wow-delay=".2s"><img
                            src="/images/icon/leaf.png" alt="image"/> TRACKING & VERIFICATION</h5>
                    <h2 className="wow fadeInUp pt-10" data-wow-duration="1.4s" data-wow-delay=".4s">Tree Tracking & Verification for a Sustainable Tomorrow.</h2>
                    <p className="wow fadeInUp pt-10" data-wow-duration="1.6s" data-wow-delay=".6s">Your tree photo is screened by our team. Once a tree is verified, eligible planters will be paid for their stewardship.
</p>
                </div>
                <div className="row g-4">
                     <ul className="wow mt-4 fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon"/>
                            Tree farmers can take periodic geotagged photos of their tree(s). These images are verified by our team and the tree farmer is paid for their efforts
                        </li>
                        <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon"/>
                          Our data-driven system is shifting the focus from simply planting trees to growing diverse forests. We value the process of growing trees by verifying the incremental growth of each tree. The data is then packaged into a tree wallet system so that it can be accessed and traded by users anywhere in the world.
                        </li>
                    </ul>
                </div>
            </div>
            
             <div className="col-xl-6">
                <div className="image">
                    <img src="/images/service/service-three-image4.png" alt="image"/>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="statistic-area pt-60 pb-60">
    <div className="container">
        <div className="row g-4">
            <div className="col-xl-6">
                <div className="image">
                    <img src="/images/service/service-three-image5.png" alt="image"/>
                </div>
            </div>
            <div className="col-xl-5">
                <div className="section-header2">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"><img
                            src="/images/icon/leaf.png" alt="image"/> TREE TAGGING</h5>
                    <h2 className="wow fadeInUp pt-10" data-wow-duration="1.4s" data-wow-delay=".4s">Nurturing Nature, Tree Tagging for a Greener Legacy</h2>
                    <p className="wow fadeInUp pt-10" data-wow-duration="1.6s" data-wow-delay=".6s">Tags are used for many purposes including, but not limited to: identification of trees to cut down, trees to protect, treated trees, species and genus names and memorial trees. Tree tags are used by the Department of Forestry, researchers, tree farmers, national and local parks, landscapers and more. All tags are customizable to meet your needs from a stamped serial number all the way up to a laser etched QR code. New UV stable black aluminium tags stand up to sunlight and outdoor conditions for years!</p>
                </div>
                 <a href="tree-registration.html" className="btn-one wow fadeInUp" data-wow-duration="1.5s"
                                data-wow-delay=".5s"><span>Register your Tree</span>
                                <i className="fa-solid fa-angles-right"></i></a>
            </div>                    
        </div>
    </div>
</section>
</div>
  )
}

export default Statistics