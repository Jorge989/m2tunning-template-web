import React from 'react';
import Image from 'next/image'
import m2 from '../../../public/img/blackm2.jpg'
import Header from '../../components/Header'
import HeaderMobile from '../../components/headermobile'
import Footer from '../../components/footer'
 import { Container,   Wrapper, ImageBox, Textos } from "../../styles/styles-enevelopamentos"

 
const quemsomos: React.FC = () => {
    return (
      <>
        <Header></Header>
        <HeaderMobile />
        <Container>
          <Wrapper>
            <Textos>
              <h1>Sobre Nós</h1>
              <p className="paragrafo-desktop">
                Somos apaixonados por customização e envelopamento com 07 anos
                de experiência na arte de envelopamento. A M2 Tunning nasceu da
                vontade de levar aquilo que já faziamos dentro de casa para
                outras pessoas a fazer parte da cosntrução de momentos e
                experiências diferenciadas que irão marcar as vidas de nossos
                cliente e amigos.
              </p>
              <p className="paragrafo-mobile">
                Somos apaixonados por customização e envelopamento com 07 anos
                de experiência na arte de envelopamento. A M2 Tunning nasceu da
                vontade de levar aquilo que já faziamos dentro de casa para
                outras pessoas a fazer parte da cosntrução de momentos e
                experiências diferenciadas que irão marcar as vidas de nossos
                cliente e amigos.
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

export default quemsomos;