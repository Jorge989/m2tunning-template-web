import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Staatliches', sans-serif;
  width: 100%;
  text-align: center;
  justify-content: center;


  padding-top: 50px;
  background-image: linear-gradient(
    to bottom,
    rgb(253, 253, 253),
    rgb(253, 253, 253)
  );

`
export const Textos = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  h1 {
    margin-top: 30px;
    color: #222222;
    font-size: 35px;

    font-weight: 400;

    text-align: center;

  }
  strong {
    color: #222222;
    font-size: 45px;
  }
`
export const Insta = styled.div`
  display: flex;
  padding: 0px 8px;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 10px;
  width: 100%;
  max-width: 1350px;
  padding-top:40px;
  @media (max-width: 900px) {
   
    justify-content: center;

  }
  a {
    color: #222222;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: #222222;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
  }
  img {
    width: 35px;
  }
`
export const CarrosWrap = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
padding-top:15px;

  
`
export const CarrosContianer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 33.33% 33.33%;

  justify-content: center;

  img {
    border-radius: 2px;
    width: 98%;

    height: 350px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;

    justify-content: center;

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

  justify-content: center;

  img {
    border-radius: 2px;
    width: 98%;

    height: 350px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;

    justify-content: center;

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

  justify-content: center;

  img {
    border-radius: 2px;
    width: 98%;

    height: 350px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;

    justify-content: center;

    img {
      border-radius: 2px;
      width: 100%;
      height: 100%;
    }
  }
`
export const Mapa = styled.div`
display:flex;
width:100%auto;
justify-content:center;
align-items:center;

iframe{
  width:50%;
}
`

