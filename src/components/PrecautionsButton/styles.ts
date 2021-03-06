import styled from 'styled-components'


export const Container = styled.div`

    .precaution1 {
      height: 3rem;
      border-radius: 3rem;
      background: var(--gray-850);
      border: 0;
      padding: 0 1.5rem;
      display: flex;
      font-size:14px;
      cursor: pointer;
      letter-spacing:1px;
      margin-left:20rem;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-weight: bold;
      svg {
        width: 20px;
        height: 20px;
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
