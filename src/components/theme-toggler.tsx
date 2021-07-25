import { css } from '@emotion/react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useThemeMode } from '../hooks/theme-mode';
import Icon from './icon';

const ThemeToggler = () => {
  const { theme, setTheme } = useThemeMode();

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Icon.Button
      css={styles.root}
      iconCss={styles.icon(theme === 'light')}
      icon={faSun}
      size="lg"
      onClick={themeToggler}
    >
      <Icon css={styles.icon(theme === 'dark')} icon={faMoon} size="lg" />
    </Icon.Button>
  );
};

const styles = {
  root: css`
    font-size: 25px;
    width: 50px;
    height: 50px;
  `,
  icon: (isActive: boolean) => css`
    position: absolute;
    transform: ${!isActive ? `translate(-50%, 50px)` : `translate(-50%, -50%)`};
    transition: all 200ms ease-in-out 0s;
    opacity: ${!isActive ? 0 : 0.7};
  `,
};

export default ThemeToggler;
