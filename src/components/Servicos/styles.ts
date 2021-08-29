import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;

  .textos {
    display: flex;
    align-items: center;
    flex-direction: row !important;
    justify-content: space-around;
    padding: 0px 20px;
    width: 100%;
    height: 200px;

    @media (max-width: 900px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      padding: 0px 20px;
      width: 100%;
      height: 200px;

    }
  }
  font-family: 'Staatliches', sans-serif;
`




export const H1 = styled.h1`

`


export const Icones = styled.div`
  .items {
    /* display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width:100%;
background-color:red;

    justify-content: center; */
  }

  .container-image {
    display: flex;

    flex-wrap: wrap;
    margin: 100px auto;
    text-align: center;
    align-items: center;
    justify-content: center;

    max-width: 1200px;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;

    width: 600px;

    padding-bottom: 100px;
    justify-content: center;


    .mobile-paragrafo {
      display: none;
    }
  }

  .items img {
    width: 90px;
  }
  .seguranca-imagem {
    height: 85px;
  }
  .items h2 {
    margin-top: 20px;
    font-size: 27px;
  }
  .items p {
    margin-top: 5px;
    line-height: 25px;
    font-size: 23px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
  }

  @media (max-width: 900px) {
    .items {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding-top: 200px;
      justify-content: center;
    }

    .container-image {
      display: flex;

      flex-wrap: wrap;
      margin: 20px auto;
      text-align: center;
      align-items: center;
      justify-content: center;

      max-width: 1200px;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding-top: 50px;
      width: 300px;
      justify-content: center;
      .mobile-paragrafo {
        display: none;
      }
    }

    .items img {
      width: 120px;
    }
    .seguranca-imagem {
      height: 85px;
    }
    .items h2 {
      margin-top: 20px;
      font-size: 27px;
    }
    .items p {
      margin-top: 5px;
      line-height: 25px;
      font-size: 31px;
      line-height: 50px;
      font-weight: 500;
    }
  }
`
export const Textos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  color: var(--yellow-500);
  background-color: #141414;
  height: 200px;


  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    padding: 8px 0px;
    letter-spacing: 2px;
    margin-top: -190px;
    font-size: max(17px, 17px);
  }
`
