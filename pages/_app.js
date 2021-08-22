import '@scss/global.scss';
import Head from 'next/head';
import { Layout } from '@components/layout';
import { wrapper } from 'store/initStore';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>gofilm.io - онлайн кинотеатр</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
export default wrapper.withRedux(App);
