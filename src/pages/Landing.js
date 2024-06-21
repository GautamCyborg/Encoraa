import React from 'react'

import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import BlogArea from '../components/BlogArea';
import Services from '../components/Services';
import Achievements from '../components/Achievements';
import Participate from '../components/Participate';
import AssesmentsAndAudits from '../components/AssesmentsAndAudits';


import Gallery from '../components/features/Gallery';
import Countdown from '../components/features/Countdown';


const Landing = () => {
    const targetDate = '2024-12-31T00:00:00';
  return (
    <div>  
    <Banner/>
    <AboutUs/>
    <BlogArea/>
    <Services/>
    <Achievements/>
    <AssesmentsAndAudits/>
    <Participate/>
    <Gallery/>
    <Countdown targetDate={targetDate}/> 
</div>
  )
}

export default Landing