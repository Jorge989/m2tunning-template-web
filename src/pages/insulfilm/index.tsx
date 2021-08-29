import React from 'react'
import Image from 'next/image'
import m2 from '../../../public/img/insu.png'
import Header from '../../components/Header'
import HeaderMobile from '../../components/headermobile'
import Footer from '../../components/footer'
import {  Wrapper, ImageBox, Textos } from './styles'
import Container from './styles'
const Insulfilm: React.FC = () => {
  return (
    <>
      <Header></Header>
      <HeaderMobile />
      <Container>
        <Wrapper>
          <Textos>
            <h1>Pelicula De Proteção Solar</h1>
            <p className="paragrafo-desktop">
              A película automotiva tem a função importante de proteção contra
              raios solares danosos à saúde das pessoas, bem como à conservação
              do interior dos veículos. Ela bloqueia até 70% de incidência de
              raios UV, a película torna os vidros do carro mais fortes,
              deixando-os mais resistentes a impactos e evitando o
              estilhaçamento, sendo também garantia de uma maior privacidade e,
              por conseguinte, mais segurança.
            </p>
            <p className="paragrafo-mobile">
              A película automotiva tem a função importante de proteção contra
              raios solares danosos à saúde das pessoas, bem como à conservação
              do interior dos veículos. Ela bloqueia até 70% de incidência de
              raios UV, a película torna os vidros do carro mais fortes,
              deixando-os mais resistentes a impactos e evitando o
              estilhaçamento, sendo também garantia de uma maior privacidade e,
              por conseguinte, mais segurança.
            </p>
          </Textos>
          <ImageBox>
            <img className="imagem" src={m2} alt="logo" />
          </ImageBox>
        </Wrapper>
        <Footer />
      </Container>
    </>
  )
}

export default Insulfilm
