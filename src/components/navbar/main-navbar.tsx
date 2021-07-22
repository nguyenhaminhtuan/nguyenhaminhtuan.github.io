import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mediaQuery } from '../../styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Logo from '../logo';
import Container from '../container';
import ThemeToggler from '../theme-toggler';
import Button from '../button';
import Icon from '../icon';

type MainNavbarProps = {
  openNavbar: () => void;
};

function MainNavbar({ openNavbar }: MainNavbarProps): JSX.Element {
  return (
    <Container>
      <MainNavbarInner>
        <MainNavbarLeft>
          <Link href="/" passHref>
            <Logo />
          </Link>
        </MainNavbarLeft>
        <MainNavbarRight>
          <Button
            href="#get-in-touch"
            css={styles.getInTouch}
            variant="outlined"
          >
            Get in touch
          </Button>
          <ThemeToggler />
          <Icon.Button
            css={styles.hamburger}
            icon={faBars}
            size="lg"
            onClick={openNavbar}
          />
        </MainNavbarRight>
      </MainNavbarInner>
    </Container>
  );
}

const styles = {
  getInTouch: css`
    display: none;
    margin-right: 8px;
    ${mediaQuery('sm')} {
      display: inline-block;
    }
  `,
  hamburger: css`
    font-size: 28px;
    ${mediaQuery('sm')} {
      display: none;
    }
  `,
};

const MainNavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const MainNavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MainNavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export default MainNavbar;
