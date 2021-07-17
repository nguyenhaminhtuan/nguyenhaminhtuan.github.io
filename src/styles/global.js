import { css } from '@emotion/react';

const globalCss = ({ colors }) => css`
  ${import('./normalize.css')}
  ${import('./fonts.css')}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    line-height: 1.66;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.75rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: ${colors.text};
    background-color: ${colors.background};
  }

  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
    letter-spacing: 0px;
    font-family: 'IBM Plex Mono', monospace;
    line-height: 1.4;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  button {
    outline: 0;
    border: none;
    background-color: inherit;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default globalCss;
