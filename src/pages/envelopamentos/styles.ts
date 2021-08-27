import styled from 'styled-components';

import banner2 from '../../../public/img/carbon.jpg'
export const Container = styled.div`
  display: flex;
  padding-top: 80px;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;



  font-family: 'Staatliches', sans-serif;


`
export const Textos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  padding-top: 40px;
  background-color: #151515;
  flex-direction: column;
  color: #fff;
  height: 350px;

  font-family: 'Roboto', sans-serif;

  h1 {
    color: var(--yellow-500);
    font-size: max(27px, 42px);
  }
  .paragrafo-desktop {
    letter-spacing: 0px;
    margin-top: 10px;

    font-size: max(32px, 32px);
  }
  .paragrafo-mobile {
    display: none;
  }
  @media (max-width: 900px) {
    .paragrafo-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      display: block;
      line-height: 35px;
    }
    .paragrafo-desktop {
      display: none;
    }
    display: flex;
    padding-top: 0px;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;

    font-family: 'Staatliches', sans-serif;
    h1 {
      padding-top: 30px;
      font-size: max(30px, 30%);
    }
    p {
      font-size: max(25px, 20%);
      margin-top: 5px;
      font-weight: 200;
    }
  }
`
export const CarrosWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  width: 100%;
  padding: 10px 10px;
  padding-bottom: 80px;

  @media (max-width: 600px) {
    padding: 0px 0px;
    padding-top: 30px;

    margin-bottom:20px;
  }
  .btn-carregar-box {
  }
  .carregar-maisfotos {
    align-items: center;
    justify-content: center;

    width: 170px;
    border-radius: 5px;
    border: none;
    outline: 0;
    cursor: pointer;
    box-shadow: 0px 1px 3px 1px #fff698;
    font-weight: bold;
    font-size: 13.5px;
    background: #fe2;
    /* border: 3px solid #fe2; */
    height: 30px;
    @media (max-width: 600px) {
      margin-top: 30px;

      margin-bottom: 30px;
    }
  }
`
export const CarrosContianer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 33.33% 33.33%;
  padding: 0px 20px;
  justify-content: center;
  grid-column-gap: 8px;

  img {
    border-radius: 2px;
    width: 99%;
    height: 320px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;

    justify-content: center;
gap:10px;
    img {
      border-radius: 2px;
      width: 100%;
      height: 100%;
    }
  }
`
export const CarrosContianer2 = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 33.33% 33.33%;

  padding: 0px 20px;
  justify-content: center;
  grid-column-gap: 8px;
  margin-top: -5px;

  img {
    border-radius: 2px;
    width: 99%;
    height: 320px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    img {
      border-radius: 2px;
      width: 100%;
      height: 100%;
    }
  }
`
export const CarrosContianer3 = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 33.33% 33.33%;

  padding: 0px 20px;
  justify-content: center;
  grid-column-gap: 8px;
  margin-top: -5px;

  img {
    border-radius: 2px;
    width: 99%;
    height: 320px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    img {
      border-radius: 2px;
      width: 100%;
      height: 100%;
    }
  }
`
export const CarrosContianer4 = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 33.33% 33.33%;

  padding: 0px 20px;
  justify-content: center;
  grid-column-gap: 8px;
  margin-top: -5px;

  img {
    border-radius: 2px;
    width: 99%;
    height: 320px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    img {
      border-radius: 2px;
      width: 100%;
      height: 100%;
    }
  }
`
export const CarrosContianer5 = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 33.33% 33.33%;

  padding: 0px 20px;
  justify-content: center;
  grid-column-gap: 8px;
  margin-top: -5px;

  img {
    border-radius: 2px;
    width: 99%;
    height: 320px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    img {
      border-radius: 2px;
      width: 100%;
      height: 100%;
    }
  }
`
