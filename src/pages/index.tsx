import { useEffect, useState } from 'react'

import Link from 'next/link'
import Header from '../components/Header'
import HeaderMobile from '../components/headermobile'
import Servicos from '../components/Servicos'
import Mapa2 from '../components/Mapa2'
import Main from '../components/Main'
import Principal from '../components/Principal'
import Footer from '../components/footer'
import TextosBanner from '../components/textosbanner'

const Home = () => {
  
  return (
    <>
      <Header></Header>
      <HeaderMobile />
      <Principal />
      <Main />
      <Mapa2 />

      <Servicos />
      <Footer />
    </>
  )
};



export default Home;
