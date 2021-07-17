const colors = {
  white: {
    100: 'rgb(255, 255, 255)',
    200: 'rgb(246, 247, 249)',
  },
  transparent: 'rgba(0, 0, 0, 0)',
  gray: {
    100: 'rgb(60, 60, 59)',
    200: 'rgb(33, 36, 40)',
  },
  green: {
    100: 'rgb(98, 255, 134)',
    200: 'rgb(0, 255, 0)',
    300: 'rgb(0, 187, 0)',
    400: 'rgb(0, 59, 0)',
  },
};

const themes = {
  light: {
    colors: {
      ...colors,
      background: colors.white[100],
      text: colors.gray[100],
      primary: colors.green[200],
      secondary: colors.green[400],
      footer: colors.gray[100],
    },
  },
  dark: {
    colors: {
      ...colors,
      background: colors.gray[200],
      text: colors.white[100],
      primary: colors.green[300],
      secondary: colors.green[400],
      footer: colors.gray[100],
    },
  },
};

export default themes;
