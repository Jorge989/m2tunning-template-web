import styled from 'styled-components'
import banner from '../../../public/img/capa22.png'
export const Container = styled.div`
  display: flex;
  width: 100% !important;
  height: 660px;
  margin: 0 auto;

  flex-direction: column;

  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  padding-top: 110px;
  font-family: 'Staatliches', sans-serif;

  background: url(${banner});
  background-position: 0px -300px;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    /* margin-top: 30px; */
    color: #000;
    font-size: 60px;
    letter-spacing: 5px;
    font-weight: bold;
    text-shadow: 0px 2px 10px 10px #000;
    text-align: center;
    z-index: 3;
    letter-spacing: 10px;
  }
  .wats {
    width: 25px;
    height: 25px;
  }
  a {
    font-size: max(20px, 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: bolder;
    background-color: transparent;
    border: 2px solid #47ce37;
    margin-top: 123px;
    color: #fff;
    width: 210px;
    cursor: pointer;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 1px #000;

    background-color: transparent;
    letter-spacing: 2px;
    z-index: 3;

    text-align: center;
  }
  a:hover {
    width: 212px;
    height: 62px;
    background-color: #2fb91f;
  }
  @media (max-width: 600px) {
    display: flex;
    width: 100% !important;
    height: 660px;
    margin: 0 auto;

    flex-direction: column;

    align-items: center;
    justify-content: flex-start;
    padding-top: 130px;
    font-family: 'Staatliches', sans-serif;

    background: url(${banner});
    background-position: 0px -20px;
    background-repeat: no-repeat;
    background-size: cover;
    .container {
      display: flex;
      width: 100% !important;
      height: 660px;
      margin: 0 auto;

      flex-direction: column;

      align-items: center;
      justify-content: flex-start;
      padding-top: 130px;
      font-family: 'Staatliches', sans-serif;

      background: url(${banner});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    h1 {
      /* margin-top: 30px; */
      color: #fff;
      font-size: 40px;
      letter-spacing: 5px;
      font-weight: bold;
      padding: 50px 0px;
      text-shadow: 0px 0px 3px 2px #000;
      text-align: center;
      z-index: 3;
      letter-spacing: 10px;
    }
    .wats {
      width: 25px;
      height: 25px;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-weight: bolder;
      background-color: transparent;
      background-color: #47ce37;
      margin-top: 15px;
      color: #fff;
      width: 210px;
      cursor: pointer;
      height: 60px;
      border-radius: 5px;
      box-shadow: 0px 1px 5px 1px #000;
      letter-spacing: 2px;
      z-index: 3;

      text-align: center;
    }
    a:hover {
      width: 212px;
      height: 62px;
      background-color: #2fb91f;
    }
  }
`
