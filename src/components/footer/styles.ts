import styled from 'styled-components'
export const Footer = styled.footer`
  /* display: flex;
  height: 200px;
  background-color: #141414;
  width:100%;
  max-width:100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 100%;
  padding: 0px 50px;
  font-family: 'Staatliches', sans-serif;

  /* background-color: #0c1524; */
  background-color: #121212;
  .footer-logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1250px;
  }
  #logo-fylo-footer {
    max-width: 100%;
    margin-top: 35px;

    width: 130px;
  }
  .footer-info {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 1250px;
    max-width: 1250px;
    max-width: 100%;
  }
  .localizacao {
    display: flex;
    justify-content: space-between;

    #localizacao-imagem {
      width: 20px;
    }
    p {
      font-size: 20px;
      letter-spacing: 2px;
      color: #fff;
      color: #fddc3e;
      line-height: 25px;
    }
  }
  .contatos {
    display: flex;
    flex-direction: row;
    color: #fddc3e;
  }
  .icones-contatos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
  }
  .textos-contatos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    color: #fddc3e;
  }
  .textos-contatos a {
    align-items: center;
    justify-content: center;
    color: #fddc3e;
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 40px;
    text-decoration: none;
  }
  .sobre {
    line-height: 30px;

    color: #fddc3e;
    background-color: red;
  }
  .sobre a {
    color: #fddc3e;
    font-size: 18px;
  }
  .termos {
    line-height: 30px;
    padding-top: 20px;
    color: #fddc3e;
  }
  .termos a {
    color: #fddc3e;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .icones ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 20px;
    color: #fddc3e;
  }

  .icones li a img {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fddc3e;

    width: 30px;
    height: 30px;
    border: 2px solid #fddc3e;
    border-radius: 100px;
    list-style: none;
    cursor: pointer;
  }

  #localizacao-imagem {
    width: 5%;
    height: 2%;
  }
  .localizacao p {
    padding-left: 20px;
  }
  @media (max-width: 900px) {
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;

      padding: 40px 0px;
    }
    .footer-logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: 100%;
    }
    @media (max-width: 600px) {
      .footer-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 100%;
      }
    }
    #logo-fylo-footer {
      max-width: 100%;
      margin-top: 50px;

      width: 130px;
    }
    .footer-info {
      flex-wrap: wrap;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 20px;
      width: 1250px;
      max-width: 100%;
    }

    .localizacao {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 30px;
      font-size: 20px;
    }
    .contatos {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      color: #fddc3e;
      font-size: 20px;
    }
    .icones-contatos {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 20px;
    }
    .textos-contatos {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      gap: 20px;
      color: #fddc3e;
      font-size: 20px;
    }
    .textos-contatos a {
      color: #fddc3e;
      font-size: 20px;
      line-height: 20px;
    }
    .sobre {
      line-height: 30px;
      padding-top: 50px;
      color: #fddc3e;
      font-size: 20px;
    }
    .sobre a {
      color: #fddc3e;
    }
    .termos {
      line-height: 30px;
      padding-top: 40px;
      color: #fddc3e;
      font-size: 20px;
      padding-left: 8%;
    }
    .termos a {
      color: #fddc3e;
    }
    .icones {
      display: flex;
      margin-top: 50px;
      align-items: center;
      justify-content: center;
      padding-left: 25%;
    }
    .icones ul {
      display: flex;
      flex-direction: row;
      gap: 20px;
      color: #fddc3e;
    }

    .icones li a img {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fddc3e;

      width: 30px;
      height: 30px;
      border: 2px solid #fddc3e;
      border-radius: 100px;
    }

    #localizacao-imagem {
      width: 4%;
      height: 17%;
      margin-top: 10px;
    }
    .localizacao p {
      padding-left: 20px;
    }
  }
`
