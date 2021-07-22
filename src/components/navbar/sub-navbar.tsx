import styled from '@emotion/styled';
import Link from 'next/link';

function SubNavbar(): JSX.Element {
  return (
    <ListNavItem>
      <NavItem>
        <Link href="/about-me">
          <a>About me</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/article">
          <a>Articles</a>
        </Link>
      </NavItem>
    </ListNavItem>
  );
}

const ListNavItem = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  padding: 10px 20px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white[100]};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &:first-of-type,
  &:last-of-type {
    color: ${(props) => props.theme.colors.primary};
  }

  &:first-of-type:hover,
  &:last-of-type:hover {
    color: ${(props) => props.theme.colors.white[100]};
  }
`;

export default SubNavbar;
