import React, { useState } from 'react';
import wats from '../../../public/img/wats.svg'
 import { Container } from './styles';
import { Trail } from '../Textos/index'
const Principal: React.FC = () => {
  const [open, set] = useState(true)
    return (
      <Container>
        <h1>
          <Trail open={open}>
            <span>
              {' '}
              M2 Tuning
              <br />
              Envelopamento Premium
              <br />
              Insulfilm e Estética Automotiva
            </span>
  
          </Trail>
        </h1>

        <a>
          Whatsapp online <img src={wats} alt={wats} className="wats" />
        </a>
      </Container>
    )
}

export default Principal;