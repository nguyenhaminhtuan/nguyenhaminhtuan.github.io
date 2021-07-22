import styled from '@emotion/styled';

const Logo = styled.a`
  font-family: ${(props) => props.theme.fonts.hackernoon};
  font-size: 27px;

  &:after {
    content: 'MINHTUAN';
    color: ${(props) => props.theme.colors.green[400]};
  }
`;

export default Logo;
