export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mediaQuery = (size) =>
  `@media (min-width: ${breakpoints[size]}px)`;
