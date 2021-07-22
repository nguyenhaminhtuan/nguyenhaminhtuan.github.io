import '../styles/normalize.css';
import '../styles/typography.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { ThemeModeProvider } from '../hooks/theme-mode';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeModeProvider>
  );
}
export default MyApp;
