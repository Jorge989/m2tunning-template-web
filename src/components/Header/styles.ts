import styled from 'styled-components'
export const Header1 = styled.header`
  display: flex;

  background-color: rgb(38, 38, 38);
  flex-wrap: wrap;
  width: 100%;

  height: 80px;
  max-width: 100%;
  align-items: center;
  margin: 0 auto;
  gap: 50px;
  position: fixed;
  z-index: 999;
  font-family: 'Staatliches', sans-serif;
  box-shadow: 0px 0px 10px 3px #000;
  .imagem{
  margin-bottom:5px !important;
  }
`
export const Nav = styled.nav`
  display: flex;
  max-width: 1300px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  letter-spacing: 1.5px;
  justify-content: space-between;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
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
  :hover {
    text-decoration: underline;
  }
`
