import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F3F3F3;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    height: 100vh;
    padding: 20px;
  }

  :root {
    --primary-color: #3E69DC;
    --text-color-dark: #2C313F;
    --text-color-light: #F3F3F3;
    --background-color: #F3F3F3;
    --button-color-hover: ${darken(0.1, '#3E69DC')};
    --color-disabled: #E0E0E0;
    --background-disabled: #828282;
  }
`;