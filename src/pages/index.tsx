import { useEffect, useState } from 'react'

import Link from 'next/link'
import Header from '../components/Header'
import Mapa from '../components/Mapa'
import Mapa2 from '../components/Mapa2'
import HeaderMobile from '../components/headermobile'
import Main from '../components/Main'
import Principal from '../components/Principal'

const Home = () => {
  
  return (
    <>
      <Header></Header>
      <HeaderMobile />
      <Principal />
      <Main />
      {/* <Mapa /> */}
      <Mapa2 />
    </>
  )
};



export default Home;
