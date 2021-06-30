import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  width: 100%;
  
  flex-direction: column;
  align-items: center;
height:100vh;
  justify-content: flex-start;
  padding: 150px 10px;

  font-family: 'Staatliches', cursive;
  letter-spacing: 3px;
  text-align: center;


  iframe {
    margin-top: 15px;
    width: 90%;
    height:80%;
  }
  h1 {
    color: #222222;
    font-size: 45px ;
    align-items: center;
  }
  h2 {
    margin-top: 15px;
    color: #222222;
    font-size: 30px !important;
    align-items: center;
    font-weight: 500;

    text-align: center;
  }
`
