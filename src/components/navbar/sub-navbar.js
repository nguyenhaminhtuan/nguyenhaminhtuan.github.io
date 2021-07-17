import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const SubNavbar = () => {
  return (
    <ListNavItem>
      <NavItem>
        <Link to="/about-me">About me</Link>
      </NavItem>
      <NavItem>
        <Link to="/skills">Skills</Link>
      </NavItem>
      <NavItem>
        <Link to="/projects">Projects</Link>
      </NavItem>
      <NavItem>
        <Link to="/contract">Contract</Link>
      </NavItem>
      <NavItem>
        <Link to="/article">Article</Link>
      </NavItem>
    </ListNavItem>
  );
};

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
