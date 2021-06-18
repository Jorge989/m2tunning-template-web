import React from 'react';

import {
  Container,
  Textos,
  Insta,
  CarrosWrap,
  CarrosContianer,
  CarrosContianer2
} from './styles'
import inslogo from '../../../public/img/instagram.png'
import carro1 from '../../../public/img/env1.jpg'
const Main: React.FC = () => {
  return (
    <body>
      <Container >
        <Textos >
          <h1>
            Trabalhos
            <br />
            <strong >Evelopamentos</strong>
          </h1>
        </Textos>
        <Insta >
          <img src={inslogo} className="instalogo" />
          <a
            href="https://www.instagram.com/p/COcyH-KsKty/"
            target="_blank"
            rel="noopener noreferrer"
         
          >
            m2tuningoficial
          </a>
        </Insta>
        <CarrosWrap >
          <CarrosContianer >
            <img src={carro1}  />
            <img src={carro1}  />
            <img src={carro1}  />
            <img src={carro1}  />
          </CarrosContianer>
          <CarrosContianer2>
            <img src={carro1}  />
            <img src={carro1}  />
            <img src={carro1}  />
            <img src={carro1}  />
          </CarrosContianer2>
        </CarrosWrap>
      </Container>
    </body>
  )
}

export default Main;