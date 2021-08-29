import { Inframe } from 'components/Mapa2/styles';
import React from 'react';
import Image from 'next/image'
 import { Container, H1, Textos,Icones } from './styles'

const Servicos: React.FC = () => {
    return (
      <Container>
        <div
          className="textos"
          style={{
            background: '#141414',
            width: '100%',
            height: '200px',
            color: '#fddc3e',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop:"-20px"

          }}

        >

          <h1>Envelopamento</h1>
          <h1>Som e Acessórios</h1>
          <h1>Acessórios Automotivos</h1>
        </div>
        <Icones>
          <div className="container-image">
            <div className="items">
              <Image
                className="imagem"
                src="/icones/clean.png"
                alt="logo"
                width={165}
                height={170}
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
                width={165}
                height={170}
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
                width={150}
                height={130}
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
                width={90}
                height={80}
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
