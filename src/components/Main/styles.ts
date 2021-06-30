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
  max-width: 99.5%;

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
export const InstaButton = styled.button`
  display: flex;
  background-image: linear-gradient(to right, #6c49c6, #c837ab, #ff7143);
border:2px solid #fff;
box-shadow:0px 0.6px 3px 2px  #666;
cursor: pointer;
color:#fff;
font-family: 'Roboto', sans-serif;
font-weight:600;
letter-spacing:1px;



  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  border: none;
  outline: 0;
  height: 32px;
  width: 170px;
  max-width: 170px;
  margin: 0 auto;
`
export const CarrosWrap = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
padding-top:10px;

  
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
    width: 100%;
    height: 350px;
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
    width: 100%;

    height: 350px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    gap: 10px;
    justify-content: center;
margin-top:20px;
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
    width: 100%;

    height: 350px;
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



