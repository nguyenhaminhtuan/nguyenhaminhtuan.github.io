import React from 'react';
import styled from '@emotion/styled';
import Container from '../container';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <h2>Social</h2>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 15px 0;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.gray[100]};

  & h2 {
    font-family: 'Hackernoon';
  }
`;

export default Footer;
