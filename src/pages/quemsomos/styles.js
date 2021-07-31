import styled from 'styled-components'
import m2 from '../../../public/img/m2black.jpg'
import ppf1 from '../../../public/img/ppf1.jpg'
import banner from '../../../public/img/skul.png'
export const Container = styled.div`
  display: flex;
  width: 100% !important;
  height: 650px;
  margin: 0 auto;

  flex-direction: column;
  background-color: #fbfbfb;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  padding: 115px 0px;

  gap: 40px;
  font-family: 'Staatliches', sans-serif;

  /* background: url(${banner}); */

  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 700px) {
    padding-top:450px;
 

  }
  /* 

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`
export const Textos = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
padding:20px;
  color: #222222;
  position: relative;

  h1 {
    font-size: max(27px, 42px);
  }
  p {
    letter-spacing: 1px;
    margin-top: 10px;

    font-size: max(38px, 38px);
  }
  .paragrafo-mobile{
display:none;
  }
   @media (max-width: 1200px) {
    margin-top: 10px;
    width: 100%;
  }
`

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  img {
    width: 500px;
    height: 400px;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 400px;
      border-radius: 5px;
    }
  }
`


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
gap:40px;
  display: flex;
  width: 100%;
  height: 660px;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    display: flex;
    flex-direction:  column-reverse;
padding-top:20px;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    gap:20px;

  }
`

