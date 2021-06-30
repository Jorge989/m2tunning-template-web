import React, { useState } from 'react';
import wats from '../../../public/img/wats.svg'
 import { Container } from './styles';
// import { Trail } from '../tester'
const Principal: React.FC = () => {
  const [open, set] = useState(true)
    return (
      <Container>
        <h1>
          {/* <Trail open={open} onClick={() => set((state) => !state)}>
             <span>Lorem</span>
             <span>Ipsum</span>
             <span>Dolor</span>
             <span>Sit</span>
            {' '}
          </Trail> */}
          M2 Tuning
          <br /> Envelopamento Premium <br />
          Insulfilm e Estética Automotiva
        </h1>

        <a>
          Whatsapp online <img src={wats} alt={wats} className="wats" />
        </a>
      </Container>
    )
}

export default Principal;