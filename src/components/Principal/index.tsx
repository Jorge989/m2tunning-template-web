import React, { useState } from 'react';
import wats from '../../../public/img/wats.svg'
 import { Container } from './styles';
import { Trail } from '../Textos/index'
const Principal: React.FC = () => {
   function handleToggle() {
     const text = ''
     const phone = '5511977955519'
     window.location.href = `https://api.whatsapp.com/send?text=${text}&phone=${phone}`
   }
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
              PPF - PELÍCULA DE PROTEÇÃO
              <br />Estética Automotiva
            </span>
          </Trail>
        </h1>

        <a onClick={handleToggle} target="_blank" rel="noopener noreferrer">
          Whatsapp online <img src={wats} alt={wats} className="wats" />
        </a>
      </Container>
    )
}

export default Principal;