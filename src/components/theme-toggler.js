import React from 'react';
import styled from '@emotion/styled';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useThemeMode } from '../hooks/theme-mode';
import Icon from './icon';

const ThemeToggler = () => {
  const { theme, setTheme } = useThemeMode();

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <TogglerWrapper type="button" onClick={themeToggler}>
      <ToggleIcon icon={faSun} isActived={theme === 'light'} />
      <ToggleIcon icon={faMoon} isActived={theme === 'dark'} />
    </TogglerWrapper>
  );
};

const TogglerWrapper = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
`;

const ToggleIcon = styled(Icon)`
  font-size: 28px;
  position: absolute;
  transform: ${(props) =>
    !props.isActived ? `translate(-50%, 50px)` : `translate(-50%, -50%)`};
  transition: all 200ms ease-in-out 0s;
  opacity: ${(props) => (!props.isActived ? 0 : 0.8)};
`;

export default ThemeToggler;
