import styled, { createGlobalStyle } from 'styled-components';
import {
  primarylightColor,
  primaryDarkColor,
  primaryColor,
  primaryGrayColor,
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

  button:active {
    border-color: ${primaryDarkColor};
  }

  a {
    text-decoration: none;
  }

  .error {
    color:red;
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

export const Title = styled.h1`
  grid-area: title;
  justify-self: center;
  margin-bottom: 30px;
  font-size: 40px;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  border: 2px solid ${primaryGrayColor};
  border-radius: 5px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.4em;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
`;

export const LightButton = styled(Button)`
  background-color: ${primarylightColor};
  color: ${primaryColor};
  border: 1px solid ${primaryColor};

  &:hover {
    background-color: ${primaryColor};
    color: ${primarylightColor};
    border: 1px solid ${primaryColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;

export const DarkButton = styled(Button)`
  background-color: ${primaryColor};
  color: ${primarylightColor};
  border: 1px solid ${primaryColor};

  &:hover {
    background-color: ${primarylightColor};
    color: ${primaryColor};
    border: 1px solid ${primaryColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;
