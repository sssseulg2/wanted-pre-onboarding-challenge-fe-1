import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
  button {
    padding: 0;
    border: none;
    border-radius: 5px;
    background-color: #607EAA;
    color: #eee;
    font-size: 0.9rem;
    font-family: 'NEXON Lv2 Gothic';
    &:hover{
        background-color: #1C3879;
        transition: all 0.5s;
    }
  }
`;

export default GlobalStyle;