import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2D0C5E;
    --secondary: #3916C5;
    --orange: #D18000;
    --background: #F3F3F3;

    --text-dark-contrast: #131313;
    --text-dark: #000000;
    --text-dark-light: #646464;
    --text-dark-medium: #323232;
    --text-light: #FFFFFF;
    --text-light-grey: #DDDDDD;

    --transparent-default: rgba(255, 255, 255, 0.1);
    --text-success: #14FF00;

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;

  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;

  }

  ul {
    list-style: none;

  }

  h1 {
    font-size: 48px;

  }

  h2 {
    font-size: 32px;
    
  }

  h3 {
    font-size: 20px;
  }


  button {
    cursor: pointer;

    &:hover:not(.noFilter) {
      filter: brightness(0.8);

    }
    
  }

  [disabled] {
    opacity: 0.4;
    cursor: not-allowed;

  }

`