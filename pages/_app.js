import { appWithTranslation } from 'next-i18next';
import Layout from '../layout/Index';
import '../styles/index.scss';
// import '../styles/_global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
