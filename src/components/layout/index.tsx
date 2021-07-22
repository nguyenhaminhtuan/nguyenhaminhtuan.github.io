import styled from '@emotion/styled';
import { ThemeProvider, Global } from '@emotion/react';
import { globalCss, mediaQuery, themes } from '../../styles';
import { useThemeMode } from '../../hooks/theme-mode';
import Header from './header';
import Footer from './footer';
import Container from '../container';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={themes[theme]}>
      <Global styles={globalCss} />
      <LayoutWrapper>
        <Header />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 70px;

  ${mediaQuery('sm')} {
    margin-top: 120px;
  }
`;

export default Layout;
