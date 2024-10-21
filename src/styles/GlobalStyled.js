import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family:  "Comic Sans MS", "Comic Sans", cursive;
    background: ${colors.white};
  }

  html, body, #root {
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: ${colors.errorColor};
  }
`;

export const MainContent = styled.section`
  max-width: 340px;
  margin: auto;
  padding: 30px;
  border-radius: 4px;
  background: ${colors.white};
`;
