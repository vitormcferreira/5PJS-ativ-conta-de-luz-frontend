import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primarylightColor,
  primaryDarkColor,
} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    /* background-color: ${primaryDarkColor}; */
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: ${primarylightColor};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    border: 1px solid ${primarylightColor};
  }

  button:active {
    border-color: ${primaryDarkColor};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 1200px;
  background-color: ${primarylightColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
