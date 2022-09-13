import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  

::-webkit-scrollbar {
   width: 8px; 
  } 

::-webkit-scrollbar-thumb { 
  background-color: #424242;; 
   border-radius: 30px;
  }

::-webkit-scrollbar-track { 
  background-color: rgba(0,0,0,0.85);
   border-radius: 10px; 
   box-shadow: inset 0px 0px 5px rgba(0,0,0,0.85); 
  }


  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  abbr,
  address,
  em,
  img,
  q,
  strong,
  b,
  i,
  ol,
  ul,
  li,
  form,
  label,
  article,
  figure,
  figcaption,
  footer,
  nav,
  section,
  main {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
  }

  body {
    background-color: rgba(20,20,20,1);
    border: 0;
    font-size: 100%;
    margin : 0;
    padding: 0;
    overflow-x:hidden;
    overflow-y:auto;
  }
  
  *, *:before, *:after {
    outline: none;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  p,h2 {
    margin: 0;
  }
  input, button {
    background-color: transparent;
  }

`;

export default GlobalStyle;
