import styled from '@emotion/styled';

type InputProps = {
  fullWidth?: boolean;
};

const Input = styled.input<InputProps>`
  margin: 5px 0;
  padding: 10px 20px 10px 10px;
  width: ${(props) => props.fullWidth && '100%'};
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: ${(props) => props.theme.colors.green[200]};
  background-color: ${(props) => props.theme.colors.gray[200]};
  border: none;
  border-radius: 2px;

  &:focus {
    outline: 4px solid ${(props) => props.theme.colors.green[200]};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.green[300]};
  }
`;

export default Input;
