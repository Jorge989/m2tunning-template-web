import React from 'react';
import wats from '../../../public/img/wats.svg'
 import { Container } from './styles';

const Principal: React.FC = () => {
    return <Container>
         <h1 >
            M2 Tuning
            <br /> Envelopamento Premium <br />
            Insulfilm e Estética Automotiva
          </h1>

          <a >
            Whatsapp online{' '}
            <img src={wats} alt={wats}   className="wats"/>
          </a>
   
    </Container>
}

export default Principal;