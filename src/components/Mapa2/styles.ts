import styled from 'styled-components'
import foto from '../../../public/img/1.jpg'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;

  font-family: 'Staatliches', cursive;

  @media (max-width: 900px) {
    padding:0px 5px;
  }
`


export const H1 = styled.h1`
  display: flex;
  font-size: 31px;
  color: #222222;
  font-weight: 400;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Strong = styled.strong`
  display: flex;
  color: #222222;
  font-size: 37px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const Inframe = styled.iframe`
  display: flex;
margin-top:30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
`

