import { Inframe } from 'components/Mapa2/styles';
import React from 'react';
import Image from 'next/image'
 import { Container, H1, Textos,Icones } from './styles'

const Servicos: React.FC = () => {
    return (
      <Container>
        <Textos>
          <H1>Insulfilm</H1>
          <H1>Envelopamentos</H1>
          <H1>Som</H1>
          <H1>Acessórios Automotivos</H1>
        </Textos>
        <Icones>
          <div className="container-image">
            <div className="items">
              <Image
                className="imagem"
                src="/icones/clean.png"
                alt="logo"
                width={160}
                height={150}
                quality={100}
              />
              <h2>LImpeza a seco</h2>
              <p>
                Higienização de interiores
                <br />
                toCristlização
              </p>
            </div>
            <div className="items">
              <Image
                className="imagem"
                src="/icones/sun-protection.png"
                alt="logo"
                width={160}
                height={150}
                quality={100}
              />
              <h2>Películas de Proteção Solar</h2>
              <p>
                Aplicação de películas de proteção solar
                <br /> anti vandalismo
              </p>
            </div>
            <div className="items">
              <Image
                className="imagem"
                src="/icones/volume.png"
                alt="logo"
                width={160}
                height={150}
                quality={100}
              />
              <h2>Acessórios Automotivos</h2>
              <p className="paragrafo-desktop">
                Som, Multimída, Sensores, bloqueadores, camera de ré, xenon
                <br />
                lampadas de LED, travas elétricas e Vidros Elétricos.
              </p>
              <p className="mobile-paragrafo">
                Som, Multimída, Sensores, <br /> bloqueadores, camera de ré,
                xenon lampadas de LED,
                <br /> travas elétricas e Vidros Elétricos.
              </p>
            </div>
            <div className="items">
              <Image
                className="imagem"
                src="/icones/car.png"
                alt="logo"
                width={160}
                height={150}
                quality={100}
              />
              <h2>Envelopamento Automotivo</h2>
              <p>
                Envelopamento de teto, colunas, capô, frisos, grades,
                <br /> máscaras fumê nos farois e lanternas.
              </p>
          
            </div>
          </div>
        </Icones>
      </Container>
    )
}

export default Servicos;