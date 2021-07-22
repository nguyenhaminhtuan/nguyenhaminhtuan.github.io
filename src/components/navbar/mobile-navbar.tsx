import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Icon from '../icon';

type MobileNavbarProps = {
  open: boolean;
  closeNavbar: () => void;
} & React.ComponentPropsWithoutRef<'div'>;

function MobileNavbar({
  open,
  closeNavbar,
  ...props
}: MobileNavbarProps): JSX.Element {
  return (
    <MobileNavbarWrapper open={open} {...props}>
      <IconWrapper>
        <Icon.Button
          css={styles.icon}
          icon={faTimes}
          size="2x"
          onClick={closeNavbar}
        />
      </IconWrapper>
      <Nav>
        <li>
          <Link href="/about-me">
            <a>About me</a>
          </Link>
        </li>
        <li>
          <Link href="/Skills">
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/Projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
        </li>
      </Nav>
    </MobileNavbarWrapper>
  );
}

const styles = {
  icon: css`
    width: 50px;
    height: 50px;
    font-size: 21px;
  `,
};

const MobileNavbarWrapper = styled.div<{ open: boolean }>`
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (!props.open ? 0 : 100)}%;
  overflow: hidden;
  z-index: 3;
  transition: height 150ms ease-in-out;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 18px;
`;

const Nav = styled.ul`
  margin-top: 20px;
  text-align: center;

  & > li {
    padding: 12px 0;
    font-weight: bold;
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.fonts.mono};
  }

  & > li:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export default MobileNavbar;
