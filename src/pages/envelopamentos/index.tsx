import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/footer'
import HeaderMobile from '../../components/headermobile'
 import {
   Container,
   CarrosWrap,
   CarrosContianer,
   CarrosContianer2,
   CarrosContianer3,
   Textos,
   CarrosContianer4,
   CarrosContianer5
 } from "../../styles/styles-quemsomos"
import inslogo from '../../../public/img/instagram.png'
import cartao from '../../../public/img/cartao3.jpg'
import carrocamuflado from '../../../public/img/carrocamuflado.jpg'

import evokeroxa from '../../../public/img/evokeroxa.jpg'
import evokeazul2 from '../../../public/img/evokeazul3.jpg'
import carroverde from '../../../public/img/carroverde.jpg'
import carrolaranja from '../../../public/img/carrolaranja.jpg'
import bmazul from '../../../public/img/bmwazul.jpeg'
import carrocinzaback from '../../../public/img/carrocinzaback.jpg'
import evokementa from '../../../public/img/evokementa.jpg'
import pretared from '../../../public/img/pretored.jpg'
import carrobranco from '../../../public/img/carrobranco.jpg'
import hylux from '../../../public/img/hylux.jpg'
import bmwazul from '../../../public/img/bmwazul.jpg'
import azulbb from '../../../public/img/azulbb3.png'
import tod1 from '../../../public/img/tod1.png'
import tod2 from '../../../public/img/tod2.png'
import tod3 from '../../../public/img/tod3.png'
import tod4 from '../../../public/img/tod4.png'
import tod5 from '../../../public/img/tod5.png'
import tod6 from '../../../public/img/tod6.png'
import tod7 from '../../../public/img/tod7.png'
import tod8 from '../../../public/img/tod8.png'

const envelopamentos: React.FC = () => {
  const [continuecarr, setContinuecar] = useState(false)
    const [continuecarr2, setContinuecar2] = useState(false)
  const [controle, setControle] = useState(true)
    const [controle2, setControle2] = useState(false)
  function handleCarrs() {
    setContinuecar(true)
    setControle(false)
    setControle2(true)
   
  }
    function handleCarrs2() {
      setContinuecar2(true)
      setControle2(false)

    }

    return (
      <>
        <Header></Header>
        <HeaderMobile />
        <Container>
          <Textos>
            {' '}
            <h1>Envelopamentos</h1>
            <p className="paragrafo-desktop">
              O envelopamento garante que seu carro fique ainda mais bonito
              <br /> diferenciado e cheio de estilo, além de permitir que você
              altere sua <br /> opção de cor acabamento ou mesmo removea
              pelicula futuramente
              <br />
              sem danificar a pintura original do seu veículo.
            </p>
            <p className="paragrafo-mobile">
              O envelopamento garante que seu carro fique ainda mais bonito
              diferenciado e cheio de estilo, além de permitir que você altere
              sua opção de cor acabamento ou mesmo removea pelicula futuramente
              sem danificar a pintura original do seu veículo.
            </p>
          </Textos>

          <CarrosWrap>
            <CarrosContianer>
              <a
                href="https://www.instagram.com/p/COcyH-KsKty/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bmazul} />
              </a>
              <a
                href="https://www.instagram.com/p/CPJZ6bZMvDq/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={carrocamuflado} />
              </a>

              <a
                href="https://www.instagram.com/p/CPJZ6bZMvDq/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={evokeroxa} />
              </a>
              <a
                href="https://www.instagram.com/reel/COnfoB-ieA_/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={evokeazul2} />
              </a>
            </CarrosContianer>
            <CarrosContianer2>
              <a
                href="https://www.instagram.com/p/CPTO3NdM5MN/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <img src={carroverde} />{' '}
              </a>
              <a
                href="https://www.instagram.com/p/CO0xPdisL1U/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={carrolaranja} />
              </a>
              <a
                href="https://www.instagram.com/p/COFzfnjs88R/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bmwazul} />
              </a>
              <a
                href="https://www.instagram.com/p/COtHegMsvFZ/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={carrocinzaback} />
              </a>
            </CarrosContianer2>
            <CarrosContianer3>
              <a
                href="https://www.instagram.com/p/CP1ONRiJBNH/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={evokementa} />
              </a>

              <a
                href="https://www.instagram.com/p/CPq3GOnJBdw/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pretared} />
              </a>
              <a
                href="https://www.instagram.com/p/COi0Nt1s0aq/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={hylux} />
              </a>
              <a
                href="https://www.instagram.com/p/COLKVEusFfv/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={carrobranco} />
              </a>
            </CarrosContianer3>
            {continuecarr == true && (
              <CarrosContianer4>
                <a
                  href="https://www.instagram.com/p/CP1ONRiJBNH/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={azulbb} />
                </a>

                <a
                  href="https://www.instagram.com/p/CPq3GOnJBdw/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tod2} />
                </a>
                <a
                  href="https://www.instagram.com/p/COi0Nt1s0aq/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tod1} />
                </a>
                <a
                  href="https://www.instagram.com/p/COLKVEusFfv/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tod3} />
                </a>
              </CarrosContianer4>
            )}
            {continuecarr2 == true && (
              <CarrosContianer5>
                <a
                  href="https://www.instagram.com/p/CP1ONRiJBNH/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tod4} />
                </a>

                <a
                  href="https://www.instagram.com/p/CPq3GOnJBdw/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tod5} />
                </a>
                <a
                  href="https://www.instagram.com/p/COi0Nt1s0aq/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tod8} />
                </a>
                <a
                  href="https://www.instagram.com/p/COLKVEusFfv/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tod7} />
                </a>
              </CarrosContianer5>
            )}
            {controle == true && (
              <div className="btn-carregar-box">
                <button onClick={handleCarrs} className="carregar-maisfotos">
                  Carregar mais fotos
                </button>
              </div>
            )}
            {controle2 == true && (
              <div className="btn-carregar-box">
                <button onClick={handleCarrs2} className="carregar-maisfotos">
                  Carregar mais fotos
                </button>
              </div>
            )}
          </CarrosWrap>
        </Container>
        <Footer />
      </>
    )
}

export default envelopamentos;