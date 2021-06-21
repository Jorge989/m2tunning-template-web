import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import  Link  from 'next/link'
import open from '../../../public/img/menu.svg'
import close from '../../../public/img/close.svg'
import WebJumpLogo from '../../../public/img/logo.png'

//ROTAS DA PÁGINA, ALTERE AQUI TAMBÉM
const NavRoutes = [
  {
    to: '/',
    Name: 'envelopamentos'
  },

  {
    to: '/calças',
    Name: 'insulfilm'
  },
  {
    to: '/sapatos',
    Name: 'contato'
  },
//   {
//     to: '/contato',
//     Name: 'contato'
//   }
]

interface effect {
  show: boolean
}

const Header = styled.header`
  position: fixed;
  left: 0;
  display: flex;
  width: 100%;
  top: 0;
  align-items: center;
  right: 0;
  z-index: 9999;
  
  @media screen and (min-width: 600px) {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height:120px;
  max-width: 1200px;
  align-items: center;
  padding: 0 30px;
  margin: 0 auto;
  z-index: 9999;
  background-color: rgb(38, 38, 38);

  box-shadow: 0px 0px 3px 2px #000;
  color: #fddc3e;
  svg {
    width: 8%;
    color: #fddc3e;
    height: 10%;
    margin-right: 10px;
  }
`

const Brand = styled(Link)`
  img {
    display: flex;

    width: 10px !important;
    height: 10px !important;
  }
`

const ToggleMenu = styled.img`
  display: flex;
  width: 50px;
  height: 200px;
  position: relative;
  z-index: 9999;
  margin-left: 17px;

  color: #fddc3e;
  svg {
    color: #fddc3e;
  }
`

const Navgation = styled.div<effect>`
  position: absolute;
  background-color: rgb(38, 38, 38);

  left: 0;
  right: 0;

  text-align: center;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 400vh;
  color: ${(props) =>
      props.show &&
      css`
      transition: transform: scale(1.3);
      -webkit-transform: scale(1.3);
      -moz-transform: scale(1.3) 0.8s;
    `}
    ul {
    position: absolute;
    top: 19%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  li {
    padding: 30px 0;
    text-decoration: none;
    list-style: none;
    a {
      color: #fddc3e;

      font-size: 25px;
      font-weight: 600;
      text-decoration: none;
      
    }
  }
`

const Mobile: React.FC = () => {
  const [menu, setMenu] = useState(true)
  const showMenu = () => setMenu(!menu)

  return (
    <>
      <Header>
        <Container>
          <Brand href="/">
            <img src={WebJumpLogo} alt="Loja" width="220" />
          </Brand>
          <ToggleMenu src={menu ? open : close} onClick={showMenu} />
          {!menu && (
            <Navgation show={true}>
              <ul>
                {NavRoutes.map(({ to, Name }) => (
                  <li key={Name}>
                    <Link href={to}>{Name}</Link>
                  </li>
                ))}
              </ul>
            </Navgation>
          )}

          {/* <FiSearch /> */}
        </Container>
      </Header>
    </>
  )
}

export default Mobile
