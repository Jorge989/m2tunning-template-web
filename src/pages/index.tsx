import { useEffect, useState } from 'react'

import Link from 'next/link'
import Header from '../components/Header'
import Mapa from '../components/Mapa'
import HeaderMobile from '../components/headermobile'
import Main from '../components/Main'
import Principal from '../components/Principal'
import {
  Carrousel,
  Slides,
  Slide,
  SlideNav,
  SlideNavItems
} from '../components/Carrousel'

const Home = () => {
  
  return (
    <>
      <Header></Header>
      <HeaderMobile />
      <Principal />
      <Main />
      <Mapa />
      {/* <Carrousel>
          <Slides>
          <Slide />
          </Slides>
          
          <SlideNav className="SlideNav">
          <SlideNavItems />
          </SlideNav>
        </Carrousel> */}
    </>
  )
};



export default Home;
