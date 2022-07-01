import '@scss/global.scss';
import Head from 'next/head';
import { Layout } from '@components/layout';
import { wrapper } from 'store/initStore';
import NextNProgress from "nextjs-progressbar";

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

      <NextNProgress
          height={3}
          color='#D71F26'
          stopDelayMs={200}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
