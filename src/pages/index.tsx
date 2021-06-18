import { useEffect, useState } from 'react'

import Link from 'next/link'
import Header from '../components/Header'
import Main from '../components/Main'
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

    <Carrousel>
      <Slides>
        <Slide />
      </Slides>

      <SlideNav className="SlideNav">
        <SlideNavItems />
      </SlideNav>
    </Carrousel>
    <Main/>
     
      </>
)
};



export default Home;
