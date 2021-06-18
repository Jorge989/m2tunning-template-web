import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Staatliches', sans-serif;
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;

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
  width: 100;
  h1 {
    margin-top: 30px;
    color: #222222;
    font-size: 35px;

    font-weight: 400;

    text-align: center;
    z-index: 3;
  }
  strong {
    color: #222222;
    font-size: 45px;
  }
`
export const Insta = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`
export const CarrosContianer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  img {
    border-radius: 2px;
    width: 330px;
    height: 340px;
  }
`
export const CarrosContianer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
  img {
    border-radius: 2px;
    width: 330px;
    height: 340px;
  }
`

