import styled from 'styled-components'

export const Container = styled.div`
  .precaution1 {
    height: 3.5rem;
    cursor: pointer;
    border-radius: 3rem;
    background: #39c957;
    border: 0;
    padding: 0 3.2rem;
    display: flex;
    font-size: 18px;
    letter-spacing: 1px;

    align-items: center;
    justify-content: center;
    color: var(--white);
    font-weight: bold;
    svg {
      width: 30px;
      height: 30px;
    }
    svg:first-child {
      margin-right: 1rem;
    }
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`
