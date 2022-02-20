import { createGlobalStyle } from 'styled-components';
import { popoverClasses } from "@mui/material/Popover";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #00DF5E;
    --secondary: #191E24;
    --terciary: #2C3440;

    --dark: #171717;
    --contrast: #212121;
    --grey: #828282;
    --light: #F9F9F9;
  
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: unset;

  }

  body {
    background: var(--secondary);
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;

    ::-webkit-scrollbar {
      background-color: var(--light);
      transition: .2s;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--terciary);

      &:hover {
        background: var(--primary);
      }
    }

  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    color: var(--light);

  }

  ul {
    list-style: none;

  }

  h1 {
    font-size: 42px;

  }

  h2 {
    font-size: 28px;
    
  }

  h3 {
    font-size: 16px;
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