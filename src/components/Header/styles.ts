import styled from 'styled-components'
export const Header1 = styled.header`
  display: flex;

  background-color: #141414;
  /* background-color:transparent; */
  /* background-image: linear-gradient(
    to right,
    rgb(38, 38, 38),
    rgb(253, 253, 253)
  ); */
  width: 100%;

  height: 80px;
  max-width: 100%;
  align-items: center;
  margin: 0 auto;

  position: fixed;
  z-index: 999;
  font-family: 'Staatliches', sans-serif;
  box-shadow: 0px 0px 10px 3px #000;
  .imagem {
    margin-bottom: 5px !important;
    cursor: pointer;
  }
`
export const Nav = styled.nav`
  display: flex;

  align-items: center;
  flex-direction: row;

  align-items: center;
  letter-spacing: 1.5px;
  justify-content: space-between;
 
  @media (max-width: 600px) {
    display: none;
  }
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  list-style: none;
  justify-content: space-between;
  gap: 20px;
`
export const Li = styled.li`
  display: flex;

  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  gap: 20px;
  
`
export const A = styled.a`
  text-decoration: none;
  font-size:22px;

  :hover {
    text-decoration: underline;
  }
  @media (max-width: 900px) {
    text-decoration: none;
    font-size: 1.3vh;
    :hover {
      text-decoration: underline;
    }
  }

`
