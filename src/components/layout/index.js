import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider, Global } from '@emotion/react';
import { globalCss, mediaQuery, themes } from '../../styles';
import { ThemeModeProvider } from '../../hooks/theme-mode';
import Header from './header';
import Footer from './footer';
import Container from '../container';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeModeProvider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <LayoutWrapper>
          <Global styles={globalCss} />
          <Header />
          <Main>
            <Container>{children}</Container>
          </Main>
          <Footer />
        </LayoutWrapper>
      </ThemeProvider>
    </ThemeModeProvider>
  );
};

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 80px;

  ${mediaQuery('sm')} {
    margin-top: 120px;
  }
`;

export default Layout;
