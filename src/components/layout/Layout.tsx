import React from 'react';

/**
 * styled-components
 */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
    padding: 0;
    margin: 0;
    background: ${(props) => props.theme.background};
        color:  ${(props) => props.theme.color};
    overscroll-behavior: none;
    overflow-x: hidden;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } 

`;

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const darkTheme = {
    background: '#000',
    color: '#ffffff',
  };

  const lightTheme = {
    background: '#fff',
    color: '#000',
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
