import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.borderColor};
      border-radius: 0.8rem;
    }
    ::-webkit-scrollbar-track{
      background: ${(props) => props.theme.background};
      border-radius: 0.8rem;
    }
  }

  html {
    min-height: 35rem;
    max-height: 35rem;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.50s linear;
    color:${(props) => props.theme.white};
    background: #000;
  }

  body, html, #root {
    width: 100%;
    height: 100%;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul{
    list-style:none;
  }
`
export const PagesWrapper = styled.div`
  width: 30rem;
  height: 100%;
  overflow: hidden;
  position: relative;

  > main {
    width: 100%;
    height: 100%;

    background: rgb(36, 39, 44);
    background: linear-gradient(
      58deg,
      rgba(36, 39, 44, 0.804359243697479) 60%,
      rgba(207, 208, 209, 0.0984768907563025) 100%
    );
  }
`
