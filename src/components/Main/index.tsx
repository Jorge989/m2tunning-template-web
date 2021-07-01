import React from 'react';
import Image from 'next/image'
import {
  Container,
  Textos,
  Insta,
  CarrosWrap,
  CarrosContianer,
  CarrosContianer2,
  CarrosContianer3,
  InstaButton
} from './styles'
import inslogo from '../../../public/img/instagram.png'
import cartao from '../../../public/img/cartao3.jpg'
import carrocamuflado from '../../../public/img/carrocamuflado.jpg'

import evokeroxa from '../../../public/img/evokeroxa.jpg'
import evokeazul2 from '../../../public/img/evokeazul3.jpg'
import carroverde from '../../../public/img/carroverde.jpg'
import carrolaranja from '../../../public/img/carrolaranja.jpg'

import carrocinzaback from '../../../public/img/carrocinzaback.jpg'
import evokementa from '../../../public/img/evokementa.jpg'
import pretared from '../../../public/img/pretored.jpg'
import carrobranco from '../../../public/img/carrobranco.jpg'
import hylux from '../../../public/img/hylux.jpg'
import bmwazul from '../../../public/img/bmwazul.jpg'

const Main: React.FC = () => {
  return (
    <body>
      <Container>
        <Textos>
          <h1>
            Trabalhos
            <br />
            <strong>Evelopamentos</strong>
          </h1>
        </Textos>
        <Insta>
          <img src={inslogo} className="instalogo" />
          <a
            href="https://www.instagram.com/p/COcyH-KsKty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            m2tuningoficial
          </a>
        </Insta>
        <CarrosWrap>
          <CarrosContianer>
            <a
              href="https://www.instagram.com/p/COcyH-KsKty/?utm_source=ig_web_copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cartao} />
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
        </CarrosWrap>
          <InstaButton>
            {' '}
           
            Siga no Instagram
          </InstaButton>
      </Container>
    </body>
  )
}

export default Main;