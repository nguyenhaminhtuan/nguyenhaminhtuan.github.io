import '@emotion/react';

declare module '@emotion/react' {
  export interface Color {
    white: {
      100: string;
      200: string;
    };
    transparent: string;
    gray: {
      100: string;
      200: string;
    };
    green: {
      100: string;
      200: string;
      300: string;
      400: string;
    };
  }
  export interface Theme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      footer: string;
    } & Color;
  }
}
