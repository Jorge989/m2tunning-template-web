import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100% !important;

  margin: 0 auto;

  flex-direction: column;
  background-color: #151515;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;

  font-family: 'Roboto', sans-serif;
  h2 {
    color: var(--yellow-500);
    margin-top: 10px;
    font-size: max(27px, 32px);
    letter-spacing: 0.6px;
    margin-bottom: 20px;
  }
  form {
    align-items: center;
    justify-content: center;

    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 40%;
    button {
      margin-top:20px;
      height: 3.5rem;
      cursor: pointer;
      border-radius: 3rem;
      background: var(--yellow-500);
      border: 0;
      padding: 0 3.2rem;
      display: flex;
      font-size: 18px;
      letter-spacing: 1px;
      width: 50%;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-weight: bold;
      transition: 0.5s;
      margin-bottom:50px;
      &:hover {
        filter: brightness(0.8);
      }
    }
    input {
      height: 35px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 3px;
      font-family: 'Roboto', sans-serif;
      padding-left: 5px;
      font-size: 16px;
      border: 1px solid #19191919;
    }
    textarea {
      width: 100%;
      height: 50vh;
      padding-left: 5px;
      font-size: 16px;
      border-radius: 3px;
      border: 1px solid #19191919;
      font-family: 'Roboto', sans-serif;
    }
    @media (max-width: 700px) {
      width: 90%;
    }
  }
  .conteudo {
    display: flex;

    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    height: 60vh;

    .icones {
      display: flex;
      flex-direction: column;
      align-items: center;
      :nth-child(3n) {
        margin-top: 20px;
        h2 {
          margin-top: 28px;
        }
      }
      :nth-child(2n) {
        margin-top: 0px;
        margin-bottom: 27px;
        h2 {
          margin-top: 0px;
        }
      }
      h2 {
        color: var(--yellow-500);
        margin-top: 10px;
        font-size: 27px;
        letter-spacing: 0.6px;
      }
      P {
        margin-top: 5px;
        color: #fff;
        text-align: center;
        font-size: 20px;
        letter-spacing: 0.6px;
        line-height: 25px;
      }
    }
  }

  @media (max-width: 700px) {
    padding-top: 450px;
    .conteudo {
      flex-direction: column;
      height: 120vh;
    }
  }
`
export default Container

export const Textos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: #fff;
  position: relative;

  h1 {
    color: var(--yellow-500);
    font-size: max(27px, 42px);
  }
  p {
    letter-spacing: 0px;
    margin-top: 10px;

    font-size: max(32px, 32px);
  }
  .paragrafo-mobile {
    display: none;
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
  gap: 40px;
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: flex-start;
  padding-top:80px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    padding-top:0px;
 margin-top:-40px;
    display: flex;
    text-align:center;
    width: 100%;
    height: 00vh;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`
