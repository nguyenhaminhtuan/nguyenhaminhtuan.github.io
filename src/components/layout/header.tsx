import styled from '@emotion/styled';
import { mediaQuery } from '../../styles';
import { MainNavbar, SubNavbar } from '../navbar';

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <MainNavbarWrapper>
        <MainNavbar />
      </MainNavbarWrapper>
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
