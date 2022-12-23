import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TradeMarks from '../sections/TradeMarks';
import DoneWork from '../sections/DoneWork';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className="home_page">
      <Head>
        <title>Time technology</title>
      </Head>
      <TradeMarks />
      <DoneWork />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
