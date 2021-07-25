import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  faArrowRight,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Icon from '../icon';

type NavItemProps = {
  href: string;
  text: string;
};

function NavItem({ href, text }: NavItemProps) {
  return (
    <Link href={href} passHref>
      <li>
        <a>{text}</a>
        <Icon.Button
          css={(theme) => ({
            color: theme.colors.green[200],
            marginRight: 5,
          })}
          icon={faChevronRight}
          size="lg"
        />
      </li>
    </Link>
  );
}

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
          icon={faArrowRight}
          size="2x"
          onClick={closeNavbar}
        />
      </IconWrapper>
      <Nav>
        <NavItem href="/about-me" text="About me" />
        <NavItem href="/skills" text="Skills" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/contact" text="Contact" />
        <NavItem href="/articles" text="Articles" />
      </Nav>
    </MobileNavbarWrapper>
  );
}

const styles = {
  icon: (theme: Theme) => css`
    width: 50px;
    height: 50px;
    color: ${theme.colors.green[200]};
  `,
};

const MobileNavbarWrapper = styled.div<{ open: boolean }>`
  color: ${(props) => props.theme.colors.green[200]};
  background-color: ${(props) => props.theme.colors.secondary};
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
  padding: 8px 10px;
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.ul`
  margin-top: 4rem;
  text-align: center;

  & > li {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: ${(props) => props.theme.fonts.mono};
    border-bottom: 1px solid ${(props) => props.theme.colors.green[200]};

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.white[200]};
    }
    &:first-of-type,
    :last-of-type {
      color: ${(props) => props.theme.colors.white[200]};
    }
    &:first-of-type:hover,
    :last-of-type:hover {
      color: ${(props) => props.theme.colors.green[200]};
    }
  }
`;

export default MobileNavbar;
