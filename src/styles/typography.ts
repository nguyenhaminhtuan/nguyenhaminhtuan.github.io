import { css } from '@emotion/react';
import prefix from '../utils/prefix';

const typography = css`
  @font-face {
    font-family: 'Hackernoon';
    src: url('${prefix}/fonts/HackerNoonV1-Regular.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url('${prefix}/fonts/IBMPlexMono-Regular.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-weight: 500;
    src: url('${prefix}/fonts/IBMPlexMono-Medium.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-weight: 600;
    src: url('${prefix}/fonts/IBMPlexMono-SemiBold.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-weight: bold;
    src: url('${prefix}/fonts/IBMPlexMono-Bold.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    src: url('${prefix}/fonts/IBMPlexMono-Italic.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('${prefix}/fonts/IBMPlexSans-Regular.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    src: url('${prefix}/fonts/IBMPlexSans-Medium.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    font-weight: 600;
    src: url('${prefix}/fonts/IBMPlexSans-SemiBold.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    font-weight: bold;
    src: url('${prefix}/fonts/IBMPlexSans-Bold.ttf');
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: italic;
    src: url('${prefix}/fonts/IBMPlexSans-Italic.ttf');
  }
`;

export default typography;
