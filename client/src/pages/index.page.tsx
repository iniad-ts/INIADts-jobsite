import Head from 'next/head';
import { WelcomePage } from 'src/components/WelcomePage/WelcomePage';

const Home = () => {
  return (
    <>
      <Head>
        <title>Top Page | INIAD.ts</title>
      </Head>
      <WelcomePage />
    </>
  );
};

export default Home;
