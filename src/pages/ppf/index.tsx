import React from 'react'
import Image from 'next/image'
import m2 from '../../../public/img/ppfimage.jpg'
import Header from '../../components/Header'
import HeaderMobile from '../../components/headermobile'
import Footer from '../../components/footer'
import { Container, Wrapper, ImageBox, Textos } from './styles'

const quemsomos: React.FC = () => {
  return (
    <>
      <Header></Header>
      <HeaderMobile />
      <Container>
        <Wrapper>
          <Textos>
            <h1>Película De Proteção Estética Automotiva</h1>
            <p className="paragrafo-desktop">
              Além de deixar a cor da pintura do seu carro mais bonita, isso
              porque ela causa um brilho extra na cor, ela protege a pintura
              contra queimaduras do sol, riscos, repele a água, evitando que a
              poeira grude na lataria e evitando aquele aspecto de carro sujo
              após uma chuva. Podemos dizer que é super verniz que dará não
              somente um brilho na pintura, mas também proteção a mesma.
            </p>
            <p className="paragrafo-mobile">
              Somos apaixonados por customização e envelopamento com 07 anos de
              experiência na arte de envelopamento. A M2 Tunning nasceu da
              vontade de levar aquilo que já faziamos dentro de casa para outras
              pessoas a fazer parte da cosntrução de momentos e experiências
              diferenciadas que irão marcar as vidas de nossos cliente e amigos.
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

export default quemsomos
