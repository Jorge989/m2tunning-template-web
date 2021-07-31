import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  .trails-main {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trails-text {
    position: relative;
    width: 100%;
    height: 300px;

    text-shadow: 0px 2px 10px 10px #000;
    color: #fff;
    font-size: max(30px, 75px);
    font-weight: 600;

    will-change: transform, opacity;
    transition: 1s;
    font-family: 'Staatliches', sans-serif;
  }
  .trails-text > div {
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    .trails-main {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 100%;

      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .trails-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      width: 100%;

      line-height: 30px;
      color: #fff;
      line-height: 40px;
      font-size: max(40px, 4vw);
      font-weight: 400;

      will-change: transform, opacity;

      font-family: 'Staatliches', sans-serif;
    }
    .trails-text > div {
    }
  }
`
