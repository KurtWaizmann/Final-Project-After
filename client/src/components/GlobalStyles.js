import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      padding: 0;
      border: 0;
      /* margin:0; */
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
      /* border: 2px solid red; */
  }
  html {
    overflow-y: overlay;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      /* display: block; */
  }

  body {
      line-height: 1;
      /* height: 100vh; */
      /* overflow: auto; */
  }

  ol, ul {
      list-style: none;
  }

  blockquote, q {
      quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

h1,
h2,
h3 {
  color: black;
  font-family: 'Baskervville', serif;
  text-align: center;
}
p,
a,
li,
blockquote,
input,
div {
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  /* border: 2px solid red; */
}
  /* #root{
    height: 100vh;
  } */
  /* ::placeholder {
  color: red;
  opacity: 1;} */
  
`;
