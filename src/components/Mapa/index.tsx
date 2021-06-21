import React from 'react';

 import { Container } from './styles';

const Mapa: React.FC = () => {
    return (
      <Container>
        <h1>Conheça nosso estabelecimento</h1>
        <h2>
          Av. Washington Luís, 4511 - Santo Amaro, São Paulo - SP, 04627-001
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0256628867373!2d-46.67560258538197!3d-23.639251970357677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6481ea7683%3A0x519a85c11abac95e!2sM2%20Tuning%20-%20Envelopamento%20Premium%2C%20Insulfilm%20Est%C3%A9tica%20Automotiva%20e%20PPF%20(%20PROTE%C3%87%C3%83O%20DE%20PINTURA%20)!5e0!3m2!1spt-BR!2sbr!4v1624203940280!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </Container>
    )
}

export default Mapa;