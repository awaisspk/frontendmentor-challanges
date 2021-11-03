import {Layout} from '@components/Layout';
import type {AppProps} from 'next/app';
import {globalStyles} from '../styles/globalStyles';

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
