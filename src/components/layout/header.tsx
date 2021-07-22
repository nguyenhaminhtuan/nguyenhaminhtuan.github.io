import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { mediaQuery } from '../../styles';
import { MainNavbar, SubNavbar } from '../navbar';
import MobileNavbar from '../navbar/mobile-navbar';
import { useWindowSize } from '../../hooks';

function Header(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setOpen(false);
  }, [width]);

  return (
    <HeaderWrapper>
      <MainNavbarWrapper>
        <MainNavbar openNavbar={() => setOpen(true)} />
      </MainNavbarWrapper>
      <MobileNavbar open={isOpen} closeNavbar={() => setOpen(false)} />
      <SubNavbarWrapper>
        <SubNavbar />
      </SubNavbarWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const MainNavbarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

const SubNavbarWrapper = styled.div`
  display: none;
  background-color: ${(props) => props.theme.colors.secondary};

  ${mediaQuery('sm')} {
    display: block;
  }
`;

export default Header;
