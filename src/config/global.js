import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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
    font-family: 'Noto Sans KR', sans-serif;
    background-color: rgba(20,20,20,1);
    border: 0;
    font-size: 100%;
    font: inherit;
    margin : 0;
    padding: 0;
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
`;

export default GlobalStyle;