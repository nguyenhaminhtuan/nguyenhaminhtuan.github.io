import styled from '@emotion/styled';
import { mediaQuery } from '../styles';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 100%;

  ${mediaQuery('sm')} {
    max-width: 540px;
  }
  ${mediaQuery('md')} {
    max-width: 720px;
  }
  ${mediaQuery('lg')} {
    max-width: 960px;
  }
  ${mediaQuery('xl')} {
    max-width: 1140px;
  }
`;

export default Container;
