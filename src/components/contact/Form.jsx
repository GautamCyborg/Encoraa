import React from 'react';


import '../../assets/css/bootstrap.min.css'
import '../../assets/css/all.min.css'
import '../../assets/css/swiper-bundle.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/animate.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/style.css'

const Form = () => {
  return (
    <div> 

         <section className="bg-image pt-40 pb-40">
            <div className="container">
                <h2 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">Contact Us</h2>
               
            </div>
        </section>
               
    <section className="contact pt-60 pb-60">
    <div className="container">
        <div className="row g-4">
            <div className="col-lg-6">
                <div className="content bg-image">
                    <h2>Have something in mind? <br/>
                        Let's talk.</h2>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                        Ut enim ad minim.</p>
                    <div className="arry"><img src="/images/icon/arry.png" alt=""/></div>
                    <ul>
                        <li><a href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&amp;hl=en_US&amp;ll=18.672105000000013%2C105.68673800000003&amp;z=17"
                                target="_blank"><i className="fa-solid fa-location-dot"></i> 407 Payal Complex, B/s VSE,
                                 Sayajigunj, 
                                Vadodara-390005</a>
                        </li>
                        <li><a href="tel:1-732-798-0976"><i className="fa-solid fa-phone-volume"></i>+91 9898 034 029</a>
                        </li>
                        <li><a href="mailto:company.info@mail.com"><i
                                    className="fa-solid fa-envelope"></i>info@encoraa.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-area">
                    <form action="#0">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Contact Number" />
                        <input type="email" placeholder="Email"/>
                        <input type="email" placeholder="Organization (optional)"/>
                        <select name="subject" id="subject">
                            <option value="0">Select Subject</option>
                            <option value="0">Account</option>
                            <option value="0">Service</option>
                            <option value="0">Pricing</option>
                            <option value="0">Support</option>
                        </select>
                        <textarea name="Your Review" id="massage" placeholder="Message..."></textarea>
                        
                        <button>Submit<i className="fa-solid fa-arrow-right-long"/></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Form