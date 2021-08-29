import React from 'react'
import Image from 'next/image'
import emailjs from 'emailjs-com'
import Header from '../../components/Header'
import HeaderMobile from '../../components/headermobile'
import Footer from '../../components/footer'
import { Wrapper, ImageBox, Textos } from './styles'
import Container from './styles'
const Insulfilm: React.FC = () => {
  function sendEmail(e: any) {
   e.preventDefault()

   emailjs
     .sendForm(
       'service_n6ry1xr',
       'template_mwixpwh',
       e.target,
       'user_fnHuqr1S6108VeZD8s4lE'
     )
     .then(
       (result) => {
         console.log(result.text)
       },
       (error) => {
         console.log(error.text)
       }
     )
    e.target.reset()
  }
  return (
    <>
      <Header></Header>
      <HeaderMobile />
      <Container>
        <Wrapper>
          <Textos>
            <h1>Contato e Horário de Funcionamento</h1>
            <p className="paragrafo-desktop">Estamos a sua disposição</p>
            <p className="paragrafo-mobile">Estamos a sua disposição</p>
          </Textos>
        </Wrapper>
        <div className="conteudo">
          <div className="icones">
            <Image
              className="imagem"
              src="/img/map.png"
              alt="logo"
              width={90}
              height={90}
              quality={100}
            />
            <h2>Endereço</h2>
            <p>
              Av. Washington Luís, 4511 <br /> Santo Amaro, São Paulo <br /> SP,
              04627-001
            </p>
          </div>
          <div className="icones">
            <Image
              className="imagem"
              src="/img/hands.png"
              alt="logo"
              width={90}
              height={110}
              quality={100}
            />
            <h2>Atendimento</h2>
            <p>
              De Segunda à Sexta das 9h às 18h
              <br />
              Sabádos das 9h as 14h
            </p>
          </div>
          <div className="icones">
            <Image
              className="imagem"
              src="/img/call2.png"
              alt="logo"
              width={80}
              height={70}
              quality={100}
            />
            <h2>Nossos Telefones</h2>
            <p>
              Av. Washington Luís, 4511 <br /> Santo Amaro, São Paulo <br /> SP,
              04627-001
            </p>
          </div>
        </div>
        <h2>Formulário De Contato</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Nome" name="nome" />
          <input type="text" placeholder="E-mail" name="email" />
          <textarea placeholder="Assunto" name="Assunto" />
          <button type="submit">Enviar</button>
        </form>

        <Footer />
      </Container>
    </>
  )
}

export default Insulfilm
