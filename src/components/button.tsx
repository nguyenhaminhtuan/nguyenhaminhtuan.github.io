import styled from '@emotion/styled';

type ButtonProps = {
  variant: 'default' | 'outlined';
};

const Button = styled.a<ButtonProps>`
  margin: 3px;
  padding: 3px 15px;
  min-width: 100px;
  display: inline-block;
  font-size: 1.65rem;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.mono};
  text-align: center;
  color: ${(props) => props.theme.colors.gray[200]};
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid
    ${(props) =>
      props.variant === 'outlined'
        ? props.theme.colors.gray[200]
        : props.theme.colors.transparent};

  &:hover {
    background-color: ${(props) => props.theme.colors.green[100]};
    border: 2px solid ${(props) => props.theme.colors.gray[200]};
  }
`;

const Base = Button.withComponent('button');

export default Object.assign(Button, { Base });
