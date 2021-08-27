import { createGlobalStyle } from 'styled-components'

 export const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #FDDC3E;
    --background: #030518;
    --white: #eeeeee;
    --grey: #cccccc;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
      --white: #ffffff;
  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --cyan-500: #61dafb;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #151515;
  --yellow-500: #eba417;
  }
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }





  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyles
