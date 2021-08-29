

import Link from 'next/link'
import Image from 'next/image'
import { Header1, Nav, Ul, Li, A } from './styles'
import { ContatoButton } from '../../components/PrecautionsButton'
const Header: React.FC = () => {


  return (
    <Header1>
      <Link href="/">
        <Image
          className="imagem"
          src="/img/logo.png"
          alt="logo"
          width={150}
          height={60}
          quality={75}
        />
      </Link>
      <Nav>
        <Ul>
          <Li>
            <A href="/quemsomos">quem somos</A>
          </Li>
          <Li>
            <A href="/envelopamentos">Envelopamentos</A>
          </Li>
          <Li>
            <A href="/ppf">ppf</A>
          </Li>
          <Li>
            <A href="/insulfilm">pelicula de proteção solar</A>
          </Li>
          <Li>
            <A href="/ppf">estética</A>
          </Li>
          {/* <Li>
            <A href="#signin">contato</A>
          </Li> */}
        </Ul>
        <ContatoButton/>
      </Nav>
    </Header1>
  )
}

export default Header
