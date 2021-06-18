


import Image from 'next/image'
import {Header1,Nav,Ul,Li,A}from './styles'
const Header: React.FC = () => {


  return (
    <Header1>
      <Image
     className="imagem"
        src="/img/logo.png"
        alt="logo"
        width={150}
        height={60}
        quality={75}

      />
      <Nav>
        <Ul>
          <Li>
            <A href="#sobre">
              Envelopamentos
            </A>
          </Li>
          <Li>
            <A href="#team" >
              insulfilm
            </A>
          </Li>
          <Li>
            <A href="#signin" >
              limpeza técnica
            </A>
          </Li>
          <Li>
            <A href="#signin" >
              contato
            </A>
          </Li>
        </Ul>
      </Nav>
    </Header1>
  )
}

export default Header
