import React from 'react'

import Banner from '../components/Home/Banner';
import EventArea from '../components/Home/EventArea';
import OurInfo from '../components/Home/OurInfo';
import SideMenu from '../components/Home/SideMenu'
import Statistics from '../components/Home/Statistics';


const Home = () => {
  return (
    <div>
      <Banner/>
      <SideMenu/>
      <Statistics/>
      <EventArea/>
      <OurInfo/>
    </div>
  )
}

export default Home